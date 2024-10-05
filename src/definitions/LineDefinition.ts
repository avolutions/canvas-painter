import { Point } from "../types/Point.js";
import { IShapeDefinition } from "./IShapeDefinition.js";

/**
 * Class representing a line definition.
 */
export class LineDefinition implements IShapeDefinition {
  /** The starting point of the line. */
  public start: Point;

  /** The ending point of the line. */
  public end: Point;

  /**
   * Creates an instance of LineDefinition.
   *
   * @param start - The starting point of the line.
   * @param end - The ending point of the line.
   */
  constructor(
    start: Point,
    end: Point,
  ) {
    this.start = start;
    this.end = end;
  }
}
