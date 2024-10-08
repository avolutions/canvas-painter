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

  test('should create a Line object using Points', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    expect(line.start.x).toBe(start.x);
    expect(line.start.y).toBe(start.y);
    expect(line.end.x).toBe(end.x);
    expect(line.end.y).toBe(end.y);
    expect(line.style).toStrictEqual({});

    // Ensure default options applied correctly
    expect(line.options.visible).toBe(true);
  });

  test('should create a Line object using Points and style', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);
    const style = new LineStyle('red', 2.5);

    const line = new Line(start, end, style);

    expect(line.start.x).toBe(start.x);
    expect(line.start.y).toBe(start.y);
    expect(line.end.x).toBe(end.x);
    expect(line.end.y).toBe(end.y);
    expect(line.style).toStrictEqual(style);
    expect(line.style.color).toBe(style.color);
    expect(line.style.width).toBe(style.width);
  });

  test('should initialize options from constructor using Points', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);
    const style = new LineStyle('red', 2.5);

    const line = new Line(start, end, style, { visible: false });

    expect(line.options.visible).toStrictEqual(false);
  });

  test('should create a Line object using coordinates', () => {
    const startX = 5;
    const startY = 10;
    const endX = 15;
    const endY = 20;

    const line = new Line(startX, startY, endX, endY);

    expect(line.start.x).toBe(startX);
    expect(line.start.y).toBe(startY);
    expect(line.end.x).toBe(endX);
    expect(line.end.y).toBe(endY);
    expect(line.style).toStrictEqual({});

    // Ensure default options applied correctly
    expect(line.options.visible).toBe(true);
  });

  test('should create a Line object using coordinates and style', () => {
    const startX = 5;
    const startY = 10;
    const endX = 15;
    const endY = 20;
    const style = new LineStyle('red', 2.5);

    const line = new Line(startX, startY, endX, endY, style);

    expect(line.start.x).toBe(startX);
    expect(line.start.y).toBe(startY);
    expect(line.end.x).toBe(endX);
    expect(line.end.y).toBe(endY);
    expect(line.style).toStrictEqual(style);
    expect(line.style.color).toBe(style.color);
    expect(line.style.width).toBe(style.width);
  });

  test('should initialize options from constructor using coordinates', () => {
    const startX = 5;
    const startY = 10;
    const endX = 15;
    const endY = 20;
    const style = new LineStyle('red', 2.5);

    const line = new Line(startX, startY, endX, endY, style, { visible: false });

    expect(line.options.visible).toStrictEqual(false);
  });

  test('should throw an error if coordinates are partially provided', () => {
    expect(() => {
      new (Line as unknown as new (...args: any[]) => Line)(0, 0, 100); // Force invalid argument combination
    }).toThrow('Invalid constructor arguments');
  });

  test("should set new values via setters", () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.start = new Point(50, 100);
    line.end = new Point(150, 200);

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

    line.start = new Point(50, 100);
    line.end = new Point(150, 200);
    line.style = { color: 'blue', width: 3 }
    line.start.x = 51;
    line.start.x = 101;
    line.end.x = 151;
    line.end.x = 201;
    line.style.color = 'green';
    line.style.width = 5;

    expect(observer).toHaveBeenCalledTimes(10);
  });

  test('should move start on x- and y-axis', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.moveStart(2.5, -13);

    expect(line.start.x).toBe(7.5);
    expect(line.start.y).toBe(-3);
    expect(line.end.x).toBe(15);
    expect(line.end.y).toBe(20);
  });

  test('should move end on x- or y-axis', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.moveStart(2.5, 0);

    expect(line.start.x).toBe(7.5);
    expect(line.start.y).toBe(10);
    expect(line.end.x).toBe(15);
    expect(line.end.y).toBe(20);

    line.moveStart(0, -7);

    expect(line.start.x).toBe(7.5);
    expect(line.start.y).toBe(3);
    expect(line.end.x).toBe(15);
    expect(line.end.y).toBe(20);
  });

  test('should move end on x- and y-axis', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.moveEnd(2.5, -23);

    expect(line.start.x).toBe(5);
    expect(line.start.y).toBe(10);
    expect(line.end.x).toBe(17.5);
    expect(line.end.y).toBe(-3);
  });

  test('should move end on x- or y-axis', () => {
    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.moveEnd(2.5, 0);

    expect(line.start.x).toBe(5);
    expect(line.start.y).toBe(10);
    expect(line.end.x).toBe(17.5);
    expect(line.end.y).toBe(20);

    line.moveEnd(0, -7);

    expect(line.start.x).toBe(5);
    expect(line.start.y).toBe(10);
    expect(line.end.x).toBe(17.5);
    expect(line.end.y).toBe(13);
  });

  test("should notify observer when definition changed by methods", () => {
    const observer = jest.fn();

    const start = new Point(5, 10);
    const end = new Point(15, 20);

    const line = new Line(start, end);

    line.addObserver(observer);

    line.moveStart(1, 1); // Currently notify 4 times
    line.moveEnd(1, 1); // Currently notify 4 times

    expect(observer).toHaveBeenCalledTimes(8);
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