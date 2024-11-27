import { Point } from "../types/Point.js";

export interface IHandle {
  render(context: CanvasRenderingContext2D): void;
  setPosition(position: Point): void;
}