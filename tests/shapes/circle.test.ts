/**
 * @jest-environment jsdom
 */
import { Point } from '../../src/types/Point';
import { Circle } from '../../src/shapes/Circle';
import { CircleStyle } from '../../src/styles/CircleStyle';
import { InvalidConstructorArgumentsError } from '../../src/errors/InvalidConstructorArgumentsError';
import { ShapeState } from '../../src/common/ShapeState';

describe('Circle class', () => {
  let context: CanvasRenderingContext2D;

  beforeEach(() => {
    context = {
      fillStyle: 'blue',
      lineWidth: 23,
      strokeStyle: 'green',
      arc: jest.fn(),
      beginPath: jest.fn(),
      fill: jest.fn(),
      restore: jest.fn(),
      save: jest.fn(),
      stroke: jest.fn(),
      // Add any other needed CanvasRenderingContext2D methods here
    } as unknown as CanvasRenderingContext2D;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should create a Circle object using Point', () => {
    const center = new Point(5, 10);

    const circle = new Circle(center, 7);

    expect(circle.center).toStrictEqual(center);
    expect(circle.center.x).toBe(center.x);
    expect(circle.center.y).toBe(center.y);
    expect(circle.radius).toBe(7);
    expect(circle.style).toEqual(CircleStyle.DefaultStyle);

    // Ensure default options applied correctly
    expect(circle.options.visible).toBe(true);
  });

  test('should create a Circle object using Point and style', () => {
    const center = new Point(5, 10);
    const style = {
      color: 'red',
      borderColor: 'blue',
      borderWidth: 2.5
    };

    const circle = new Circle(center, 7, style);

    expect(circle.center).toStrictEqual(center);
    expect(circle.center.x).toBe(center.x);
    expect(circle.center.y).toBe(center.y);
    expect(circle.radius).toBe(7);
    expect(circle.style).toEqual(style);

    const circle2 = new Circle(center, 7, { color: 'red' });

    expect(circle2.center).toStrictEqual(center);
    expect(circle2.center.x).toBe(center.x);
    expect(circle2.center.y).toBe(center.y);
    expect(circle2.radius).toBe(7);
    expect(circle2.style.color).toBe(style.color);
  });

  test('should initialize options from constructor using Point', () => {
    const center = new Point(5, 10);
    const style = {
      color: 'red'
    };

    const circle = new Circle(center, 7, style, { visible: false });

    expect(circle.options.visible).toStrictEqual(false);
  });

  test('should create a Circle object using coordinates', () => {
    const centerX = 5;
    const centerY = 10;

    const circle = new Circle(centerX, centerY, 7);

    expect(circle.center.x).toBe(5);
    expect(circle.center.y).toBe(10);
    expect(circle.radius).toBe(7);
    expect(circle.style).toEqual(CircleStyle.DefaultStyle);

    // Ensure default options applied correctly
    expect(circle.options.visible).toBe(true);
  });

  test('should create a Circle object using coordinates and style', () => {
    const centerX = 5;
    const centerY = 10;
    const style = {
      color: 'red',
      borderColor: 'blue',
      borderWidth: 2.5
    };

    const circle = new Circle(centerX, centerY, 7, style);

    expect(circle.center.x).toBe(5);
    expect(circle.center.y).toBe(10);
    expect(circle.radius).toBe(7);
    expect(circle.style).toEqual(style);

    const circle2 = new Circle(centerX, centerY, 7, { color: 'red' });

    expect(circle2.center.x).toBe(5);
    expect(circle2.center.y).toBe(10);
    expect(circle2.radius).toBe(7);
    expect(circle2.style.color).toBe(style.color);
  });

  test('should initialize options from constructor using Point', () => {
    const centerX = 5;
    const centerY = 10;
    const style = {
      color: 'red'
    };

    const circle = new Circle(centerX, centerY, 7, style, { visible: false });

    expect(circle.options.visible).toStrictEqual(false);
  });

  test('should throw an error if coordinates are partially provided', () => {
    expect(() => {
      new (Circle as unknown as new (...args: any[]) => Circle)(new Point(0, 0), 0, 0); // Force invalid argument combination
    }).toThrow(InvalidConstructorArgumentsError);
  });

  test('should throw an error if Circle object was created with negative radius', () => {
    expect(() => {
      new Circle(0, 0, -1);
    }).toThrow(RangeError);
  });

  test("should set new values via setters", () => {
    const circle = new Circle(new Point(5, 10), 7);

    circle.center = new Point(2, -13.5);

    expect(circle.center.x).toBe(2);
    expect(circle.center.y).toBe(-13.5);

    circle.center.x = -12;
    circle.center.y = 14.7;
    circle.radius = 25.1;

    expect(circle.center.x).toBe(-12);
    expect(circle.center.y).toBe(14.7);
    expect(circle.radius).toBe(25.1);

    expect(() => {
      circle.radius = -3.75
    }).toThrow("Radius must be a positive number");
  });

  test("should notify observer when definition changed by setters", () => {
    const observer = jest.fn();

    const style = {
      color: 'green',
      width: 2.5
    };
    const circle = new Circle(5, 10, 7, style);

    circle.addObserver(observer);

    circle.center = new Point(50, 100);
    circle.radius = 7.756;
    circle.center.x = 51;
    circle.center.y = 101;
    circle.style.color = 'green';

    expect(observer).toHaveBeenCalledTimes(4);
  });

  test('should move center on x- and y-axis', () => {
    const circle = new Circle(0, 0, 5);

    circle.move(2.5);
    expect(circle.center.x).toBe(2.5);
    expect(circle.center.y).toBe(0);

    circle.move(4, 0);
    expect(circle.center.x).toBe(6.5);
    expect(circle.center.y).toBe(0);

    circle.move(0, -3);
    expect(circle.center.x).toBe(6.5);
    expect(circle.center.y).toBe(-3);

    circle.move(undefined, 4.5);
    expect(circle.center.x).toBe(6.5);
    expect(circle.center.y).toBe(1.5);

    // Check that radius was not changed
    expect(circle.radius).toBe(5);
  });

  test('should resize circle', () => {
    const circle = new Circle(2.5, -13, 1);

    circle.resize(3.765);
    expect(circle.radius).toBeCloseTo(4.765);

    circle.resize(-2);
    expect(circle.radius).toBeCloseTo(2.765);

    expect(() => {
      circle.resize(-10);
    }).toThrow("Radius must be a positive number");

    // Check that center was not changed
    expect(circle.center.x).toBe(2.5);
    expect(circle.center.y).toBe(-13);
  });

  test("should notify observer when definition changed by methods", () => {
    const observer = jest.fn();
    const circle = new Circle(2.5, -13, 1);

    circle.addObserver(observer);

    circle.resize(10);
    circle.move(10, 5); // currently notify twice per parameter

    expect(observer).toHaveBeenCalledTimes(5);
  });

  test('should call arc with correct center and radius', () => {
    const circle = new Circle(1, 2, 3);
    circle.render(context);

    expect(context.arc).toHaveBeenCalledWith(1, 2, 3, 0, Math.PI * 2);
  });

  test('should render with given style', () => {
    const style = {
      color: 'red',
      borderColor: 'blue',
      borderWidth: 2.5
    };
    const circle = new Circle(0, 0, 1, style);

    circle.render(context);

    expect(context.fillStyle).toBe('red');
    expect(context.strokeStyle).toBe('blue');
    expect(context.lineWidth).toBe(2.5);
  });

  test('should not draw border if not given', () => {
    const lineWidthSetter = jest.fn();
    const strokeStyleSetter = jest.fn();

    // Use Object.defineProperty to mock lineWidth and strokeStyle setters
    Object.defineProperty(context, 'lineWidth', {
      set: lineWidthSetter,
      configurable: true
    });

    Object.defineProperty(context, 'strokeStyle', {
      set: strokeStyleSetter,
      configurable: true
    });

    const circle = new Circle(0, 0, 1);
    circle.render(context);

    expect(context.stroke).not.toHaveBeenCalled();
    expect(lineWidthSetter).not.toHaveBeenCalled();
    expect(strokeStyleSetter).not.toHaveBeenCalled();
  });

  test('should draw border', () => {
    const circle = new Circle(0, 0, 1, { borderWidth: 1 });
    circle.render(context);

    expect(context.stroke).toHaveBeenCalled();
  });

  test('should return true if the mouse is inside the circle', () => {
    const circle = new Circle(50, 50, 20);
    const mousePosition = new Point(55, 55);

    expect(circle.isMouseOver(mousePosition)).toBe(true);
  });

  test('should return true if the mouse is exactly on the edge of the circle', () => {
    const circle = new Circle(50, 50, 20);
    const mousePosition = new Point(70, 50);

    expect(circle.isMouseOver(mousePosition)).toBe(true);
  });

  test('should return false if the mouse is outside the circle', () => {
    const circle = new Circle(50, 50, 20);
    const mousePosition = new Point(80, 50);

    expect(circle.isMouseOver(mousePosition)).toBe(false);
  });

  test('should account for border width in the effective radius', () => {
    const circle = new Circle(50, 50, 20, { borderWidth: 10 });
    const mousePosition = new Point(75, 50);

    expect(circle.isMouseOver(mousePosition)).toBe(true);
  });

  test('should return false if the mouse is outside the circle with border', () => {
    const circle = new Circle(50, 50, 20, { borderWidth: 10 });
    const mousePosition = new Point(80, 50);

    expect(circle.isMouseOver(mousePosition)).toBe(false);
  });
});