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

  /** List of shapes being watched for changes and re-rendered. */
  private watchedShapes: IShape[] = [];

  /** Default options for the canvas dimensions. */
  private _defaultOptions: CanvasOptions = {
    width: 300,
    height: 150
  };

  private _defaultStyle: CanvasStyle = {
    color: 'rgba(0, 0, 0, 0)',
    border: {
      color: 'rgba(0, 0, 0, 0)',
      width: 0
    }
  };

  /**
   * Constructs a new Canvas instance.
   *
   * @param {HTMLCanvasElement} canvas - The HTML canvas element.
   * @param {CanvasRenderingContext2D} context - The 2D rendering context of the canvas.
   * @param {CanvasOptions} [options] - Optional configuration options for the canvas.
   * @private
   */
  private constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, options?: CanvasOptions) {
    this._canvas = canvas;
    this._context = context;

    // Merge default options with the provided options
    this._options = {
      ...this._defaultOptions,
      ...options
    };

    // Set styles
    this._options.style = {
      ...this._defaultStyle,
      ...this._options.style
    };

    // Set canvas dimensions if provided
    if (this._options.width != null) {
      this._canvas.width = this._options.width;
    }
    if (this._options.height != null) {
      this._canvas.height = this._options.height;
    }

    this.setStyle(this._options.style);
  }

  /**
   * Initializes a Canvas instance by retrieving the canvas element by ID and its context.
   *
   * @param {string} id - The ID of the HTML canvas element.
   * @param {CanvasOptions} [options] - Optional configuration options for the canvas.
   * @returns {Canvas} A new Canvas instance.
   * @throws {Error} If the canvas element is not found or is not a valid canvas.
   */
  static init(id: string, options?: CanvasOptions): Canvas {
    const canvas = document.getElementById(id);
    if (!canvas) {
      throw new Error(`Element with id '${id}' not found`);
    }

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error(`Element with id '${id}' is not a canvas`);
    }

    const context = canvas.getContext('2d', options);
    if (!(context instanceof CanvasRenderingContext2D)) {
      throw new Error(`Failed to get '2d' context from canvas`);
    }

    return new Canvas(canvas, context, options);
  }

  private setStyle(style: CanvasStyle) {
    this._context.fillStyle = style.color;
  }

  /**
   * Registers a shape to be watched for changes and renders it.
   *
   * @param {IShape} shape - The shape to watch and render on the canvas.
   */
  watch(shape: IShape): void {
    // Add an observer to redraw the canvas when the shape changes
    shape.addObserver(() => this.draw());
    this.watchedShapes.push(shape);
    this.draw(); // Initial draw after adding the shape
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
   * Clears the canvas and re-renders all watched shapes.
   * @private
   */
  private draw(): void {
    // Clear the entire canvas
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    // Render each watched shape
    this.watchedShapes.forEach(shape => shape.render(this.context));
  }
}
