import { InvalidConstructorArgumentsError } from "../errors/InvalidConstructorArgumentsError.js";
import { LineDefinition } from "../definitions/LineDefinition.js";
import { ILineOptions } from "../options/interfaces/ILineOptions.js";
import { LineOptions } from "../options/LineOptions.js";
import { ILineStyle } from "../styles/interfaces/ILineStyle.js";
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
   * @param start - The starting `Point` of the line.
   * @param end - The ending `Point` of the line.
   * @param style - Defines the styling of the line.
   * @param options - The configuration options for the line.
   */
  constructor(start: Point, end: Point, style?: ILineStyle, options?: ILineOptions);

  /**
   * @param startX - The X-coordinate of the starting point.
   * @param startY - The Y-coordinate of the starting point.
   * @param endX - The X-coordinate of the ending point.
   * @param endY - The Y-coordinate of the ending point.
   * @param style - Defines the styling of the line.
   * @param options - The configuration options for the line.
   */
  constructor(startX: number, startY: number, endX: number, endY: number, style?: ILineStyle, options?: ILineOptions);

  /**
   * Creates an instance of the `Line` class.
   *
   * The `Line` can be created either by passing two `Point` objects representing the start and end of the line,
   * or by providing the individual coordinates for the start and end points.
   *
   * @throws {@link InvalidConstructorArgumentsError} if invalid arguments are passed.
   */
  constructor(
    arg1: Point | number,
    arg2: Point | number,
    arg3?: ILineStyle | number,
    arg4?: number | ILineOptions,
    arg5?: ILineStyle,
    arg6?: ILineOptions
  ) {
    let definition: LineDefinition;
    let style: ILineStyle;
    let options: ILineOptions;

    if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'number') {
      // Constructor with coordinates
      const start = new Point(arg1, arg2);
      const end = new Point(arg3, arg4);

      definition = new LineDefinition(start, end);
      style = arg5 as ILineStyle;
      options = arg6 as ILineOptions;
    } else if (arg1 instanceof Point && arg2 instanceof Point) {
      // Constructor with Point objects
      definition = new LineDefinition(arg1, arg2);
      style = arg3 as ILineStyle;
      options = arg4 as ILineOptions;
    } else {
      throw new InvalidConstructorArgumentsError();
    }

    super(definition, new LineStyle(style), new LineOptions(options));
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
   * Moves the start point of the line by the specified deltas along the x and y axes.
   *
   * @param deltaX - The amount to move the start point along the x-axis.
   * @param deltaY - The amount to move the start point along the y-axis.
   */
  public moveStart(deltaX: number = 0, deltaY: number = 0): void {
    this.start.move(deltaX, deltaY);
  }

  /**
   * Moves the end point of the line by the specified deltas along the x and y axes.
   *
   * @param deltaX - The amount to move the end point along the x-axis.
   * @param deltaY - The amount to move the end point along the y-axis.
   */
  public moveEnd(deltaX: number = 0, deltaY: number = 0): void {
    this.end.move(deltaX, deltaY);
  }

  /**
   * Renders the line on a canvas context.
   *
   * @param context - The canvas rendering context to draw the line.
   */
  public render(context: CanvasRenderingContext2D): void {
    context.save(); // Save the current canvas state

    context.lineWidth = this.stateStyle.width;
    context.strokeStyle = this.stateStyle.color;

    context.beginPath();
    context.moveTo(this.start.x, this.start.y);
    context.lineTo(this.end.x, this.end.y);
    context.stroke();

    context.restore(); // Restore the canvas state to before the transformations
  }

  /**
   * Determines if the mouse is currently over the shape.
   *
   * @param mousePosition - The current mouse position.
   * @returns True if the mouse is over the shape, false otherwise.
   */
  public isMouseOver(mousePosition: Point): boolean {
    // Get the line width and calculate the tolerance distance
    const lineWidth = this.stateStyle.width / 2;

    // Calculate the vector components for the line and the point-to-start vector
    const dx = this.end.x - this.start.x;
    const dy = this.end.y - this.start.y;
    const lengthSquared = dx * dx + dy * dy;

    // If the line is effectively a point (start and end are the same), just check distance to the point
    if (lengthSquared === 0) {
        const distanceToStart = Math.hypot(mousePosition.x - this.start.x, mousePosition.y - this.start.y);
        return distanceToStart <= lineWidth;
    }

    // Project the mouse position onto the line to find the closest point
    const t = ((mousePosition.x - this.start.x) * dx + (mousePosition.y - this.start.y) * dy) / lengthSquared;

    // Ensure t is within the segment [0, 1] to restrict the closest point to the line segment
    if (t < 0 || t > 1) {
      return false;
    }

    // Calculate the closest point on the line segment to the mouse position
    const closestX = this.start.x + t * dx;
    const closestY = this.start.y + t * dy;

    // Calculate the distance from the mouse position to the closest point
    const distanceToLine = Math.hypot(mousePosition.x - closestX, mousePosition.y - closestY);

    // Check if this distance is within the tolerance (half the line width)
    return distanceToLine <= lineWidth;
  }
}
