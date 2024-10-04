/**
 * @jest-environment jsdom
 */

import { Point } from '../../src/types/Point';
import { Line } from '../../src/shapes/Line';
import { LineStyle } from '../../src/styles/LineStyle';

describe('Line class', () => {
  let context: CanvasRenderingContext2D;

  beforeEach(() => {
    context = {
      lineWidth: 23,
      strokeStyle: 'green',
      beginPath: jest.fn(),
      lineTo: jest.fn(),
      moveTo: jest.fn(),
      restore: jest.fn(),
      save: jest.fn(),
      stroke: jest.fn(),
      // Add any other needed CanvasRenderingContext2D methods here
    } as unknown as CanvasRenderingContext2D;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should initialize the line correctly via constructor", () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    expect(line.start.x).toBe(start.x);
    expect(line.start.y).toBe(start.y);
    expect(line.end.x).toBe(end.x);
    expect(line.end.y).toBe(end.y);
  });

  test("should initialize the line correctly via constructor with optional parameters", () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);
    const style = new LineStyle('red', 2.5);

    const line = new Line(start, end, style);

    expect(line.start.x).toBe(start.x);
    expect(line.start.y).toBe(start.y);
    expect(line.end.x).toBe(end.x);
    expect(line.end.y).toBe(end.y);
    expect(line.style.color).toBe(style.color);
    expect(line.style.width).toBe(style.width);

  });

  test("should set new values via setters", () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.start = { x: 50, y: 100 };
    line.end = { x: 150, y: 200 };

    expect(line.start.x).toBe(50);
    expect(line.start.y).toBe(100);
    expect(line.end.x).toBe(150);
    expect(line.end.y).toBe(200);

    line.start.x = 51;
    line.start.y = 101;
    line.end.x = 151;
    line.end.y = 201;

    expect(line.start.x).toBe(51);
    expect(line.start.y).toBe(101);
    expect(line.end.x).toBe(151);
    expect(line.end.y).toBe(201);
  });

  test("should notify observer when definition changed by setters", () => {
    const observer = jest.fn();

    const start = new Point(5, 10);
    const end = new Point(15, 20);
    const style = new LineStyle('red', 2.5);

    const line = new Line(start, end, style);

    line.addObserver(observer);

    line.start = { x: 50, y: 100 };
    line.end = { x: 150, y: 200 };
    line.style = { color: 'blue', width: 3 }
    line.start.x = 51;
    line.start.x = 101;
    line.end.x = 151;
    line.end.x = 201;
    line.style.color = 'green';
    line.style.width = 5;

    expect(observer).toHaveBeenCalledTimes(10);
  });

  test('should apply given style', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.render(context);

    expect(context.strokeStyle).toBe('green'); // mock context default fillStyle
    expect(context.lineWidth).toBe(23); // mock context default lineWidth

    line.style.color = 'red';
    line.style.width = 2.5;

    line.render(context);

    expect(context.strokeStyle).toBe('red');
    expect(context.lineWidth).toBe(2.5);
  });

  test('should draw line with correct values', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.render(context);

    expect(context.beginPath).toHaveBeenCalled();
    expect(context.moveTo).toHaveBeenCalledWith(5, 10);
    expect(context.lineTo).toHaveBeenCalledWith(15, 20);
    expect(context.stroke).toHaveBeenCalled();
  });
});