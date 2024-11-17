import { ShapeDefinition } from "../../src/definitions/ShapeDefinition";
import { Shape } from "../../src/shapes/Shape";
import { Point } from "../../src/types/Point";

import { IMockShapeStyle, MockShapeStyle } from "./MockShapeStyle"
import { IMockShapeOptions, MockShapeOptions } from "./MockShapeOptions"
import { MockShapeDefinition } from "./MockShapeDefinition"


// Concrete class extending Shape
export class MockShape extends Shape<MockShapeDefinition, IMockShapeStyle, IMockShapeOptions> {
  constructor(width: number = 0, style?: IMockShapeStyle, options?: IMockShapeOptions ) {
    super(
      new MockShapeDefinition(width),
      new MockShapeStyle(style),
      new MockShapeOptions(options)
    );
  }

  public get position(): Point {
    return this._definition.position;
  }

  public set width(width: number) {
    this._definition.width = width;
  }

  public set name(name: string) {
    this._definition.name = name;
  }

  public set isFoo(isFoo: boolean) {
    this._definition.isFoo = isFoo;
  }

  public set list(list: Array<number>) {
    this._definition.list = list;
  }

  public set position(position: Point) {
    this._definition.position = position;
  }

  public render(context: CanvasRenderingContext2D): void {

  }

  public isMouseOver(mousePosition: Point): boolean {
    return true;
  }

  public hasBorderTest() {
    return this.hasBorder();
  }

  public onDrag(delta: Point): void {

  }
}