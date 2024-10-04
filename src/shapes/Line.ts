import { LineDefinition } from "../definitions/LineDefinition.js";
import { LineOptions } from "../options/LineOptions.js";
import { LineStyle } from "../styles/LineStyle.js";
import { Point } from "../types/Point.js";
import { Shape } from "./Shape.js";

export class Line extends Shape<LineDefinition, LineStyle, LineOptions> {
  constructor(
    start: Point,
    end: Point,
    style: LineStyle = {}
  ) {
    const lineDefinition = new LineDefinition(start, end);

    super(lineDefinition, style, {});
  }

  public get start(): Point {
    return this._definition.start;
  }

  public get end(): Point {
    return this._definition.end;
  }

  public set start(start: Point) {
    this._definition.start = start;
  }

  public set end(end: Point) {
    this._definition.end = end;
  }

  public render(context: CanvasRenderingContext2D): void {
    context.save(); // Save the current canvas state

    context.lineWidth = this.style.width ?? context.lineWidth;
    context.strokeStyle = this.style.color ?? context.strokeStyle;

    context.beginPath();
    context.moveTo(this.start.x, this.start.y);
    context.lineTo(this.end.x, this.end.y);
    context.stroke();

    context.restore(); // Restore the canvas state to before the transformations
  }
}