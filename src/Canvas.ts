import { IShape } from "./Shapes/IShape.js";

export class Canvas {
  private _context: CanvasRenderingContext2D;
  private watchedShapes: IShape[] = [];

  private constructor(context: CanvasRenderingContext2D) {
    this._context = context;
  }

  static init(id: string, options?: any) {
    const element = document.getElementById(id);
    if (!element) {
      // TODO
      throw new Error(`Element with id '${id}' not found`);
    }

    if (!(element instanceof HTMLCanvasElement)) {
      // TODO
      throw new Error(`Element with id '${id}' is not a canvas`);
    }

    const context = element.getContext('2d', options);
    if (!(context instanceof CanvasRenderingContext2D)) {
      // TODO
      throw new Error(`Failed to get '2d' context from canvas`);
    }

    return new Canvas(context);
  }

  watch(shape: IShape): void {
    shape.addObserver(() => this.draw());
    this.watchedShapes.push(shape);
    this.draw();
  }

  get context(): CanvasRenderingContext2D {
    return this._context;
  }

  draw() {
    // Clear the canvas
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    // Re-render all shapes
    this.watchedShapes.forEach(shape => shape.render(this.context));
  }
}