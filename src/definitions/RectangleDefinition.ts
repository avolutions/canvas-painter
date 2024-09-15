import { Angle } from "../types/Angle.js";
import { Point } from "../types/Point.js";
import { IShapeDefinition } from "./IShapeDefinition.js";

/**
 * Class representing a Rectangle definition.
 * Implements the IShapeDefinition interface.
 */
export class RectangleDefinition implements IShapeDefinition {
  /** The position of the rectangle. */
  position: Point;

  /** The width of the rectangle. */
  width: number;

  /** The height of the rectangle. */
  height: number;

  /** The angle of the rectangle in degrees, represented by an Angle instance. */
  angle: Angle;

  /**
   * Creates a new instance of RectangleDefinition.
   *
   * @param {Point} position - The position of the rectangle (top-left or center).
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @param {Angle} angle - The angle of the rectangle in degrees.
   */
  constructor(position: Point, width: number, height: number, angle: Angle) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.angle = angle;
  }
}
