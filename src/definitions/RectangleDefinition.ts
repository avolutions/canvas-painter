import { Angle } from "../types/Angle.js";
import { Point } from "../types/Point.js";
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