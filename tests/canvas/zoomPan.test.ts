/**
 * @jest-environment jsdom
 */

import { Canvas } from "../../src/Canvas";
import { MouseButton } from "../../src/types/MouseButton";
import { Point } from "../../src/types/Point";
import { setupCanvas } from "./canvasTestUtils";

describe('Zoom and pan function of canvas class', () => {
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

  test('should apply event handler for zooming', () => {
    const spy = jest.spyOn(canvasElement, 'addEventListener');

    Canvas.init('canvas-id');
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();

    Canvas.init('canvas-id', { zoomable: false });
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();

    Canvas.init('canvas-id', { zoomable: true });
    expect(spy).toHaveBeenCalledWith('wheel', expect.any(Function));
    spy.mockClear();

    Canvas.init('canvas-id', { zoomable: true, zoom: { useWheel: false } });
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();

    Canvas.init('canvas-id', { zoomable: true, zoom: { useWheel: true } });
    expect(spy).toHaveBeenCalledWith('wheel', expect.any(Function));
    spy.mockClear();

    Canvas.init('canvas-id', { zoomable: false, zoom: { useWheel: true } });
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();
  });

  test('should apply event handler for panning', () => {
    const spy = jest.spyOn(canvasElement, 'addEventListener');

    Canvas.init('canvas-id');
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();

    Canvas.init('canvas-id', { pannable: false });
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();

    Canvas.init('canvas-id', { pannable: true });
    expect(spy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
    spy.mockClear();

    Canvas.init('canvas-id', { pannable: true, pan: { useMouse: false } });
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();

    Canvas.init('canvas-id', { pannable: true, pan: { useMouse: true } });
    expect(spy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
    spy.mockClear();

    Canvas.init('canvas-id', { pannable: false, pan: { useMouse: true } });
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();
  });

  test('should set and get zoomScale correctly', () => {
    let canvas: Canvas;

    canvas = Canvas.init('canvas-id');
    expect(canvas.zoomScale).toBe(1.0);

    canvas.zoomScale = 0.05;
    expect(canvas.zoomScale).toBe(1.0);

    canvas = Canvas.init('canvas-id', { zoomable: true });

    canvas.zoomScale = 0.05;
    expect(canvas.zoomScale).toBe(0.05);
  });

  test('should call applyZoom when setting zoomScale', () => {
    let canvas: Canvas;
    let applyZoomSpy;

    canvas = Canvas.init('canvas-id');
    applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomScale = 0.47;
    expect(applyZoomSpy).not.toHaveBeenCalled();

    canvas = Canvas.init('canvas-id', { zoomable: true });
    applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomScale = 0.47;
    expect(applyZoomSpy).toHaveBeenCalled();
  });

  test('should set and get panOffset correctly', () => {
    let canvas: Canvas;

    canvas = Canvas.init('canvas-id');
    const offset = new Point(47.11, -12.3);
    expect(canvas.panOffset).toEqual(new Point(0, 0));

    canvas.panOffset = offset;
    expect(canvas.panOffset).toEqual(new Point(0, 0));

    canvas = Canvas.init('canvas-id', { pannable: true });

    canvas.panOffset = offset;
    expect(canvas.panOffset).toEqual(offset);

    canvas.panOffset.x = -15.756;
    canvas.panOffset.y = 42.1;
    expect(canvas.panOffset).toEqual(new Point(-15.756, 42.1));
  });

  test('should call redraw when setting panOffset', () => {
    let canvas: Canvas;
    let redrawSpy;

    canvas = Canvas.init('canvas-id');
    redrawSpy = jest.spyOn(canvas as any, 'redraw');

    canvas.panOffset = new Point(47.11, -12.3);
    expect(redrawSpy).not.toHaveBeenCalled();

    canvas = Canvas.init('canvas-id', { pannable: true });
    redrawSpy = jest.spyOn(canvas as any, 'redraw');

    canvas.panOffset = new Point(47.11, -12.3);
    expect(redrawSpy).toHaveBeenCalled();
  });

  test('should reset panOffset', () => {
    const canvas = Canvas.init('canvas-id', { pannable: true });
    const offset = new Point(23, 5);

    canvas.panOffset = offset;
    expect(canvas.panOffset).toEqual(offset);

    const redrawSpy = jest.spyOn(canvas as any, 'redraw');
    canvas.resetPan();

    expect(canvas.panOffset).toEqual(new Point(0, 0));
    expect(canvas.panOffset.x).toBe(0);
    expect(canvas.panOffset.x).toBe(0);
    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should reset zoomScale', () => {
    const canvas = Canvas.init('canvas-id', { zoomable: true });

    canvas.zoomScale = 2.5;
    expect(canvas.zoomScale).toEqual(2.5);

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');
    canvas.resetZoom();

    expect(canvas.zoomScale).toBe(1);
    expect(applyZoomSpy).toHaveBeenCalledTimes(1);
  });

  test('should reset zoomScale with active panning', () => {
    const canvas = Canvas.init('canvas-id', { zoomable: true, pannable: true });

    canvas.zoomScale = 2.5;
    expect(canvas.zoomScale).toEqual(2.5);

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');
    const resetZoomPanSpy = jest.spyOn(canvas as any, 'resetZoomPan');
    canvas.resetZoom();

    expect(canvas.zoomScale).toBe(1);
    expect(resetZoomPanSpy).toHaveBeenCalledTimes(1);
  });

  test('should reset zoomScale and panOffset', () => {
    const canvas = Canvas.init('canvas-id', { zoomable: true, pannable: true });
    const offset = new Point(23, 5);

    canvas.zoomScale = 2.5;
    canvas.panOffset = offset;
    expect(canvas.zoomScale).toEqual(2.5);
    expect(canvas.panOffset).toEqual(offset);

    const redrawSpy = jest.spyOn(canvas as any, 'redraw');
    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');
    canvas.resetZoomPan();

    expect(canvas.zoomScale).toBe(1);
    expect(canvas.panOffset).toEqual(new Point(0, 0));
    expect(canvas.panOffset.x).toBe(0);
    expect(canvas.panOffset.x).toBe(0);

    expect(applyZoomSpy).toHaveBeenCalledTimes(1);
    expect(redrawSpy).toHaveBeenCalledTimes(1);
  });

  test('should not zoomIn and zoomOut when canvas is not zoomable', () => {
    // TODO
  });

  test('should zoomIn and zoomOut without position', () => {
    const canvas = Canvas.init('canvas-id', { zoomable: true });

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomIn();
    expect(applyZoomSpy).toHaveBeenCalledWith(0.1, undefined);
    expect(canvas.zoomScale).toBe(1.1);
    expect(canvas.panOffset).toStrictEqual(new Point(-15, -7.5));

    canvas.zoomOut();
    expect(applyZoomSpy).toHaveBeenCalledWith(-0.1, undefined);
    expect(canvas.zoomScale).toBe(1);
    expect(canvas.panOffset).toStrictEqual(new Point(0, 0));
  });

  test('should zoomIn and zoomOut with position', () => {
    const canvas = Canvas.init('canvas-id', { zoomable: true });
    const position = new Point(150, 75);

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomIn(position);
    expect(applyZoomSpy).toHaveBeenCalledWith(0.1, position);
    expect(canvas.zoomScale).toBe(1.1);
    expect(canvas.panOffset.x).toBe(-15);
    expect(canvas.panOffset.y).toBe(-7.5);

    canvas.zoomOut(position);
    expect(applyZoomSpy).toHaveBeenCalledWith(-0.1, position);
    expect(canvas.zoomScale).toBe(1);
    expect(canvas.panOffset.x).toBe(0);
    expect(canvas.panOffset.y).toBe(0);
  });

  test('should zoomIn and zoomOut with custom zoom step', () => {
    const canvas = Canvas.init('canvas-id', { zoomable: true, zoom: { step: 0.25 } });

    const applyZoomSpy = jest.spyOn(canvas as any, 'applyZoom');

    canvas.zoomIn();
    expect(applyZoomSpy).toHaveBeenCalledWith(0.25, undefined);
    expect(canvas.zoomScale).toBe(1.25);
    expect(canvas.panOffset).toStrictEqual(new Point(-37.5, -18.75));

    canvas.zoomOut();
    expect(applyZoomSpy).toHaveBeenCalledWith(-0.25, undefined);
    expect(canvas.zoomScale).toBe(1);
    expect(canvas.panOffset).toStrictEqual(new Point(0, 0));
  });

  test('should start panning if mouse button is configured', () => {
    let canvas: Canvas;
    const mockEvent = {
      button: 0, // left
      offsetX: 47,
      offsetY: 11
    } as MouseEvent;

    /* Test left mouse button with default config */
    canvas = Canvas.init('canvas-id', { pannable: true });
    canvas.panOffset = new Point(7, 1);
    canvas['onMouseDown'](mockEvent);

    expect((canvas as any).isPanning).toBe(true);
    expect((canvas as any).panStart).toEqual(new Point(40, 10));

    /* Test left mouse button when explicit and exclusive configured */
    canvas = Canvas.init('canvas-id', { pannable: true, pan: { mouseButtons: [ MouseButton.Left ] } });
    canvas.panOffset = new Point(7, 1);
    canvas['onMouseDown'](mockEvent);

    expect((canvas as any).isPanning).toBe(true);
    expect((canvas as any).panStart).toEqual(new Point(40, 10));

    /* Test left mouse button when explicit and not exclusive configured */
    canvas = Canvas.init('canvas-id', { pannable: true, pan: { mouseButtons: [ MouseButton.Middle, MouseButton.Left ] } });
    canvas.panOffset = new Point(7, 1);
    canvas['onMouseDown'](mockEvent);

    expect((canvas as any).isPanning).toBe(true);
    expect((canvas as any).panStart).toEqual(new Point(40, 10));
  });

  test('should not start panning if mouse button is not configured', () => {
    let canvas: Canvas;
    const mockEvent = {
      button: 0, // left
      offsetX: 47,
      offsetY: 11
    } as MouseEvent;

    /* Test when left button is not configured */
    canvas = Canvas.init('canvas-id', { pannable: true, pan: { mouseButtons: [ MouseButton.Right ] } });
    canvas['onMouseDown'](mockEvent);

    expect((canvas as any).isPanning).toBe(false);

    /* Test when no button is configured */
    canvas = Canvas.init('canvas-id', { pannable: true, pan: { mouseButtons: [] } });
    canvas['onMouseDown'](mockEvent);

    expect((canvas as any).isPanning).toBe(false);
  });

  test('should pan if panning was started', () => {
    let canvas: Canvas;
    const mockEventDown = {
      offsetX: 47,
      offsetY: 11,
      button: 0, // left
    } as MouseEvent;

    const mockEventMove = {
      offsetX: 53.5,
      offsetY: 5.51
    } as MouseEvent;

    canvas = Canvas.init('canvas-id', { pannable: true });
    canvas['onMouseDown'](mockEventDown);
    canvas['onMouseMove'](mockEventMove);

    expect(canvas.panOffset).toStrictEqual(new Point(6.5, -5.49));
  });

  test('should not pan if panning was not started', () => {
    const offset = new Point(47, 11);
    let canvas: Canvas;
    const mockEvent = {
      button: 0, // left
      offsetX: 47,
      offsetY: 11
    } as MouseEvent;

    canvas = Canvas.init('canvas-id', { pannable: true });
    canvas.panOffset = offset;
    canvas['onMouseMove'](mockEvent);

    expect(canvas.panOffset).toStrictEqual(offset);
  });

  test('should stop panning on mouse up', () => {
    let canvas: Canvas;
    const mockEvent = {
      button: 0, // left
    } as MouseEvent;

    canvas = Canvas.init('canvas-id', { pannable: true });

    canvas['onMouseDown'](mockEvent);
    expect((canvas as any).isPanning).toBe(true);

    canvas['onMouseUp'](mockEvent);
    expect((canvas as any).isPanning).toBe(false);
  });

  test('should prevent default on wheel', () => {
    const preventDefaultSpy = jest.fn();
    const mockEvent = {
      deltaY: 0,
      preventDefault: preventDefaultSpy,
    } as unknown as WheelEvent;

    const canvas = Canvas.init('canvas-id');
    canvas['onWheel'](mockEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  test('should call zoomIn and zoomOut on wheel up and down', () => {
    let canvas: Canvas;
    const mockEventUp = {
      deltaY: -100,
      preventDefault: jest.fn()
    } as unknown as WheelEvent;

    const mockEventDown = {
      deltaY: 100,
      preventDefault: jest.fn()
    } as unknown as WheelEvent;

    canvas = Canvas.init('canvas-id');
    const zoomInSpy = jest.spyOn(canvas, 'zoomIn');
    const zoomOutSpy = jest.spyOn(canvas, 'zoomOut');

    canvas['onWheel'](mockEventUp);
    expect(zoomInSpy).toHaveBeenCalledWith(undefined);

    canvas['onWheel'](mockEventDown);
    expect(zoomOutSpy).toHaveBeenCalledWith(undefined);
  });

  test('should call zoomIn and zoomOut to mouse position if panning is active', () => {
    let canvas: Canvas;
    const mockEventUp = {
      deltaY: -100,
      offsetX: 42,
      offsetY: 11,
      preventDefault: jest.fn()
    } as unknown as WheelEvent;

    const mockEventDown = {
      deltaY: 100,
      offsetX: 42,
      offsetY: 11,
      preventDefault: jest.fn()
    } as unknown as WheelEvent;

    canvas = Canvas.init('canvas-id', { pannable: true });
    const zoomInSpy = jest.spyOn(canvas, 'zoomIn');
    const zoomOutSpy = jest.spyOn(canvas, 'zoomOut');

    canvas['onWheel'](mockEventUp);
    expect(zoomInSpy).toHaveBeenCalledWith(new Point(42, 11));

    canvas['onWheel'](mockEventDown);
    expect(zoomOutSpy).toHaveBeenCalledWith(new Point(42, 11));
  });
});