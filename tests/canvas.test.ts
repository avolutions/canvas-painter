/**
 * @jest-environment jsdom
 */

import { Canvas } from '../src/Canvas';
import { CanvasOptions } from '../src/options/CanvasOptions';
import { CanvasStyle } from '../src/styles/CanvasStyle';
import { Point } from '../src/types/Point';
import { MockShape } from './mocks/MockShape';

describe('Canvas class', () => {
  let canvasElement: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  beforeEach(() => {
    // Create a mock canvas element
    canvasElement = document.createElement('canvas');

    context = {
      canvas: canvasElement,
      clearRect: jest.fn(),
      resetTransform: jest.fn(),
      transform: jest.fn()
      // Add any other needed CanvasRenderingContext2D methods here
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
    expect(canvas.panOffset).toEqual(new Point(0, 0));
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

  test('should set default style', () => {
    const canvas = Canvas.init('canvas-id');
    const defaultStyle = CanvasStyle.DefaultStyle;

    expect((canvas as any)._style).toStrictEqual(defaultStyle);
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

  test('should set and get zoomScale correctly', () => {
    const canvas = Canvas.init('canvas-id');

    expect(canvas.zoomScale).toBe(1.0);

    canvas.zoomScale = 0.05;
    expect(canvas.zoomScale).toBe(0.05);
  });

  test('should call applyZoom when setting zoomScale', () => {
    const canvas = Canvas.init('canvas-id');

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomScale = 0.47;
    expect(applyZoomSpy).toHaveBeenCalled();
  });

  test('should set and get panOffset correctly', () => {
    const canvas = Canvas.init('canvas-id');
    const offset = new Point(47.11, -12.3);

    expect(canvas.panOffset).toEqual(new Point(0, 0));

    canvas.panOffset = offset;
    expect(canvas.panOffset).toEqual(offset);
    expect(canvas.panOffset.x).toBe(offset.x);
    expect(canvas.panOffset.y).toBe(offset.y);

    canvas.panOffset.x = -15.756;
    canvas.panOffset.y = 42.1;
    expect(canvas.panOffset).toEqual(new Point(-15.756, 42.1));
  });

  test('should call redraw when setting panOffset', () => {
    const canvas = Canvas.init('canvas-id');

    const redrawSpy = jest.spyOn(canvas as any, 'redraw');

    canvas.panOffset = new Point(47.11, -12.3);
    expect(redrawSpy).toHaveBeenCalled();
  });

  test('should reset panOffset', () => {
    const canvas = Canvas.init('canvas-id');
    const offset = new Point(23, 5);

    canvas.panOffset = offset;
    expect(canvas.panOffset).toEqual(offset);

    canvas.resetPan();

    expect(canvas.panOffset).toEqual(new Point(0, 0));
    expect(canvas.panOffset.x).toBe(0);
    expect(canvas.panOffset.x).toBe(0);
  });

  test('should reset zoomScale', () => {
    const canvas = Canvas.init('canvas-id');

    canvas.zoomScale = 2.5;
    expect(canvas.zoomScale).toEqual(2.5);

    canvas.resetZoom();

    expect(canvas.zoomScale).toBe(1);
  });

  test('should zoomIn and zoomOut without position', () => {
    const canvas = Canvas.init('canvas-id');

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomIn();
    expect(applyZoomSpy).toHaveBeenCalledWith(1.1, undefined);

    canvas.zoomOut();
    expect(applyZoomSpy).toHaveBeenCalledWith(0.9, undefined);
  });

  test('should zoomIn and zoomOut with position', () => {
    const canvas = Canvas.init('canvas-id');
    const position = new Point(47, 11);

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomIn(position);
    expect(applyZoomSpy).toHaveBeenCalledWith(1.1, position);

    canvas.zoomOut(position);
    expect(applyZoomSpy).toHaveBeenCalledWith(0.9, position);
  });

  test('should zoomIn and zoomOut with custom zoom step', () => {
    const canvas = Canvas.init('canvas-id', { zoom: { step: 0.25 } });

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomIn();
    expect(applyZoomSpy).toHaveBeenCalledWith(1.25, undefined);

    canvas.zoomOut();
    expect(applyZoomSpy).toHaveBeenCalledWith(0.75, undefined);
  });

  test('should zoomIn and zoomOut with custom zoom step', () => {
    const canvas = Canvas.init('canvas-id', { zoom: { step: 0.25 } });

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomIn();
    expect(applyZoomSpy).toHaveBeenCalledWith(1.25, undefined);

    canvas.zoomOut();
    expect(applyZoomSpy).toHaveBeenCalledWith(0.75, undefined);
  });
});