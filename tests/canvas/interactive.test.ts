/**
 * @jest-environment jsdom
 */
import { Canvas } from "../../src/Canvas";
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
    Canvas.init('canvas-id', { interactive: true });

    expect(spy).toHaveBeenCalledWith('contextmenu', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    expect(spy).toHaveBeenCalledWith('wheel', expect.any(Function));
  });

  test('should not apply event handlers if interactive is enabled', () => {
    const spy = jest.spyOn(canvasElement, 'addEventListener');
    Canvas.init('canvas-id', { interactive: false });

    expect(spy).not.toHaveBeenCalled();
  });

  test('should remove event handlers if interactive is set to false', () => {
    const spy = jest.spyOn(canvasElement, 'removeEventListener');
    const canvas = Canvas.init('canvas-id', { interactive: true });

    canvas.interactive = false;

    expect(spy).toHaveBeenCalledTimes(6);
  });

  test('should add event handlers if interactive is set to true', () => {
    const spy = jest.spyOn(canvasElement, 'addEventListener');
    const canvas = Canvas.init('canvas-id', { interactive: false });

    canvas.interactive = true;

    expect(spy).toHaveBeenCalledTimes(6);
  });

  test('should not add event handlers if already interactive canvas is set to interactive', () => {
    const canvas = Canvas.init('canvas-id', { interactive: true });
    const spy = jest.spyOn(canvasElement, 'addEventListener');

    canvas.interactive = true;

    expect(spy).not.toHaveBeenCalled();
  });

});