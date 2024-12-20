import { InvalidConstructorArgumentsError } from "../errors/InvalidConstructorArgumentsError.js";
import { CircleDefinition } from "../definitions/CircleDefinition.js";
import { CircleOptions } from "../options/CircleOptions.js";
import { ICircleOptions } from "../options/interfaces/ICircleOptions.js";
import { CircleStyle } from "../styles/CircleStyle.js";
import { ICircleStyle } from "../styles/interfaces/ICircleStyle.js";
import { Point } from "../types/Point.js";
import { Shape } from "./Shape.js";

/**
 * Class representing a circle, extending the Shape class with a CircleDefinition.
 * Provides functionality for rendering, resizing and moving the circle.
 */
export class Circle extends Shape<CircleDefinition, CircleStyle, CircleOptions> {
  /**
   * @param center - The center `Point` of the circle.
   * @param radius - The radius of the circle.
   * @param style - Defines the styling of the circle.
   * @param options - The configuration options for the circle.
   */
  constructor(center: Point, radius: number, style?: ICircleStyle, options?: ICircleOptions);

  /**
   * @param centerX - The X-coordinate of the starting point.
   * @param centerY - The Y-coordinate of the starting point.
   * @param radius - The radius of the circle.
   * @param style - Defines the styling of the circle.
   * @param options - The configuration options for the circle.
   */
  constructor(centerX: number, centerY: number, radius: number, style?: ICircleStyle, options?: ICircleOptions);

  /**
   * Creates an instance of the `Circle` class.
   *
   * The `Circle` can be created either by passing a `Point` object representing the center,
   * or by providing the individual coordinates for the center.
   *
   * @throws {@link InvalidConstructorArgumentsError} if invalid arguments are passed.
   */
  constructor(
    arg1: Point | number,
    arg2: number,
    arg3?: ICircleStyle | number,
    arg4?: ICircleStyle | ICircleOptions,
    arg5?: ICircleOptions
  ) {
    let definition: CircleDefinition;
    let style: ICircleStyle;
    let options: ICircleOptions;

    if (typeof arg1 === 'number' && typeof arg3 === 'number') {
      // Constructor with coordinates
      const center = new Point(arg1, arg2);
      definition = new CircleDefinition(center, arg3);
      style = arg4 as ICircleStyle;
      options = arg5 as ICircleOptions;

    } else if (arg1 instanceof Point && typeof arg3 !== 'number' && arg5 === undefined) {
      // Constructor with Point object
      definition = new CircleDefinition(arg1, arg2);
      style = arg3 as ICircleStyle;
      options = arg4 as ICircleOptions;

    } else {
      throw new InvalidConstructorArgumentsError();
    }

    super(definition, new CircleStyle(style), new CircleOptions(options));
  }

  // Getters

  /**
   * Gets the center point of the circle.
   *
   * @returns The center point of the circle.
   */
  public get center(): Point {
    return this._definition.center;
  }

  /**
   * Gets the radius of the circle.
   *
   * @returns The radius of the circle.
   */
  public get radius(): number {
    return this._definition.radius;
  }

  // Setters

  /**
   * Sets the center point of the circle.
   *
   * @param center - The new center point of the circle.
   */
  public set center(center: Point) {
    this._definition.center = center;
  }

  /**
   * Sets the radius of the circle.
   *
   * @param radius - The new radius of the circle.
   */
  public set radius(radius: number) {
    this._definition.radius = radius;
  }

  /**
   * Moves the circle by adjusting the current center by delta values.
   *
   * @param deltaX - The change in the x-coordinate.
   * @param deltaY - The change in the y-coordinate.
   */
  public move(deltaX: number = 0, deltaY: number = 0): void {
    this.center.move(deltaX, deltaY);
  }

  /**
   * Resizes the circle by adjusting the current radius by delta values.
   *
   * @param delta - The change of the radius.
   */
  public resize(delta: number): void {
    this.radius += delta;
  }

  /**
   * Renders the circle on the canvas using the provided 2D rendering context.
   *
   * The circle will be rendered with its current position and radius size.
   *
   * @param context - The 2D rendering context of the canvas where the circle will be drawn.
   */
  public render(context: CanvasRenderingContext2D): void {
    context.save(); // Save the current canvas state

    // Set circle specific styles
    context.fillStyle = this.stateStyle.color;

    context.beginPath();
    context.arc(
      this.center.x,
      this.center.y,
      this.radius,
      0,
      Math.PI * 2
    );
    context.fill();

    // Draw border for circle
    if (this.hasBorder()) {
      context.strokeStyle = this.stateStyle.borderColor;
      context.lineWidth = this.stateStyle.borderWidth;

      context.stroke();
    }

    context.restore(); // Restore the canvas state to before the transformations
  }

  /**
   * Determines if the mouse is currently over the shape.
   *
   * @param mousePosition - The current mouse position.
   * @returns True if the mouse is over the shape, false otherwise.
   */
  public isMouseOver(mousePosition: Point): boolean {
    const dx = mousePosition.x - this.center.x;
    const dy = mousePosition.y - this.center.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Adjust radius to include the border width
    const borderRadius = this.hasBorder() ? this.stateStyle.borderWidth / 2 : 0;
    const effectiveRadius = this.radius + borderRadius;

    // Check if the distance is within the circle's radius
    return distance <= effectiveRadius;
  }

  /**
   * Handles the drag operation by applying the given delta to the current position.
   *
   * @param delta - The change in position represented as a `Point`.
   */
  public onDrag(delta: Point): void {
    this.move(delta.x, delta.y);
  }
}
