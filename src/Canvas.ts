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

  /**
   * Constructs a new Canvas instance.
   *
   * @param canvas - The HTML canvas element.
   * @param context - The 2D rendering context of the canvas.
   * @param options - Optional configuration options for the canvas.
   * @param style - Optional styling options for the canvas.
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
      ...CanvasOptions.DefaultOptions,
      ...options
    };

    // Set styles
    this._style = {
      ...CanvasStyle.DefaultStyle,
      ...style
    };

    // Determine width, set canvas width and update options with new value
    const width = this.getWidth(options);
    this._canvas.width = width;
    this._options.width = width;

    // Determine height, set canvas width and update options with new value
    const height = this.getHeight(options);
    this._canvas.height = height;
    this._options.height = height;

    this.setContextStyle(this._style);
  }

  /**
   * Retrieves the height of the canvas element, prioritizing the provided options,
   * then the HTML canvas element's height attribute, followed by CSS height, and finally
   * falls back to the default height.
   *
   * @param options - Optional canvas options that may contain a height.
   * @returns The height value based on the order of priority described.
   */
  private getHeight(options: CanvasOptions | undefined): number {
    // If height was provided as option
    if (options?.height) {
      return options.height;
    }

    // If height is specified as attribute of HTML canvas element
    const htmlHeight = this._canvas.getAttribute('height')
    if (htmlHeight) {
      return parseFloat(htmlHeight);
    }

    // If height is specified in any CSS of the element
    const cssHeight = this.getCssDimensions().height;
    if (cssHeight) {
      return cssHeight;
    }

    // Use default options as ultimate fallback
    return CanvasOptions.DefaultOptions.height as number;
  }

  /**
   * Retrieves the width of the canvas element, prioritizing the provided options,
   * then the HTML canvas element's width attribute, followed by CSS width, and finally
   * falls back to the default width.
   *
   * @param options - Optional canvas options that may contain a width.
   * @returns The width value based on the order of priority described.
   */
  private getWidth(options: CanvasOptions | undefined): number {
    // If width was provided as option
    if (options?.width) {
      return options.width;
    }

    // If width is specified as attribute of HTML canvas element
    const htmlWidth = this._canvas.getAttribute('width')
    if (htmlWidth) {
      return parseFloat(htmlWidth);
    }

    // If width is specified in any CSS of the element
    const cssWidth = this.getCssDimensions().width;
    if (cssWidth) {
      return cssWidth;
    }

    // Use default options as ultimate fallback
    return CanvasOptions.DefaultOptions.width as number;
  }

  /**
   * Retrieves the CSS width and height dimensions of the canvas element by
   * computing the styles applied to it. If the values are not present, it returns
   * undefined for both width and height.
   *
   * @returns An object containing the CSS width and height, if available.
   */
  private getCssDimensions(): { width?: number, height?: number } {
    const computedStyle = window.getComputedStyle(this._canvas);

    const width = computedStyle.width ? parseFloat(computedStyle.width) : undefined;
    const height = computedStyle.height ? parseFloat(computedStyle.height) : undefined;

    return {
      width: width,
      height: height,
    };
  }

  /**
   * Initializes a Canvas instance by retrieving the canvas element by ID and its context.
   *
   * @param id - The ID of the HTML canvas element.
   * @param options - Optional configuration options for the canvas.
   * @param style - Optional styling options for the canvas.
   * @returns A new Canvas instance.
   * @throws {Error} If the canvas element is not found or is not a valid canvas.
   */
  public static init(id: string, options?: CanvasOptions, style?: CanvasStyle): Canvas {
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
   * @param style - The style settings to apply to the canvas context.
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
   * @param shapeOrShapes - The shape(s) to watch and render on the canvas.
   * @param redraw - Whether to immediately redraw the canvas after registering the shape(s).
   */
  public watch(shapeOrShapes: IShape | IShape[], redraw: boolean = true): void {
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
   * @param shapeOrShapes - The shape(s) to stop watching.
   * @param redraw - Whether to immediately redraw the canvas after unregistering the shape(s).
   */
  public unwatch(shapeOrShapes: IShape | IShape[], redraw: boolean = true): void {
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
   * @returns The 2D context of the canvas.
   */
  public get context(): CanvasRenderingContext2D {
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
   * Clears the canvas and re-renders all watched and visible shapes.
   */
  public redraw(): void {
    this.clear();

    // Render each watched shape
    this.watchedShapes.forEach((shape) => this.draw(shape));
  }

  /**
   * Renders the specified shape on the canvas if shape is visible.
   *
   * @param shape - The shape to render.
   */
  public draw(shape: IShape): void {
    if (shape.isVisible()) {
      shape.render(this.context);
    }
  }
}
