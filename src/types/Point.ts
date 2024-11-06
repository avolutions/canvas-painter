import { Serializable } from "../common/Serializable.js";

/**
 * Class representing a 2D point with x and y coordinates.
 */
export class Point extends Serializable {
  /**
   * The x-coordinate of the point.
   */
  public x: number;

  /**
   * The y-coordinate of the point.
   */
  public y: number;

  /**
   * Creates an instance of Point.
   *
   * @param x - The x-coordinate of the point.
   * @param y - The y-coordinate of the point.
   */
  constructor(x: number, y: number) {
    super();

    this.x = x;
    this.y = y;
  }

  /**
   * Moves the point along the x-axis by a specified delta.
   *
   * @param delta - The amount to move the point along the x-axis.
   */
  public moveX(delta: number): void {
    this.move(delta, 0);
  }

  /**
   * Moves the point along the y-axis by a specified delta.
   *
   * @param delta - The amount to move the point along the y-axis.
   */
  public moveY(delta: number): void {
    this.move(0, delta);
  }

  /**
   * Moves the point by a specified delta along the x and y axes.
   *
   * @param deltaX - The amount to move the point along the x-axis (default is 0).
   * @param deltaY - The amount to move the point along the y-axis (default is 0).
   */
  public move(deltaX: number = 0, deltaY: number = 0): void {
    this.x += deltaX;
    this.y += deltaY;
  }

  /**
   * Adjusts the point's coordinates to remove the effects of a specified pan offset and zoom level.
   *
   * @param offset - The pan offset to remove from the current point's coordinates.
   * @param zoom - The zoom level to reverse from the current point's coordinates.
   *
   * @returns The current point with out transformation.
   */
  public asUntransformed(offset: Point, zoom: number): this {
    this.x = (this.x - offset.x) / zoom;
    this.y = (this.y - offset.y) / zoom;

    return this;
  }
}
