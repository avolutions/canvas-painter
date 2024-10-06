import { ShapeDefinition } from "../../src/definitions/ShapeDefinition";
import { IShapeOptions } from "../../src/options/IShapeOptions";
import { Shape } from "../../src/shapes/Shape";
import { IShapeStyle } from "../../src/styles/IShapeStyle";
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

export class MockShapeStyle implements IShapeStyle {
  color = '#000000';
}

export class MockShapeOptions implements IShapeOptions {
  isVisible = true;
}

// Concrete class extending Shape
export class MockShape extends Shape<MockShapeDefinition, MockShapeStyle, MockShapeOptions> {
  constructor(width: number = 0, withStyleAndOptions: boolean = true) {
    const definition = new MockShapeDefinition(width);
    if (withStyleAndOptions) {
      super(definition, new MockShapeStyle(), new MockShapeOptions());
    } else {
      super(definition);
    }
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
}