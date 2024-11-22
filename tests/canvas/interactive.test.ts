/**
 * @jest-environment jsdom
 */
import { fireEvent } from '@testing-library/dom';

import { Canvas } from "../../src/Canvas";
import { MockShape } from "../mocks/MockShape";
import { setupCanvas } from "./canvasTestUtils";

describe('Interactive function of canvas class', () => {
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

  test('should apply event handlers if interactive is enabled', () => {
    const spy = jest.spyOn(canvasElement, 'addEventListener');
    const documentSpy = jest.spyOn(document, 'addEventListener');
    Canvas.init('canvas-id', { interactive: true });

    expect(spy).toHaveBeenCalledWith('contextmenu', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('wheel', expect.any(Function));

    expect(documentSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });

  test('should not apply event handlers if interactive is enabled', () => {
    const spy = jest.spyOn(canvasElement, 'addEventListener');
    const documentSpy = jest.spyOn(document, 'addEventListener');
    Canvas.init('canvas-id', { interactive: false });

    expect(spy).not.toHaveBeenCalled();
    expect(documentSpy).not.toHaveBeenCalled();
  });

  test('should remove event handlers if interactive is set to false', () => {
    const spy = jest.spyOn(canvasElement, 'removeEventListener');
    const documentSpy = jest.spyOn(document, 'removeEventListener');
    const canvas = Canvas.init('canvas-id', { interactive: true });

    canvas.interactive = false;

    expect(spy).toHaveBeenCalledTimes(6);
    expect(documentSpy).toHaveBeenCalledTimes(1);
  });

  test('should add event handlers if interactive is set to true', () => {
    const spy = jest.spyOn(canvasElement, 'addEventListener');
    const documentSpy = jest.spyOn(document, 'addEventListener');
    const canvas = Canvas.init('canvas-id', { interactive: false });

    canvas.interactive = true;

    expect(spy).toHaveBeenCalledTimes(6);
    expect(documentSpy).toHaveBeenCalledTimes(1);
  });

  test('should not add event handlers if already interactive canvas is set to interactive', () => {
    const canvas = Canvas.init('canvas-id', { interactive: true });
    const spy = jest.spyOn(canvasElement, 'addEventListener');
    const documentSpy = jest.spyOn(document, 'addEventListener');

    canvas.interactive = true;

    expect(spy).not.toHaveBeenCalled();
    expect(documentSpy).not.toHaveBeenCalled();
  });

  test('should deselect all shapes when escape key was pressed', () => {
    const canvas = Canvas.init('canvas-id');
    const shape1 = new MockShape();
    const shape2 = new MockShape();

    canvas.watch([shape1, shape2]);

    shape1.select();
    shape2.select();

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);

    expect(shape1.isSelected()).toBe(false);
    expect(shape2.isSelected()).toBe(false);
  });

  test('should not deselect shapes when any other key was pressed', () => {
    const canvas = Canvas.init('canvas-id');
    const shape1 = new MockShape();
    const shape2 = new MockShape();

    canvas.watch([shape1, shape2]);

    shape1.select();

    const escapeEvent = new KeyboardEvent('keydown', { key: '123' });
    document.dispatchEvent(escapeEvent);

    expect(shape1.isSelected()).toBe(true);
    expect(shape2.isSelected()).toBe(false);
  });

  test('should select hovered shape and deselect all other shapes', () => {
    const canvas = Canvas.init('canvas-id');
    const shape1 = new MockShape();
    const shape2 = new MockShape();

    shape2.select();

    canvas.watch([shape1, shape2]);

    (canvas as any)._hoverShape = shape1;

    fireEvent.mouseDown((canvas as any)._canvas);

    expect((canvas as any)._selectedShape).toBe(shape1);
    expect(shape1.isSelected()).toBe(true);
    expect(shape2.isSelected()).toBe(false);
  });

  test('should not select shape if not hovered', () => {
    const canvas = Canvas.init('canvas-id');
    const shape1 = new MockShape();
    const shape2 = new MockShape();

    canvas.watch([shape1, shape2]);

    fireEvent.mouseDown((canvas as any)._canvas);

    expect((canvas as any)._selectedShape).toBe(null);
    expect(shape1.isSelected()).toBe(false);
    expect(shape2.isSelected()).toBe(false);
  });

  test('should not select hovered shape if not selectable', () => {
    const canvas = Canvas.init('canvas-id');
    const shape1 = new MockShape(0, {}, { selectable: false });
    const shape2 = new MockShape();

    canvas.watch([shape1, shape2]);

    (canvas as any)._hoverShape = shape1;

    fireEvent.mouseDown((canvas as any)._canvas);

    expect((canvas as any)._selectedShape).toBe(null);
    expect(shape1.isSelected()).toBe(false);
    expect(shape2.isSelected()).toBe(false);
  });

});