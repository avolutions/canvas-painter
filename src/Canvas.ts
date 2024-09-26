import { CanvasOptions } from "./options/CanvasOptions.js";
import { IShape } from "./shapes/IShape.js";
import { CanvasStyle } from "./styles/CanvasStyle.js";

/**
 * Class representing a Canvas element that can manage and render shapes.
 */
export class Canvas {
  /** The HTML canvas element being managed. */
  private _canvas: HTMLCanvasElement;

  /** The 2D rendering context of the canvas. */
  private _context: CanvasRenderingContext2D;

  /** Configuration options for the canvas, including dimensions. */
  private _options: CanvasOptions;

  /** Styling options for the canvas, such as border color and width. */
  private _style: CanvasStyle;

  /** List of shapes being watched for changes and re-rendered. */
  private watchedShapes: IShape[] = [];

  /** Default options for the canvas dimensions. */
  private _defaultOptions: CanvasOptions = {
    width: 300,
    height: 150
  };

  /** Default styles for the canvas, including border settings. */
  private _defaultStyle: CanvasStyle = {
    color: 'black'
  };

  /**
   * Constructs a new Canvas instance.
   *
   * @param {HTMLCanvasElement} canvas - The HTML canvas element.
   * @param {CanvasRenderingContext2D} context - The 2D rendering context of the canvas.
   * @param {CanvasOptions} [options] - Optional configuration options for the canvas.
   * @param {CanvasStyle} [style] - Optional styling options for the canvas.
   * @private
   */
  private constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    options?: CanvasOptions,
    style?: CanvasStyle
  ) {
    this._canvas = canvas;
    this._context = context;

    // Merge default options with the provided options
    this._options = {
      ...this._defaultOptions,
      ...options
    };

    // Set styles
    this._style = {
      ...this._defaultStyle,
      ...style
    };

    // Set canvas dimensions if provided
    if (this._options.width != null) {
      this._canvas.width = this._options.width;
    }
    if (this._options.height != null) {
      this._canvas.height = this._options.height;
    }

    this.setContextStyle(this._style);
  }

  /**
   * Initializes a Canvas instance by retrieving the canvas element by ID and its context.
   *
   * @param {string} id - The ID of the HTML canvas element.
   * @param {CanvasOptions} [options] - Optional configuration options for the canvas.
   * @param {CanvasStyle} [style] - Optional styling options for the canvas.
   * @returns {Canvas} A new Canvas instance.
   * @throws {Error} If the canvas element is not found or is not a valid canvas.
   */
  static init(id: string, options?: CanvasOptions, style?: CanvasStyle): Canvas {
    const canvas = document.getElementById(id);
    if (!canvas) {
      throw new Error(`Element with id '${id}' not found`);
    }

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error(`Element with id '${id}' is not a canvas`);
    }

    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error(`Failed to get '2d' context from canvas`);
    }

    return new Canvas(canvas, context, options, style);
  }

  /**
   * Sets the canvas rendering context's styles based on the provided CanvasStyle.
   *
   * @param {CanvasStyle} style - The style settings to apply to the canvas context.
   * @private
   */
  private setContextStyle(style: CanvasStyle): void {
    if (style.color) {
      this._context.fillStyle = style.color;
    }
  }

  /**
   * Registers a shape or an array of shapes to be watched for changes and renders them.
   *
   * @param {IShape | IShape[]} shapeOrShapes - The shape(s) to watch and render on the canvas.
   * @param {boolean} [redraw=true] - Whether to immediately redraw the canvas after registering the shape(s).
   */
  watch(shapeOrShapes: IShape | IShape[], redraw: boolean = true): void {
    // If passed parameter was a single shape we convert it to array
    const shapes = Array.isArray(shapeOrShapes) ? shapeOrShapes : [shapeOrShapes];

    // Flag to track if at least one shape was added
    let shapeAdded = false;

    shapes.forEach((shape) => {
      if (!this.watchedShapes.includes(shape)) {
        // Add an observer to redraw the canvas when the shape changes
        shape.addObserver(this.observerRedraw);

        // Add to watched shapes
        this.watchedShapes.push(shape);

        shapeAdded = true;
      }
    });

    if (shapeAdded && redraw) {
      // Initial draw after at least one shape was added
      this.redraw();
    }
  }

  /**
   * Unregisters a shape or an array of shapes from being watched and re-renders the canvas.
   *
   * @param {IShape | IShape[]} shapeOrShapes - The shape(s) to stop watching.
   * @param {boolean} [redraw=true] - Whether to immediately redraw the canvas after unregistering the shape(s).
   */
  unwatch(shapeOrShapes: IShape | IShape[], redraw: boolean = true): void {
    // If passed parameter was a single shape we convert it to array
    const shapes = Array.isArray(shapeOrShapes) ? shapeOrShapes : [shapeOrShapes];

    // Flag to track if at least one shape was removed
    let shapeRemoved = false;

    shapes.forEach((shape) => {
      const index = this.watchedShapes.indexOf(shape);
      if (index !== -1) {
        // Remove observer to not redraw anymore on changes of shape
        shape.removeObserver(this.observerRedraw);

        // Remove from watched shapes
        this.watchedShapes.splice(index, 1);

        shapeRemoved = true;
      }
    });

    if (shapeRemoved && redraw) {
      // Redraw canvas after at least one shape was removed
      this.redraw();
    }
  }

  /**
   * Gets the 2D rendering context of the canvas.
   *
   * @returns {CanvasRenderingContext2D} The 2D context of the canvas.
   */
  get context(): CanvasRenderingContext2D {
    return this._context;
  }

  /**
   * Clears the canvas by removing all content.
   */
  public clear(): void {
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  /**
   * Observes changes in shapes and triggers the canvas redraw process.
   *
   * @private
   */
  private observerRedraw = (): void => {
    this.redraw();
  };

  /**
   * Clears the canvas and re-renders all watched shapes.
   */
  public redraw(): void {
    this.clear();

    // Render each watched shape
    this.watchedShapes.forEach((shape) => this.draw(shape));
  }

  /**
   * Renders the specified shape on the canvas.
   *
   * @param {IShape} shape - The shape to render.
   */
  public draw(shape: IShape): void {
    shape.render(this.context);
  }
}
