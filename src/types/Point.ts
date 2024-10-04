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
}
