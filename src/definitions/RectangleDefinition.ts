import { Angle } from "../types/Angle.js";
import { Point } from "../types/Point.js";
import { IShapeDefinition } from "./IShapeDefinition.js";

/**
 * Class representing a Rectangle definition.
 */
export class RectangleDefinition implements IShapeDefinition {
  /** The position of the rectangle. */
  public position: Point;

  /** The width of the rectangle. */
  public width: number;

  /** The height of the rectangle. */
  public height: number;

  /** The angle of the rectangle. */
  public angle: Angle;

  /**
   * Creates a new instance of RectangleDefinition.
   *
   * @param position - The position of the rectangle (top-left or center).
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   * @param angle - The angle of the rectangle in degrees.
   */
  constructor(
    position: Point,
    width: number,
    height: number,
    angle: Angle
  ) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.angle = angle;
  }
}
