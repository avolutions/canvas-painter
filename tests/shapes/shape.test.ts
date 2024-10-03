import { IShapeDefinition } from "../../src/definitions/IShapeDefinition";
import { IShapeOptions } from "../../src/options/IShapeOptions";
import { Shape } from "../../src/shapes/Shape";
import { IShapeStyle } from "../../src/styles/IShapeStyle";
import { Point } from "../../src/types/Point";

class MockShapeDefinition implements IShapeDefinition {
  width: number;
  name: string;
  isFoo: boolean;
  list: Array<number>;
  position: Point;

  constructor(width: number = 0, name: string = '', isFoo: boolean = true, list: Array<number> = [], position: Point = { x: 0, y:0 }) {
    this.width = width;
    this.name = name;
    this.isFoo = isFoo;
    this.list = list;
    this.position = position;
  }
}

class MockShapeStyle implements IShapeStyle {}

class MockShapeOptions implements IShapeOptions {}

// Concrete class extending Shape
class MockShape extends Shape<MockShapeDefinition, MockShapeStyle, IShapeOptions> {
  constructor(width: number = 0, name: string = '', isFoo: boolean = true, list: Array<number> = [], position: Point = { x: 0, y:0 }) {
    const definition = new MockShapeDefinition(width, name, isFoo, list, position);
    super(definition);
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
    throw new Error("Method not implemented.");
  }
}

describe('Shape class', () => {
  test("should set definition from constructor", () => {
    const shape = new MockShape(10);

    expect((shape as any)._definition.width).toBe(10);
  });

  test("should add and remove observer", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer);

    shape.removeObserver(observer);

    expect((shape as any).observers).toHaveLength(0);
  });

  test("should not add the same observer twice", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer);

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
  });

  test("should only remove given observer", () => {
    const observer = jest.fn();
    const observer1 = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);
    shape.addObserver(observer1);

    expect((shape as any).observers).toHaveLength(2);
    expect((shape as any).observers[0]).toBe(observer);
    expect((shape as any).observers[1]).toBe(observer1);

    shape.removeObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer1);
  });

  test("should not fail when removing a non added observer", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    expect(() => shape.removeObserver(observer)).not.toThrow();
  });

  test("should notify observer when definition changes", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);

    shape.width = 10;
    shape.name = 'foo';
    shape.isFoo = false;
    shape.list = [1,2,3];
    shape.position = { x: 10, y: 10 }
    shape.position.x = 25;

    expect(observer).toHaveBeenCalledTimes(6);
  });

  test("should not notify removed observer when definition changes", () => {
    const observer = jest.fn();
    const observer1 = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);
    shape.addObserver(observer1);
    shape.removeObserver(observer);

    shape.width = 10;

    expect(observer).toHaveBeenCalledTimes(0);
    expect(observer1).toHaveBeenCalledTimes(1);
  });
});