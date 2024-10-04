import { LineDefinition } from "../definitions/LineDefinition.js";
import { LineOptions } from "../options/LineOptions.js";
import { LineStyle } from "../styles/LineStyle.js";
import { Point } from "../types/Point.js";
import { Shape } from "./Shape.js";

/**
 * Represents a line shape that extends the generic Shape class.
 * It uses LineDefinition for defining the start and end points,
 * LineStyle for styling, and LineOptions for additional options.
 */
export class Line extends Shape<LineDefinition, LineStyle, LineOptions> {

  /**
   * Creates an instance of the Line class.
   *
   * @param start - The starting point of the line.
   * @param end - The ending point of the line.
   * @param style - The style of the line. Optional.
   */
  constructor(
    start: Point,
    end: Point,
    style: LineStyle = {}
  ) {
    const lineDefinition = new LineDefinition(start, end);
    super(lineDefinition, style, {});
  }

  // Getters

  /**
   * Gets the starting point of the line.
   *
   * @returns The starting point of the line.
   */
  public get start(): Point {
    return this._definition.start;
  }

  /**
     * Gets the ending point of the line.
     *
     * @returns The ending point of the line.
     */
  public get end(): Point {
    return this._definition.end;
  }

  // Setters

  /**
   * Sets the starting point of the line.
   *
   * @param start - The new starting point of the line.
   */
  public set start(start: Point) {
    this._definition.start = start;
  }

  /**
   * Sets the ending point of the line.
   *
   * @param end - The new ending point of the line.
   */
  public set end(end: Point) {
    this._definition.end = end;
  }

  /**
   * Renders the line on a canvas context.
   *
   * @param context - The canvas rendering context to draw the line.
   */
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
