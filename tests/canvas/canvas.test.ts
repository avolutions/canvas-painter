/**
 * @jest-environment jsdom
 */

import { Canvas } from '../../src/Canvas';
import { CanvasOptions } from '../../src/options/CanvasOptions';
import { CanvasStyle } from '../../src/styles/CanvasStyle';
import { Cursor } from '../../src/types/Cursor';
import { Point } from '../../src/types/Point';
import { MockShape } from '../mocks/MockShape';
import { setupCanvas } from './canvasTestUtils';

describe('Canvas class', () => {
  let canvasElement: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  beforeEach(() => {
    const setup = setupCanvas();
    canvasElement = setup.canvasElement;
    context = setup.context;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('init throws error if element is not found', () => {
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(null);

    const initWithError = () => {
      Canvas.init('nonexistent-id')
    };

    expect(initWithError).toThrow(new ReferenceError("Element with id 'nonexistent-id' not found"));
  });

  test('init throws error if element is not a canvas', () => {
    const nonCanvasElement = document.createElement('div');
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(nonCanvasElement);

    const initWithError = () => {
      Canvas.init('non-canvas-id');
    };

    expect(initWithError).toThrow(new TypeError("Element with id 'non-canvas-id' is not a canvas"));
  });

  test('init throws error if 2d context cannot be retrieved', () => {
    const canvasElement = document.createElement('canvas');
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(canvasElement);
    jest.spyOn(canvasElement, 'getContext').mockReturnValueOnce(null);

    const initWithError = () => {
      Canvas.init('canvas-id');
    };

    expect(initWithError).toThrow(new TypeError("Failed to get '2d' context from canvas"));
  });

  test('init returns a Canvas instance with a valid context', () => {
    const canvas = Canvas.init('canvas-id');

    expect(canvas).toBeInstanceOf(Canvas);
    expect(Canvas['instances'].has(canvasElement)).toBe(true);
    expect(Canvas['instances'].get(canvasElement)).toBe(canvas);

    expect(canvas.context).toBe(context);
    expect(canvas.panOffset).toEqual(new Point(0, 0));
  });

  test('should cleanup old instance if new one is created', () => {
    const removeEventListenerSpy = jest.spyOn(canvasElement, 'removeEventListener');
    const deleteSpy = jest.spyOn(Canvas['instances'], 'delete');

    const canvas = Canvas.init('canvas-id');

    // Re-initialize, triggering the removal of the old instance and listener
    const canvas2 = Canvas.init('canvas-id');

    // Verify that the delete method was called on the first instance
    expect(deleteSpy).toHaveBeenCalledWith(canvasElement);

    // Verify that the new instance is stored in the WeakMap
    expect(Canvas['instances'].get(canvasElement)).toBe(canvas2);
    expect(Canvas['instances'].get(canvasElement)).not.toBe(canvas);

    // Verify that event listener were removed
    expect(removeEventListenerSpy).toHaveBeenCalledWith('wheel', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function));

    expect(removeEventListenerSpy).toHaveBeenCalledTimes(7);
  });

  test('should set default options', () => {
    const canvas = Canvas.init('canvas-id');
    const defaultOptions = CanvasOptions.DefaultOptions;

    expect((canvas as any)._options).toEqual(defaultOptions);
  });

  test('should set passed options', () => {
    const options = {
      width: 123,
      height: 456
    };
    const canvas = Canvas.init('canvas-id', options);

    expect((canvas as any)._options.width).toBe(123);
    expect((canvas as any)._options.height).toBe(456);

    expect(canvasElement.width).toBe(123);
    expect(canvasElement.height).toBe(456);
  });

  test('should use the canvas element attributes if no options are provided', () => {
    // Mock getComputedStyle to simulate CSS dimensions
    jest.spyOn(window, 'getComputedStyle').mockReturnValueOnce({
      width: '600px',
      height: '450px',
    } as CSSStyleDeclaration);

    canvasElement.width = 400;
    canvasElement.height = 200;

    const canvas = Canvas.init('canvas-id');

    expect((canvas as any)._options.width).toBe(400);
    expect((canvas as any)._options.height).toBe(200);

    expect(canvasElement.width).toBe(400);
    expect(canvasElement.height).toBe(200);
  });

  test('should use the computed CSS width and height if no options or attributes are provided', () => {
    // Mock getComputedStyle to simulate CSS dimensions
    jest.spyOn(window, 'getComputedStyle').mockReturnValueOnce({
      width: '600px'
    } as CSSStyleDeclaration);

    jest.spyOn(window, 'getComputedStyle').mockReturnValueOnce({
      height: '450px'
    } as CSSStyleDeclaration);

    const canvas = Canvas.init('canvas-id');

    expect((canvas as any)._options.width).toBe(600);
    expect((canvas as any)._options.height).toBe(450);

    expect(canvasElement.width).toBe(600);
    expect(canvasElement.height).toBe(450);
  });

  test('should use the passed options width and height even there are canvas element attributes and css', () => {
    // Mock getComputedStyle to simulate CSS dimensions
    jest.spyOn(window, 'getComputedStyle').mockReturnValueOnce({
      width: '600px',
      height: '450px',
    } as CSSStyleDeclaration);

    canvasElement.width = 300;
    canvasElement.height = 200;

    const options = {
      width: 123,
      height: 456
    };

    const canvas = Canvas.init('canvas-id', options);

    expect((canvas as any)._options.width).toBe(123);
    expect((canvas as any)._options.height).toBe(456);

    expect(canvasElement.width).toBe(123);
    expect(canvasElement.height).toBe(456);
  });

  test('should handle width and height independently', () => {
    // Mock getComputedStyle to simulate CSS dimensions
    jest.spyOn(window, 'getComputedStyle').mockReturnValueOnce({
      width: '600px',
    } as CSSStyleDeclaration);

    canvasElement.height = 200;

    const canvas = Canvas.init('canvas-id');

    expect((canvas as any)._options.width).toBe(600);
    expect((canvas as any)._options.height).toBe(200);

    expect(canvasElement.width).toBe(600);
    expect(canvasElement.height).toBe(200);
  });

  test('should return center', () => {
    let canvas: Canvas;

    canvas = Canvas.init('canvas-id');
    expect(canvas.getCenter()).toStrictEqual(new Point(150, 75));

    canvas = Canvas.init('canvas-id', { width: 123, height: 456 });
    expect(canvas.getCenter()).toStrictEqual(new Point(61.5, 228));
  });

  test('should set default style', () => {
    const canvas = Canvas.init('canvas-id');
    const defaultStyle = CanvasStyle.DefaultStyle;

    expect((canvas as any)._style).toEqual(defaultStyle);
  });

  test('should set passed style', () => {
    const style = {
      color: 'red',
      cursor: {
        default: Cursor.Move
      }
    };
    const canvas = Canvas.init('canvas-id', {}, style);

    expect((canvas as any)._style.color).toBe(style.color);
    expect((canvas as any)._style.cursor.default).toBe(style.cursor.default);

    expect(canvas.context.fillStyle).toBe(style.color);

    expect((canvas as any)._canvas.style.cursor).toBe(style.cursor.default);
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

    const shape = new MockShape();

    canvas.watch(shape);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(shape);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should not redraw when passing false to watch method', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();
    const shape2 = new MockShape();
    const shape3 = new MockShape();

    canvas.watch(shape, false);
    canvas.watch([shape2, shape3], false);

    expect((canvas as any).watchedShapes).toHaveLength(3);
    expect((canvas as any).watchedShapes[0]).toBe(shape);
    expect((canvas as any).watchedShapes[1]).toBe(shape2);
    expect((canvas as any).watchedShapes[2]).toBe(shape3);

    expect(redrawSpy).toHaveBeenCalledTimes(0);
  });

  test('should watch an array of shapes', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();
    const shape2 = new MockShape();

    canvas.watch([shape, shape2]);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(shape);
    expect((canvas as any).watchedShapes[1]).toBe(shape2);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should watch a single shape via an array', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();

    canvas.watch([shape]);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(shape);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should not watch the same shape twice', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();

    canvas.watch(shape);

    shape.width = 5;
    canvas.watch(shape);

    expect((canvas as any).watchedShapes).toHaveLength(1);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should not watch duplicate shapes from an array', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();

    canvas.watch([shape, shape]);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(shape);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should not watch already watched shapes from an array', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();
    const shape2 = new MockShape();

    canvas.watch(shape);
    canvas.watch([shape, shape2]);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(shape);
    expect((canvas as any).watchedShapes[1]).toBe(shape2);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should watch different shapes of same type', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape1 = new MockShape();
    const shape2 = new MockShape();

    canvas.watch(shape1);
    canvas.watch(shape2);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(shape1);
    expect((canvas as any).watchedShapes[1]).toBe(shape2);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should unwatch a shape', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();
    const shape2 = new MockShape();

    canvas.watch([shape, shape2]);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(shape);
    expect((canvas as any).watchedShapes[1]).toBe(shape2);

    canvas.unwatch(shape);

    expect((canvas as any).watchedShapes).toHaveLength(1);
    expect((canvas as any).watchedShapes[0]).toBe(shape2);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should unwatch multiple shapes', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();
    const shape2 = new MockShape();
    const shape3 = new MockShape();

    canvas.watch([shape, shape2]);

    expect((canvas as any).watchedShapes).toHaveLength(2);
    expect((canvas as any).watchedShapes[0]).toBe(shape);
    expect((canvas as any).watchedShapes[1]).toBe(shape2);

    canvas.unwatch([shape, shape2, shape3]);

    expect((canvas as any).watchedShapes).toHaveLength(0);

    expect(redrawSpy).toHaveBeenCalledTimes(2);
  });

  test('should not redraw on unwatch when passing false', () => {
    const canvas = Canvas.init('canvas-id');
    const redrawSpy = jest.spyOn(canvas, 'redraw');

    const shape = new MockShape();

    canvas.watch(shape);

    canvas.unwatch(shape, false);

    expect((canvas as any).watchedShapes).toHaveLength(0);

    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should render shape when drawing', () => {
    const canvas = Canvas.init('canvas-id');

    const shape = new MockShape();
    const renderSpy = jest.spyOn(shape, 'render');

    canvas.draw(shape);

    expect(renderSpy).toHaveBeenCalledTimes(1);
  });

  test('should not render hidden shape when drawing', () => {
    const canvas = Canvas.init('canvas-id');

    const shape = new MockShape();
    shape.hide();
    const renderSpy = jest.spyOn(shape, 'render');

    canvas.draw(shape);

    expect(renderSpy).toHaveBeenCalledTimes(0);
  });

  test('should redraw the canvas', () => {
    const canvas = Canvas.init('canvas-id');
    const clearSpy = jest.spyOn(canvas, 'clear');
    const drawSpy = jest.spyOn(canvas, 'draw');

    const shape = new MockShape();
    const shape2 = new MockShape();

    canvas.watch(shape, false);
    canvas.watch(shape2, false);

    canvas.redraw();

    /* Clear canvas once, draw every watched shape */
    expect(clearSpy).toHaveBeenCalledTimes(1);
    expect(drawSpy).toHaveBeenCalledTimes(2);
  });

  test('should apply transformation when redrawing the canvas', () => {
    let canvas: Canvas;

    canvas = Canvas.init('canvas-id');
    canvas.redraw();

    expect(context.resetTransform).toHaveBeenCalledTimes(1);
    expect(context.transform).toHaveBeenCalledWith(1, 0, 0, 1, 0, 0);

    canvas = Canvas.init('canvas-id', { zoomable: true, pannable: true });
    canvas.zoomScale = 1.23;
    canvas.panOffset = new Point(4.7, 1.1);

    // Reset the mocks
    (context.resetTransform as jest.Mock).mockClear();
    (context.transform as jest.Mock).mockClear();

    canvas.redraw();

    expect(context.resetTransform).toHaveBeenCalledTimes(1);
    expect(context.transform).toHaveBeenCalledWith(1.23, 0, 0, 1.23, 4.7, 1.1);
  });

  test('should not redraw hidden shape the canvas', () => {
    const canvas = Canvas.init('canvas-id');
    const clearSpy = jest.spyOn(canvas, 'clear');
    const drawSpy = jest.spyOn(canvas, 'draw');

    const shape = new MockShape();
    const renderSpy = jest.spyOn(shape, 'render');
    const shape2 = new MockShape();
    const renderSpy2 = jest.spyOn(shape2, 'render');

    shape.hide();

    canvas.watch(shape, false);
    canvas.watch(shape2, false);

    canvas.redraw();

    /* Clear canvas once, draw every watched shape */
    expect(clearSpy).toHaveBeenCalledTimes(1);
    expect(drawSpy).toHaveBeenCalledTimes(2);

    expect(renderSpy).toHaveBeenCalledTimes(0);
    expect(renderSpy2).toHaveBeenCalledTimes(1);
  });

  test('should clear the entire canvas', () => {
    const canvas = Canvas.init('canvas-id');
    canvas.clear();

    // Verify that clearRect was called with the correct arguments
    expect(context.clearRect).toHaveBeenCalledWith(0, 0, 300, 150);
    expect(context.clearRect).toHaveBeenCalledTimes(1);
  });
});