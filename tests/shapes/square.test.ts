/**
 * @jest-environment jsdom
 */

import { Point } from '../../src/types/Point';
import { Angle } from '../../src/types/Angle';
import { Square } from '../../src/shapes/Square';
import { setupCanvas } from '../canvas/canvasTestUtils';

describe('Square class', () => {
  let context: CanvasRenderingContext2D;

  beforeEach(() => {
    const setup = setupCanvas();
    context = setup.context;

    context.fillStyle = 'blue';
    context.lineWidth = 23;
    context.strokeStyle = 'green';
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should initialize the square correctly via constructor", () => {
    const square = new Square(10, 15, 100, 42);

    expect(square.size).toBe(100);
    expect(square.width).toBe(100);
    expect(square.height).toBe(100);
    expect(square.position).toBeInstanceOf(Point);
    expect(square.position.x).toEqual(10);
    expect(square.position.y).toEqual(15);
    expect(square.angle).toBeInstanceOf(Angle);
    expect(square.angle.degrees).toEqual(42);

    // Ensure default options applied correctly
    expect(square.options.visible).toBe(true);
  });

  test("should initialize optional rotation correctly via constructor", () => {
    const square = new Square(10, 15, 100);

    expect(square.size).toBe(100);
    expect(square.width).toBe(100);
    expect(square.height).toBe(100);
    expect(square.position).toBeInstanceOf(Point);
    expect(square.position.x).toEqual(10);
    expect(square.position.y).toEqual(15);
    expect(square.angle).toBeInstanceOf(Angle);
    expect(square.angle.degrees).toEqual(0);
  });

  test('should initialize options from constructor', () => {
    const square = new Square(10, 15, 100, 0, {}, { centered: true, visible: false });

    expect(square.options.centered).toStrictEqual(true);
    expect(square.options.visible).toStrictEqual(false);
  });

  test("should sync size, width and height", () => {
    const square = new Square(0, 0, 0, 0);

    square.size = 100;
    expect(square.size).toBe(100);
    expect(square.width).toBe(100);
    expect(square.height).toBe(100);

    square.width = 200;
    expect(square.size).toBe(200);
    expect(square.width).toBe(200);
    expect(square.height).toBe(200);

    square.height = 300;
    expect(square.size).toBe(300);
    expect(square.width).toBe(300);
    expect(square.height).toBe(300);
  });

  test("should set new values via setters", () => {
    const newPosition = new Point(5, 5);
    const newAngle = new Angle(85);
    const newStyle = { color: 'red' };
    const square = new Square(0, 0, 0, 0);

    square.position = newPosition;
    square.rotation = 85;
    square.style = newStyle;

    expect(square.position).toEqual(newPosition);
    expect(square.angle.degrees).toBe(newAngle.degrees);
    expect(square.rotation).toBe(85);
    expect(square.style).toStrictEqual(newStyle);

    square.style.color = 'blue';
    square.position.x = 25;

    expect(square.style.color).toBe('blue');
    expect(square.position.x).toBe(25);
  });

  test("should set new size, width and height using setSize", () => {
    const square = new Square(0, 0, 0, 0);

    square.setSize(200);

    expect(square.size).toBe(200);
    expect(square.width).toBe(200);
    expect(square.height).toBe(200);
  });

  test("should resize the square by positive delta", () => {
    const square = new Square(0, 0, 50, 0);

    square.resize(120);

    expect(square.size).toBe(170);
    expect(square.width).toBe(170);
    expect(square.height).toBe(170);
  });

  test("should resize the square by negative delta", () => {
    const square = new Square(0, 0, 50, 0);

    square.resize(-120);

    expect(square.size).toBe(-70);
    expect(square.width).toBe(-70);
    expect(square.height).toBe(-70);
  });

  test("should not change size when resize is called with 0", () => {
    const square = new Square(0, 0, 73, 0);

    square.resize(0);

    expect(square.size).toBe(73);
    expect(square.width).toBe(73);
    expect(square.height).toBe(73);
  });

  test("should move the square by positive delta", () => {
    const square = new Square(50, 73, 0, 0);

    square.move(120, 80);

    expect(square.position.x).toBe(170);
    expect(square.position.y).toBe(153);
  });

  test("should move the square by negative delta", () => {
    const square = new Square(50, 73, 0, 0);

    square.move(-120, -80);

    expect(square.position.x).toBe(-70);
    expect(square.position.y).toBe(-7);
  });

  test("should not change position when move is called with no arguments", () => {
    const square = new Square(50, 73, 0, 0);

    square.move();

    expect(square.position.x).toBe(50);
    expect(square.position.y).toBe(73);
  });

  test("should rotate the square by positive angle", () => {
    const square = new Square(0, 0, 0, 60);

    square.rotate(120);

    expect(square.angle.degrees).toBe(180);
  });

  test("should rotate the square by negative angle", () => {
    const square = new Square(0, 0, 0, 60);

    square.rotate(-120);

    expect(square.angle.degrees).toBe(-60);
  });

  test("should notify observer when definition changed by setters", () => {
    const observer = jest.fn();
    const square = new Square(0, 0, 0, 0, { color: 'red' });

    square.addObserver(observer);

    square.size = 5;
    square.width = 10;
    square.height = 15;
    square.position = new Point(10, 10);
    square.rotation = 10; // currently notify twice
    square.style = { color: 'yellow' };
    square.style.color = 'blue';
    square.position.x = 25;

    expect(observer).toHaveBeenCalledTimes(12);
  });

  test("should notify observer when definition changed by methods", () => {
    const observer = jest.fn();
    const square = new Square(0, 0, 0, 0);

    square.addObserver(observer);

    square.setSize(10);
    square.resize(10);
    square.move(10, 10); // currently notify twice per parameter
    square.rotate(10); // currently notify twice

    expect(observer).toHaveBeenCalledTimes(10);
  });

  test('should call fillRect with correct position when not centered', () => {
    const square = new Square(25, 45, 10);
    square.render(context);

    expect(context.fillRect).toHaveBeenCalledWith(25, 45, 10, 10);
  });

  test('should call fillRect with correct position when centered', () => {
    const square = new Square(25, 45, 10, 0, {}, { centered: true } );
    square.render(context);

    expect(context.fillRect).toHaveBeenCalledWith(20, 40, 10, 10);
  });

  test('should not rotate when rotation is zero', () => {
    const square = new Square(25, 45, 10);
    square.render(context);

    expect(context.translate).not.toHaveBeenCalled();
    expect(context.rotate).not.toHaveBeenCalled();
  });

  test('should rotate non centered when rotation is given', () => {
    const square = new Square(25, 45, 10, 45);
    square.render(context);

    expect(context.translate).toHaveBeenCalledWith(25, 45);
    expect(context.rotate).toHaveBeenCalledWith(Math.PI / 4);

    expect(context.fillRect).toHaveBeenCalledWith(0, 0, 10, 10);
  });

  test('should rotate centered when rotation is given', () => {
    const square = new Square(25, 45, 10, 45, {}, { centered: true });
    square.render(context);

    expect(context.translate).toHaveBeenCalledWith(25, 45);
    expect(context.rotate).toHaveBeenCalledWith(Math.PI / 4);
    expect(context.translate).toHaveBeenCalledWith(-5, -5);
    expect(context.fillRect).toHaveBeenCalledWith(0, 0, 10, 10);
  });

  test('should apply color from given style', () => {
    const square = new Square(0, 0, 0);
    square.render(context);

    expect(context.fillStyle).toBe('blue'); // mock context default fillStyle

    square.style.color = 'red';
    square.render(context);

    expect(context.fillStyle).toBe('red');
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

    const square = new Square(25, 45, 10);
    square.render(context);

    expect(context.strokeRect).not.toHaveBeenCalled();
    expect(lineWidthSetter).not.toHaveBeenCalled();
    expect(strokeStyleSetter).not.toHaveBeenCalled();
  });

  test('should draw border', () => {
    const square = new Square(10, 15, 20, 0, { border: { width: 1, color: 'red'} });
    square.render(context);

    expect(context.strokeRect).toHaveBeenCalledWith(10, 15, 20, 20);
  });

  test('should apply border width', () => {
    const square = new Square(0, 0, 0, 0, { border: {} });
    square.render(context);

    expect(context.lineWidth).toBe(23); // mock context default lineWidth

    const square2 = new Square(0, 0, 0, 0, { border: { width: 12 } });
    square2.render(context);

    expect(context.lineWidth).toBe(12);
  });

  test('should apply border color', () => {
    const square = new Square(0, 0, 0, 0, { border: { } });
    square.render(context);

    expect(context.strokeStyle).toBe('green'); // mock context default strokeStyle

    const square2 = new Square(0, 0, 0, 0, { border: { color: '#123456' } });
    square2.render(context);

    expect(context.strokeStyle).toBe('#123456');
  });
});