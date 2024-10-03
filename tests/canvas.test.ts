/**
 * @jest-environment jsdom
 */

import { Canvas } from '../src/Canvas';
import { Rectangle } from '../src/shapes/Rectangle';

global.CanvasRenderingContext2D = class {
  clearRect = jest.fn();
  fillRect = jest.fn();
  // Add any other methods you need
} as any;

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

    // Spy on context methods
    jest.spyOn(context, 'clearRect');
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

  test('should set default options', () => {
    const canvas = Canvas.init('canvas-id');

    expect((canvas as any)._options.width).toBe(300);
    expect((canvas as any)._options.height).toBe(150);
  });

  test('should set passed options', () => {
    const options = {
      width: 123,
      height: 456
    };
    const canvas = Canvas.init('canvas-id', options);

    expect((canvas as any)._options.width).toBe(123);
    expect((canvas as any)._options.height).toBe(456);
  });

  test('should set default style', () => {
    const canvas = Canvas.init('canvas-id');

    expect((canvas as any)._style.color).toBe('black');
    expect(canvas.context.fillStyle).toBe('black');
  });

  test('should set passed style', () => {
    const color = 'red';
    const style = {
      color: color
    };
    const canvas = Canvas.init('canvas-id', {}, style);

    expect((canvas as any)._style.color).toBe(color);
    expect(canvas.context.fillStyle).toBe(color);
  });

  test('should watch an empty array without error', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    canvas.watch([]);

    expect((canvas as any).watchedShapes).toHaveLength(0);

    expect(redrawSpy).toHaveBeenCalledTimes(0);
  });

  test('should watch a new shape', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(rect);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should not redraw when passing false to watch method', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);
    const rect2 = new Rectangle(0, 0, 0, 0);
    const rect3 = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect, false);
    canvas.watch([rect2, rect3], false);

    expect((canvas as any).watchedShapes).toHaveLength(3);
    expect((canvas as any).watchedShapes[0]).toBe(rect);
    expect((canvas as any).watchedShapes[1]).toBe(rect2);
    expect((canvas as any).watchedShapes[2]).toBe(rect3);

    expect(redrawSpy).toHaveBeenCalledTimes(0);
  });

  test('should watch an array of shapes', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);
    const rect2 = new Rectangle(0, 0, 0, 0);

    canvas.watch([rect, rect2]);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(rect);
    expect((canvas as any).watchedShapes[1]).toBe(rect2);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should watch a single shape via an array', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);

    canvas.watch([rect]);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(rect);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should not watch the same shape twice', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect);

    rect.height = 5;
    canvas.watch(rect);

    expect((canvas as any).watchedShapes).toHaveLength(1);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should not watch duplicate shapes from an array', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);

    canvas.watch([rect, rect]);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(rect);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should not watch already watched shapes from an array', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);
    const rect2 = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect);
    canvas.watch([rect, rect2]);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(rect);
    expect((canvas as any).watchedShapes[1]).toBe(rect2);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should watch different shapes of same type', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect1 = new Rectangle(0, 0, 0, 0);
    const rect2 = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect1);
    canvas.watch(rect2);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(rect1);
    expect((canvas as any).watchedShapes[1]).toBe(rect2);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should unwatch a shape', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);
    const rect2 = new Rectangle(0, 0, 0, 0);

    canvas.watch([rect, rect2]);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(rect);
    expect((canvas as any).watchedShapes[1]).toBe(rect2);

    canvas.unwatch(rect);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(rect2);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should unwatch multiple shapes', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);
    const rect2 = new Rectangle(0, 0, 0, 0);
    const rect3 = new Rectangle(0, 0, 0, 0);

    canvas.watch([rect, rect2]);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(rect);
    expect((canvas as any).watchedShapes[1]).toBe(rect2);

    canvas.unwatch([rect, rect2, rect3]);

    expect((canvas as any).watchedShapes).toHaveLength(0);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should not redraw on unwatch when passing false', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const rect = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect);

    canvas.unwatch(rect, false);

    expect((canvas as any).watchedShapes).toHaveLength(0);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should render shape when drawing', () => {
    const canvas = Canvas.init('canvas-id');

    const rect = new Rectangle(0, 0, 0, 0);
    const renderSpy = jest.spyOn(rect, 'render');

    canvas.draw(rect);

    expect(renderSpy).toHaveBeenCalledTimes(1);
  });

  test('should redraw the canvas', () => {
    const canvas = Canvas.init('canvas-id');
    const clearSpy = jest.spyOn(canvas, 'clear');
    const drawSpy = jest.spyOn(canvas, 'draw');

    const rect = new Rectangle(0, 0, 0, 0);
    const rect2 = new Rectangle(0, 0, 0, 0);

    canvas.watch(rect, false);
    canvas.watch(rect2, false);

    canvas.redraw();

    /* Clear canvas once, draw every watched shape */
    expect(clearSpy).toHaveBeenCalledTimes(1);
    expect(drawSpy).toHaveBeenCalledTimes(2);
  });

  test('should clear the entire canvas', () => {
    const canvas = Canvas.init('canvas-id');
    canvas.clear();

    // Verify that clearRect was called with the correct arguments
    expect(context.clearRect).toHaveBeenCalledWith(0, 0, 300, 150);
    expect(context.clearRect).toHaveBeenCalledTimes(1);
  });
});