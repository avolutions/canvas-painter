import { Circle } from "../shapes/Circle.js";
import { Point } from "../types/Point.js";
import { IHandle } from "./IHandle.js";

export class Handle implements IHandle {
  private shape: Circle;

  constructor() {
    this.shape = new Circle(0, 0, 0, { color: 'white', borderColor: 'grey', borderWidth: 1 });
  }

  setPosition(position: Point): void {
    this.shape.center = position;
  }

  render(context: CanvasRenderingContext2D): void {
    const zoomScale = context.getTransform().a;
    const radius = 5 / zoomScale;
    const borderWidth = 1 / zoomScale;

    this.shape.radius = radius;
    this.shape.style.borderWidth = borderWidth;

    this.shape.render(context);
  }
}