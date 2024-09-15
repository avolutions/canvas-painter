import { Angle } from "../types1/Angle.js";
import { Point } from "../types1/Point.js";
import { IShapeDefinition } from "./IShapeDefinition.js";

export class RectangleDefinition implements IShapeDefinition {
  position: Point;
  width: number;
  height: number;
  angle: Angle;

  constructor(position: Point, width: number, height: number, angle: Angle) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.angle = angle;
  }
}