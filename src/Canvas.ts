import { CanvasOptions } from "./options/CanvasOptions.js";
import { IShape } from "./shapes/IShape.js";

export class Canvas {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;
  private _options: CanvasOptions;
  private watchedShapes: IShape[] = [];

  private _defaultOptions: CanvasOptions = {
    width: 300,
    height: 150
  }

  private constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, options?: CanvasOptions) {
    this._canvas = canvas;
    this._context = context;

    this._options = {
      ...this._defaultOptions,
      ...options
    };;

    if (this._options.width != null) {
      this._canvas.width = this._options.width;
    }
    if (this._options.height != null) {
      this._canvas.height = this._options.height;
    }
  }

  static init(id: string, options?: CanvasOptions) {
    const canvas = document.getElementById(id);
    if (!canvas) {
      // TODO
      throw new Error(`Element with id '${id}' not found`);
    }

    if (!(canvas instanceof HTMLCanvasElement)) {
      // TODO
      throw new Error(`Element with id '${id}' is not a canvas`);
    }

    const context = canvas.getContext('2d', options);
    if (!(context instanceof CanvasRenderingContext2D)) {
      // TODO
      throw new Error(`Failed to get '2d' context from canvas`);
    }

    return new Canvas(canvas, context, options);
  }

  watch(shape: IShape): void {
    shape.addObserver(() => this.draw());
    this.watchedShapes.push(shape);
    this.draw();
  }

  get context(): CanvasRenderingContext2D {
    return this._context;
  }

  private draw() {
    // Clear the canvas
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    // Re-render all shapes
    this.watchedShapes.forEach(shape => shape.render(this.context));
  }
}