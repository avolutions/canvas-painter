/**
 * Class representing a 2D point with x and y coordinates.
 */
export class Point {
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
}
