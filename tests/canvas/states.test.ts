/**
 * @jest-environment jsdom
 */

import { fireEvent } from '@testing-library/dom';

import { Canvas } from "../../src/Canvas";
import { setupCanvas } from "./canvasTestUtils";
import { MockShape } from "../mocks/MockShape";
import { ShapeState } from '../../src/common/ShapeState';
import { Cursor } from '../../src/types/Cursor';


describe('State functions of canvas class', () => {
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

  test('should set the hovered shape state and cursor correctly', () => {
    const shape1 = new MockShape(0, { hover: { cursor: Cursor.Copy } });
    const shape2 = new MockShape(0, { hover: { cursor: Cursor.Move } });
    const canvas = Canvas.init('canvas-id');

    jest.spyOn(shape1, 'isMouseOver').mockReturnValue(true);
    jest.spyOn(shape2, 'isMouseOver').mockReturnValue(false);

    canvas.watch(shape1);
    canvas.watch(shape2);

    fireEvent.mouseMove((canvas as any)._canvas);

    expect(shape1.state).toBe(ShapeState.Hover);
    expect(shape2.state).toBe(ShapeState.Default);

    expect((canvas as any)._hoverShape).toBe(shape1);
    expect((canvas as any)._canvas.style.cursor).toBe(Cursor.Copy);
  });

  test('should set the hovered shape state and cursor correctly only for first shape', () => {
    const shape1 = new MockShape(0, { hover: { cursor: Cursor.Copy } });
    const shape2 = new MockShape(0, { hover: { cursor: Cursor.Move } });
    const canvas = Canvas.init('canvas-id');

    jest.spyOn(shape1, 'isMouseOver').mockReturnValue(true);
    jest.spyOn(shape2, 'isMouseOver').mockReturnValue(true);

    canvas.watch(shape1);
    canvas.watch(shape2);

    fireEvent.mouseMove((canvas as any)._canvas);

    expect(shape1.state).toBe(ShapeState.Default);
    expect(shape2.state).toBe(ShapeState.Hover);

    expect((canvas as any)._hoverShape).toBe(shape2);
    expect((canvas as any)._canvas.style.cursor).toBe(Cursor.Move);
  });

  test('should reset cursor and all shapes to Default state if mouse is not over any shape', () => {
    const shape1 = new MockShape(0, { hover: { cursor: Cursor.Copy } });
    const shape2 = new MockShape(0, { hover: { cursor: Cursor.Move } });
    const canvas = Canvas.init('canvas-id');

    jest.spyOn(shape1, 'isMouseOver').mockReturnValue(false);
    jest.spyOn(shape2, 'isMouseOver').mockReturnValue(false);

    shape1.state = ShapeState.Hover;
    shape2.state = ShapeState.Hover;

    canvas.watch(shape1);
    canvas.watch(shape2);

    fireEvent.mouseMove((canvas as any)._canvas);

    expect(shape1.state).toBe(ShapeState.Default);
    expect(shape2.state).toBe(ShapeState.Default);

    expect((canvas as any)._canvas.style.cursor).toBe(Cursor.Default);
    expect((canvas as any)._hoverShape).toBeNull();
  });

  test('should reset all states to Default if mouse is leaving canvas', () => {
    const shape1 = new MockShape(0, { hover: { cursor: Cursor.Copy } });
    const shape2 = new MockShape(0, { hover: { cursor: Cursor.Move } });
    const canvas = Canvas.init('canvas-id');

    jest.spyOn(shape1, 'isMouseOver').mockReturnValue(false);
    jest.spyOn(shape2, 'isMouseOver').mockReturnValue(false);

    shape1.state = ShapeState.Hover;
    shape2.state = ShapeState.Hover;

    canvas.watch(shape1);
    canvas.watch(shape2);

    fireEvent.mouseLeave((canvas as any)._canvas);

    expect(shape1.state).toBe(ShapeState.Default);
    expect(shape2.state).toBe(ShapeState.Default);

    expect((canvas as any)._canvas.style.cursor).toBe(Cursor.Default);
    expect((canvas as any)._hoverShape).toBeNull();
  });

});