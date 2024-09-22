import { IShapeDefinition } from "../../src/definitions/IShapeDefinition";
import { Shape } from "../../src/shapes/Shape";

class MockShapeDefinition implements IShapeDefinition {
  width: number;

  constructor(width: number) {
    this.width = width;
  }
}

// Concrete class extending Shape
class MockShape extends Shape<MockShapeDefinition> {
  constructor(width: number) {
    const definition = new MockShapeDefinition(width);
    super(definition);
  }

  public set width(width: number) {
    this._definition.width = width;
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
    const shape = new MockShape(0);

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer);

    shape.removeObserver(observer);

    expect((shape as any).observers).toHaveLength(0);
  });

  test("should not add the same observer twice", () => {
    const observer = jest.fn();
    const shape = new MockShape(0);

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer);

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
  });

  test("should only remove given observer", () => {
    const observer = jest.fn();
    const observer1 = jest.fn();
    const shape = new MockShape(0);

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
    const shape = new MockShape(0);

    expect(() => shape.removeObserver(observer)).not.toThrow();
  });

  test("should notify observer when definition changes", () => {
    const observer = jest.fn();
    const shape = new MockShape(0);

    shape.addObserver(observer);

    shape.width = 10;

    expect(observer).toHaveBeenCalledTimes(1);
  });

  test("should not notify removed observer when definition changes", () => {
    const observer = jest.fn();
    const observer1 = jest.fn();
    const shape = new MockShape(0);

    shape.addObserver(observer);
    shape.addObserver(observer1);
    shape.removeObserver(observer);

    shape.width = 10;

    expect(observer).toHaveBeenCalledTimes(0);
    expect(observer1).toHaveBeenCalledTimes(1);
  });
});