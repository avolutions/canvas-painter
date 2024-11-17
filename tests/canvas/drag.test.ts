/**
 * @jest-environment jsdom
 */

import { fireEvent } from '@testing-library/dom';

import { Canvas } from "../../src/Canvas";
import { CanvasStyle } from "../../src/styles/CanvasStyle";
import { MockShape } from "../mocks/MockShape";
import { MouseButton } from "../../src/types/MouseButton";
import { Point } from "../../src/types/Point";
import { setupCanvas } from "./canvasTestUtils";
import { Cursor } from '../../src/types/Cursor';

describe('Drag function of canvas class', () => {
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

  test('should not start dragging if mouse is not over a shape', () => {
    const mockEvent = {
      button: 0,
      offsetX: 47,
      offsetY: 11
    } as MouseEvent;

    const shape = new MockShape();
    const canvas = Canvas.init('canvas-id');
    canvas.watch(shape);

    canvas['onMouseDown'](mockEvent);

    expect((canvas as any)._hoverShape).toBe(null);
    expect((canvas as any)._dragShape).toBe(null);
    expect((canvas as any)._dragPosition).toEqual(new Point(0, 0));
  });

  test('should not start dragging if mouse is over not draggable shape', () => {
    const mockEvent = {
      button: 0,
      offsetX: 47,
      offsetY: 11
    } as MouseEvent;

    const shape = new MockShape(0, {}, { draggable: false });
    const canvas = Canvas.init('canvas-id');
    canvas.watch(shape);

    canvas['onMouseMove'](mockEvent);
    canvas['onMouseDown'](mockEvent);

    expect((canvas as any)._hoverShape).toBe(shape);
    expect((canvas as any)._dragShape).toBe(null);
    expect((canvas as any)._dragPosition).toEqual(new Point(0, 0));
  });

  test('should start dragging if mouse is over draggable shape', () => {
    const mockEvent = {
      button: 0,
      offsetX: 47,
      offsetY: 11
    } as MouseEvent;

    const shape = new MockShape();
    const canvas = Canvas.init('canvas-id');
    canvas.watch(shape);

    canvas['onMouseMove'](mockEvent);
    canvas['onMouseDown'](mockEvent);

    expect((canvas as any)._hoverShape).toBe(shape);
    expect((canvas as any)._dragShape).toBe(shape);
    expect((canvas as any)._dragPosition).toEqual(new Point(47, 11));
  });

  test('should stop dragging on mouse up', () => {
    const mockEvent = {
      button: 0,
      offsetX: 47,
      offsetY: 11
    } as MouseEvent;

    const shape = new MockShape();
    const canvas = Canvas.init('canvas-id');
    canvas.watch(shape);

    /* Start dragging */
    canvas['onMouseMove'](mockEvent);
    canvas['onMouseDown'](mockEvent);

    /* Stop dragging */
    canvas['onMouseUp'](mockEvent);

    expect((canvas as any)._dragShape).toBe(null);
    expect((canvas as any)._dragPosition).toEqual(new Point(0, 0));
    expect((canvas as any)._canvas.style.cursor).toBe(Cursor.Default);
  });
});
