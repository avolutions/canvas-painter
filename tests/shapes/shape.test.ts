import { IShapeDefinition } from "../../src/definitions/IShapeDefinition";
import { Shape } from "../../src/shapes/Shape";

const MockShapeDefinition: jest.Mocked<IShapeDefinition> = {};

// Concrete class extending Shape
class MockShape extends Shape<IShapeDefinition> {
  public render(context: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
}

describe('Shape class', () => {
  test("should add and remove observer", () => {
    const observer = jest.fn();
    const shape = new MockShape(MockShapeDefinition);

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer);

    shape.removeObserver(observer);

    expect((shape as any).observers).toHaveLength(0);
  });
});