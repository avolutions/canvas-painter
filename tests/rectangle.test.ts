import { Point } from '../src/Point';
import { Rectangle } from '../src/Shapes/Rectangle';

describe('Rectangle class', () => {
  test("should initialize the rectangle correctly via constructor", () => {
    const position = new Point(10, 15);
    const rectangle = new Rectangle(100, 50, position, 15);

    expect(rectangle.width).toBe(100);
    expect(rectangle.height).toBe(50);
    expect(rectangle.position).toEqual(position);
    expect(rectangle.rotation).toBe(15);
  });

  test("should initialize optional rotation correctly via constructor", () => {
    const position = new Point(10, 15);
    const rectangle = new Rectangle(100, 50, position);

    expect(rectangle.width).toBe(100);
    expect(rectangle.height).toBe(50);
    expect(rectangle.position).toEqual(position);
    expect(rectangle.rotation).toBe(0);
  });

  test("should set new values via setters", () => {
    const newPosition = new Point(5, 5);
    const rectangle = new Rectangle(0, 0, { x: 0, y: 0 }, 0);

    rectangle.width = 300;
    rectangle.height = 400;
    rectangle.position = newPosition;
    rectangle.rotation = 90;

    expect(rectangle.width).toBe(300);
    expect(rectangle.height).toBe(400);
    expect(rectangle.position).toEqual(newPosition);
    expect(rectangle.rotation).toBe(90);
  });

  test("should set new width and height using setSize", () => {
    const rectangle = new Rectangle(0, 0, { x: 0, y: 0 }, 0);

    rectangle.setSize(200, 150);

    expect(rectangle.width).toBe(200);
    expect(rectangle.height).toBe(150);
  });

  test("should resize the rectangle by positive delta", () => {
    const rectangle = new Rectangle(0, 0, { x: 0, y: 0 }, 0);

    rectangle.resize(120, 80);

    expect(rectangle.width).toBe(120);
    expect(rectangle.height).toBe(80);
  });

  test("should resize the rectangle by negative delta", () => {
    const rectangle = new Rectangle(0, 0, { x: 0, y: 0 }, 0);

    rectangle.resize(-120, -80);

    expect(rectangle.width).toBe(-120);
    expect(rectangle.height).toBe(-80);
  });

  test("should not change size when resize is called with no arguments", () => {
    const rectangle = new Rectangle(73, 73, { x: 0, y: 0 }, 0);

    rectangle.resize();

    expect(rectangle.width).toBe(73);
    expect(rectangle.height).toBe(73);
  });

  test("should move the rectangle by positive delta", () => {
    const rectangle = new Rectangle(0, 0, { x: 0, y: 0 }, 0);

    rectangle.move(120, 80);

    expect(rectangle.position.x).toBe(120);
    expect(rectangle.position.y).toBe(80);
  });

  test("should move the rectangle by negative delta", () => {
    const rectangle = new Rectangle(0, 0, { x: 0, y: 0 }, 0);

    rectangle.move(-120, -80);

    expect(rectangle.position.x).toBe(-120);
    expect(rectangle.position.y).toBe(-80);
  });

  test("should not change position when move is called with no arguments", () => {
    const rectangle = new Rectangle(0, 0, { x: 73, y: 73 }, 0);

    rectangle.move();

    expect(rectangle.position.x).toBe(73);
    expect(rectangle.position.y).toBe(73);
  });

  test("should rotate the rectangle by positive angle", () => {
    const rectangle = new Rectangle(0, 0, { x: 0, y: 0 }, 0);

    rectangle.rotate(120);

    expect(rectangle.rotation).toBe(120);
  });

  test("should rotate the rectangle by negative angle", () => {
    const rectangle = new Rectangle(0, 0, { x: 0, y: 0 }, 0);

    rectangle.rotate(-120);

    expect(rectangle.rotation).toBe(-120);
  });
});