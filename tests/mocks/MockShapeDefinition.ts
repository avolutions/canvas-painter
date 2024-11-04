import { ShapeDefinition } from "../../src/definitions/ShapeDefinition";
import { Point } from "../../src/types/Point";

export class MockShapeDefinition extends ShapeDefinition {
  width: number;
  name: string;
  isFoo: boolean;
  list: Array<number>;
  position: Point;

  constructor(width: number = 0, name: string = '', isFoo: boolean = true, list: Array<number> = [], position: Point = new Point(0,0)) {
    super();

    this.width = width;
    this.name = name;
    this.isFoo = isFoo;
    this.list = list;
    this.position = position;
  }
}