import { Point } from "../types/Point.js";
import { ShapeDefinition } from "./ShapeDefinition.js";

/**
 * Class representing a circle definition.
 */
export class CircleDefinition extends ShapeDefinition {
  /** The center point of the circle. */
  public center: Point;

  /** The radius of the circle. */
  private _radius!: number;

  /**
   * Creates an instance of CircleDefinition.
   *
   * @param center - The center point of the circle.
   * @param radius - The radius of the circle.
   */
  constructor(
    center: Point,
    radius: number,
  ) {
    super();

    this.center = center;
    this.radius = radius;
  }

  /**
   * Gets the radius of the definition.
   *
   * @returns The radius of the definition.
   */
  public get radius(): number {
    return this._radius;
  }

  /**
   * Sets the radius of the definition.
   *
   * @param radius - The new radius of the definition.
   *
   * @throws {Error} Throws if negative radius is passed.
   */
  public set radius(radius: number) {
    if (radius <= 0) {
      throw new Error("Radius must be a positive number");
    }
    this._radius = radius;
  }
}
