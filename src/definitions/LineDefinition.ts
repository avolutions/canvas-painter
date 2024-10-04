import { Point } from "../types/Point.js";
import { IShapeDefinition } from "./IShapeDefinition.js";

export class LineDefinition implements IShapeDefinition {
  public start: Point;
  public end: Point;

  constructor(
    start: Point,
    end: Point,
  ) {
    this.start = start;
    this.end = end;
  }
}