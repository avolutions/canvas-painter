/**
 * Class representing a 2D point with x and y coordinates.
 */
export class Point {
  /**
   * The x-coordinate of the point.
   * @type {number}
   */
  public x: number;

  /**
   * The y-coordinate of the point.
   * @type {number}
   */
  public y: number;

  /**
   * Creates an instance of Point.
   *
   * @param {number} x - The x-coordinate of the point.
   * @param {number} y - The y-coordinate of the point.
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}