/**
 * @jest-environment jsdom
 */

import { Canvas } from '../src/Canvas';
import { IShape } from '../src/shapes/IShape';
import { Rectangle } from '../src/shapes/Rectangle';

global.CanvasRenderingContext2D = class {
  clearRect = jest.fn();
  fillRect = jest.fn();
  // Add any other methods you need
} as any;

// Mock for IShape
class MockShape implements IShape {
  render(context: CanvasRenderingContext2D): void {
    // Mock implementation
  }
  addObserver(observer: () => void): void {
    // Mock implementation
  }
}

describe('Canvas class', () => {
  let canvasElement: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  beforeEach(() => {
    // Create a mock canvas element
    canvasElement = document.createElement('canvas');

    context = {
      canvas: canvasElement,
      clearRect: jest.fn(),
      fillRect: jest.fn(),
      restore: jest.fn(),
      rotate: jest.fn(),
      save: jest.fn(),
      translate: jest.fn(),
      // Add any other CanvasRenderingContext2D methods you need here
    } as unknown as CanvasRenderingContext2D;

    // Mock getContext to return our mock context
    jest.spyOn(canvasElement, 'getContext').mockReturnValue(context);

    // Mock getElementById to return our canvas element
    jest.spyOn(document, 'getElementById').mockReturnValue(canvasElement);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('init throws error if element is not found', () => {
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(null);

    expect(() => {
      Canvas.init('nonexistent-id') }
    ).toThrow("Element with id 'nonexistent-id' not found");
  });

  test('init throws error if element is not a canvas', () => {
    const nonCanvasElement = document.createElement('div');
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(nonCanvasElement);

    expect(() => {
      Canvas.init('non-canvas-id');
    }).toThrow("Element with id 'non-canvas-id' is not a canvas");
  });

  test('init throws error if 2d context cannot be retrieved', () => {
    const canvasElement = document.createElement('canvas');
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(canvasElement);
    jest.spyOn(canvasElement, 'getContext').mockReturnValueOnce(null);

    expect(() => {
      Canvas.init('canvas-id');
    }).toThrow("Failed to get '2d' context from canvas");
  });

  test('init returns a Canvas instance with a valid context', () => {
    const canvas = Canvas.init('canvas-id');

    expect(canvas).toBeInstanceOf(Canvas);
    expect(canvas.context).toBe(context);
  });

  test('should watch and unwatch a new shape', () => {
    const canvas = Canvas.init('canvas-id');
    const rect = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(rect);
  });

  test('should not watch the same shape twice', () => {
    const canvas = Canvas.init('canvas-id');
    const rect = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect);
    canvas.watch(rect);

    expect((canvas as any).watchedShapes).toHaveLength(1);
  });

  test('should watch different shapes of same type', () => {
    const canvas = Canvas.init('canvas-id');
    const rect1 = new Rectangle(0, 0, 0, 0);
    const rect2 = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect1);
    canvas.watch(rect2);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(rect1);
    expect((canvas as any).watchedShapes[1]).toBe(rect2);
  });
});