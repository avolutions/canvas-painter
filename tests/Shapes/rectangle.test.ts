/**
 * @jest-environment jsdom
 */

import { Point } from '../../src/types/Point';
import { Rectangle } from '../../src/shapes/Rectangle';
import { Angle } from '../../src/types/Angle';
import { ShapeState } from '../../src/common/ShapeState';

describe('Rectangle class', () => {
  let context: CanvasRenderingContext2D;

  beforeEach(() => {
    context = {
      fillStyle: 'blue',
      lineWidth: 23,
      strokeStyle: 'green',
      clearRect: jest.fn(),
      fillRect: jest.fn(),
      restore: jest.fn(),
      rotate: jest.fn(),
      save: jest.fn(),
      strokeRect: jest.fn(),
      translate: jest.fn(),
      // Add any other needed CanvasRenderingContext2D methods here
    } as unknown as CanvasRenderingContext2D;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should initialize the rectangle correctly via constructor", () => {
    const rectangle = new Rectangle(10, 15, 100, 50, 15);

    expect(rectangle.width).toBe(100);
    expect(rectangle.height).toBe(50);
    expect(rectangle.position).toBeInstanceOf(Point);
    expect(rectangle.position.x).toEqual(10);
    expect(rectangle.position.y).toEqual(15);
    expect(rectangle.angle).toBeInstanceOf(Angle);
    expect(rectangle.angle.degrees).toEqual(15);

    // Ensure default options applied correctly
    expect(rectangle.options.visible).toBe(true);
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

  test('should initialize options from constructor', () => {
    const rectangle = new Rectangle(10, 15, 100, 50, 0, {}, { centered: true, visible: false });

    expect(rectangle.options.centered).toStrictEqual(true);
    expect(rectangle.options.visible).toStrictEqual(false);
  });

  test("should set new values via setters", () => {
    const newPosition = new Point(5, 5);
    const newAngle = new Angle(85);

    const rectangle = new Rectangle(0, 0, 0, 0, 0);

    rectangle.width = 300;
    rectangle.height = 400;
    rectangle.position = newPosition;
    rectangle.rotation = 85;

    expect(rectangle.width).toBe(300);
    expect(rectangle.height).toBe(400);
    expect(rectangle.position).toEqual(newPosition);
    expect(rectangle.angle.degrees).toBe(newAngle.degrees);
    expect(rectangle.rotation).toBe(85);

    rectangle.style.color = 'blue';
    rectangle.position.x = 25;

    expect(rectangle.style.color).toBe('blue');
    expect(rectangle.position.x).toBe(25);
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

  test("should not change position while rotating", () => {
    const rectangle = new Rectangle(25, 30, 50, 60, 45);

    rectangle.render(context);

    expect(rectangle.position.x).toBe(25);
    expect(rectangle.position.y).toBe(30);
  });

  test("should notify observer when definition changed by setters", () => {
    const observer = jest.fn();
    const rectangle = new Rectangle(0, 0, 0, 0, 0, { color: 'red' });

    rectangle.addObserver(observer);

    rectangle.width = 10;
    rectangle.height = 10;
    rectangle.position = new Point(10, 10);
    rectangle.rotation = 10; // currently notify twice
    rectangle.style.color = 'blue';
    rectangle.position.x = 25;

    expect(observer).toHaveBeenCalledTimes(7);
  });

  test("should notify observer when definition changed by methods", () => {
    const observer = jest.fn();
    const rectangle = new Rectangle(0, 0, 0, 0);

    rectangle.addObserver(observer);

    rectangle.setSize(10, 10);
    rectangle.resize(10, 10);
    rectangle.move(10, 10); // currently notify twice per parameter
    rectangle.rotate(10); // currently notify twice

    expect(observer).toHaveBeenCalledTimes(10);
  });

  test('should call fillRect with correct position when not centered', () => {
    const rectangle = new Rectangle(25, 45, 10, 20);
    rectangle.render(context);

    expect(context.fillRect).toHaveBeenCalledWith(25, 45, 10, 20);
  });

  test('should call fillRect with correct position when centered', () => {
    const rectangle = new Rectangle(25, 45, 10, 20, 0, {}, { centered: true } );
    rectangle.render(context);

    expect(context.fillRect).toHaveBeenCalledWith(20, 35, 10, 20);
  });

  test('should not rotate when rotation is zero', () => {
    const rectangle = new Rectangle(25, 45, 10, 20);
    rectangle.render(context);

    expect(context.translate).not.toHaveBeenCalled();
    expect(context.rotate).not.toHaveBeenCalled();
  });

  test('should rotate non centered when rotation is given', () => {
    const rectangle = new Rectangle(25, 45, 10, 20, 45);
    rectangle.render(context);

    expect(context.translate).toHaveBeenCalledWith(25, 45);
    expect(context.rotate).toHaveBeenCalledWith(Math.PI / 4);

    expect(context.fillRect).toHaveBeenCalledWith(0, 0, 10, 20);
  });

  test('should rotate centered when rotation is given', () => {
    const rectangle = new Rectangle(25, 45, 10, 20, 45, {}, { centered: true });
    rectangle.render(context);

    expect(context.translate).toHaveBeenCalledWith(25, 45);
    expect(context.rotate).toHaveBeenCalledWith(Math.PI / 4);
    expect(context.translate).toHaveBeenCalledWith(-5, -10);
    expect(context.fillRect).toHaveBeenCalledWith(0, 0, 10, 20);
  });

  test('should render with given state style', () => {
    const style = {
      color: 'red',
      borderColor: 'blue',
      borderWidth: 2.5,
      hover: {
        color: 'green',
        borderColor: 'yellow',
        borderWidth: 4.2,
      }
    };
    const rectangle = new Rectangle(0, 0, 0, 0, 0, style);

    rectangle.render(context);

    expect(context.fillStyle).toBe('red');
    expect(context.strokeStyle).toBe('blue');
    expect(context.lineWidth).toBe(2.5);

    rectangle.state = ShapeState.Hover;
    rectangle.render(context);

    expect(context.fillStyle).toBe('green');
    expect(context.strokeStyle).toBe('yellow');
    expect(context.lineWidth).toBe(4.2);
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

    const rectangle = new Rectangle(25, 45, 10, 20);
    rectangle.render(context);

    expect(context.strokeRect).not.toHaveBeenCalled();
    expect(lineWidthSetter).not.toHaveBeenCalled();
    expect(strokeStyleSetter).not.toHaveBeenCalled();
  });

  test('should draw border', () => {
    const rectangle = new Rectangle(10, 15, 20, 25, 0, { borderWidth: 1 });
    rectangle.render(context);

    expect(context.strokeRect).toHaveBeenCalledWith(10, 15, 20, 25);
  });

  test('should return true if the mouse is inside the rectangle', () => {
    const rectangle = new Rectangle(50, 50, 100, 50, 0);
    const mousePosition = new Point(75, 60);

    expect(rectangle.isMouseOver(mousePosition)).toBe(true);
  });

  test('should return true if the mouse is exactly on the edge of the rectangle', () => {
    const rectangle = new Rectangle(50, 50, 100, 50, 0);
    const mousePosition = new Point(50, 60);

    expect(rectangle.isMouseOver(mousePosition)).toBe(true);
  });

  test('should return false if the mouse is outside the rectangle', () => {
    const rectangle = new Rectangle(50, 50, 100, 50, 0);
    const mousePosition = new Point(10, 60);

    expect(rectangle.isMouseOver(mousePosition)).toBe(false);
  });

  test('should account for border width in the effective bounds', () => {
    const rectangle = new Rectangle(50, 50, 100, 50, 0, { borderWidth: 10 });
    const mousePosition = new Point(45, 60);

    expect(rectangle.isMouseOver(mousePosition)).toBe(true);
  });

  test('should return false if the mouse is outside the rectangle with border', () => {
    const rectangle = new Rectangle(50, 50, 100, 50, 0, { borderWidth: 10 });
    const mousePosition = new Point(40, 60);

    expect(rectangle.isMouseOver(mousePosition)).toBe(false);
  });

  test('should correctly detect mouse over when rectangle is rotated', () => {
    const rectangle = new Rectangle(50, 50, 100, 50, 45, { borderWidth: 10 });
    const mousePosition = new Point(85, 85);

    expect(rectangle.isMouseOver(mousePosition)).toBe(true);
  });

  test('should return false for mouse position outside rotated rectangle', () => {
    const rectangle = new Rectangle(50, 50, 100, 50, 45, { borderWidth: 10 });
    const mousePosition = new Point(10, 10);

    expect(rectangle.isMouseOver(mousePosition)).toBe(false);
  });

  test('should consider centered option when calculating bounds', () => {
    const rectangle = new Rectangle(50, 50, 100, 50, 0, {}, { centered: true });
    const mousePosition = new Point(50, 50);

    expect(rectangle.isMouseOver(mousePosition)).toBe(true);
  });

  test('should move rectangle while dragging', () => {
    const rectangle = new Rectangle(50, 50, 100, 75, 0);
    const moveSpy = jest.spyOn(rectangle, 'move');

    rectangle.onDrag(new Point(47, 11));

    expect(moveSpy).toHaveBeenCalledWith(47, 11);
  });
});