import { Point } from '../../src/types/Point';
import { Rectangle } from '../../src/shapes/Rectangle';
import { Angle } from '../../src/types/Angle';

describe('Rectangle class', () => {
  test("should initialize the rectangle correctly via constructor", () => {
    const rectangle = new Rectangle(10, 15, 100, 50, 15);

    expect(rectangle.width).toBe(100);
    expect(rectangle.height).toBe(50);
    expect(rectangle.position).toBeInstanceOf(Point);
    expect(rectangle.position.x).toEqual(10);
    expect(rectangle.position.y).toEqual(15);
    expect(rectangle.angle).toBeInstanceOf(Angle);
    expect(rectangle.angle.degrees).toEqual(15);
  });

  test("should initialize optional rotation correctly via constructor", () => {
    const rectangle = new Rectangle(10, 15, 100, 50);

    expect(rectangle.width).toBe(100);
    expect(rectangle.height).toBe(50);
    expect(rectangle.position).toBeInstanceOf(Point);
    expect(rectangle.position.x).toEqual(10);
    expect(rectangle.position.y).toEqual(15);
    expect(rectangle.angle).toBeInstanceOf(Angle);
    expect(rectangle.angle.degrees).toEqual(0);
  });

  test("should set new values via setters", () => {
    const newPosition = new Point(5, 5);
    const newAngle = new Angle(85);
    const newStyle = { color: 'red' };
    const rectangle = new Rectangle(0, 0, 0, 0, 0);

    rectangle.width = 300;
    rectangle.height = 400;
    rectangle.position = newPosition;
    rectangle.rotation = 85;
    rectangle.style = newStyle;

    expect(rectangle.width).toBe(300);
    expect(rectangle.height).toBe(400);
    expect(rectangle.position).toEqual(newPosition);
    expect(rectangle.angle.degrees).toBe(newAngle.degrees);
    expect(rectangle.rotation).toBe(85);
    expect(rectangle.style).toBe(newStyle);
  });

  test("should set new width and height using setSize", () => {
    const rectangle = new Rectangle(0, 0, 0, 0, 0);

    rectangle.setSize(200, 150);

    expect(rectangle.width).toBe(200);
    expect(rectangle.height).toBe(150);
  });

  test("should resize the rectangle by positive delta", () => {
    const rectangle = new Rectangle(0, 0, 50, 23, 0);

    rectangle.resize(120, 80);

    expect(rectangle.width).toBe(170);
    expect(rectangle.height).toBe(103);
  });

  test("should resize the rectangle by negative delta", () => {
    const rectangle = new Rectangle(0, 0, 50, 23, 0);

    rectangle.resize(-120, -80);

    expect(rectangle.width).toBe(-70);
    expect(rectangle.height).toBe(-57);
  });

  test("should not change size when resize is called with no arguments", () => {
    const rectangle = new Rectangle(0, 0, 73, 73, 0);

    rectangle.resize();

    expect(rectangle.width).toBe(73);
    expect(rectangle.height).toBe(73);
  });

  test("should move the rectangle by positive delta", () => {
    const rectangle = new Rectangle(50, 73, 0, 0, 0);

    rectangle.move(120, 80);

    expect(rectangle.position.x).toBe(170);
    expect(rectangle.position.y).toBe(153);
  });

  test("should move the rectangle by negative delta", () => {
    const rectangle = new Rectangle(50, 73, 0, 0, 0);

    rectangle.move(-120, -80);

    expect(rectangle.position.x).toBe(-70);
    expect(rectangle.position.y).toBe(-7);
  });

  test("should not change position when move is called with no arguments", () => {
    const rectangle = new Rectangle(50, 73, 0, 0, 0);

    rectangle.move();

    expect(rectangle.position.x).toBe(50);
    expect(rectangle.position.y).toBe(73);
  });

  test("should rotate the rectangle by positive angle", () => {
    const rectangle = new Rectangle(0, 0, 0, 0, 60);

    rectangle.rotate(120);

    expect(rectangle.angle.degrees).toBe(180);
  });

  test("should rotate the rectangle by negative angle", () => {
    const rectangle = new Rectangle(0, 0, 0, 0, 60);

    rectangle.rotate(-120);

    expect(rectangle.angle.degrees).toBe(-60);
  });

  test("should notify observer when definition changed by setters", () => {
    const observer = jest.fn();
    const rectangle = new Rectangle(0, 0, 0, 0, 0, {}, {});

    rectangle.addObserver(observer);

    rectangle.width = 10;
    rectangle.height = 10;
    rectangle.position = { x: 10, y: 10 };
    rectangle.rotation = 10;
    rectangle.style = { color: 'red' };

    expect(observer).toHaveBeenCalledTimes(5);
  });

  test("should notify observer when definition changed by methods", () => {
    const observer = jest.fn();
    const rectangle = new Rectangle(0, 0, 0, 0, 0, {}, {});

    rectangle.addObserver(observer);

    rectangle.setSize(10, 10);
    rectangle.resize(10, 10);
    rectangle.move(10, 10);
    rectangle.rotate(10);

    expect(observer).toHaveBeenCalledTimes(7);
  });
});