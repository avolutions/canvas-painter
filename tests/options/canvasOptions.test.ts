import { CanvasOptions } from '../../src/options/CanvasOptions';
import { PanOptions } from '../../src/options/PanOptions';
import { ZoomOptions } from '../../src/options/ZoomOptions';

describe('CanvasOptions', () => {
  test('should have default options', () => {
    const defaults = CanvasOptions.DefaultOptions;

    expect(defaults.width).toBe(300);
    expect(defaults.height).toBe(150);
    expect(defaults.zoomable).toBe(false);
    expect(defaults.pannable).toBe(false);
    expect(defaults.zoom).toBe(ZoomOptions.DefaultOptions);
    expect(defaults.pan).toBe(PanOptions.DefaultOptions);
  });

  test('should create an instance of CanvasOptions with default options', () => {
    const defaults = CanvasOptions.DefaultOptions;
    const options = new CanvasOptions();

    expect(options).toBeInstanceOf(CanvasOptions);
    expect(options.width).toBe(defaults.width);
    expect(options.height).toBe(defaults.height);
    expect(options.zoomable).toBe(defaults.zoomable)
    expect(options.pannable).toBe(defaults.pannable)
    expect(options.zoom).toBeInstanceOf(ZoomOptions);
    expect(options.zoom).toEqual(defaults.zoom)
    expect(options.pan).toBeInstanceOf(PanOptions);
    expect(options.pan).toEqual(defaults.pan)
  });

  test('should set the values provided by constructor', () => {
    const width = 800;
    const height = 600;
    const zoomable = true;
    const pannable = true;
    const zoom = { useWheel: false };
    const pan = { useMouse: false };

    const options = new CanvasOptions({ width: width, height: height, zoomable: zoomable, pannable: pannable, zoom: zoom, pan: pan });

    expect(options.width).toBe(width);
    expect(options.height).toBe(height);
    expect(options.zoomable).toBe(zoomable);
    expect(options.pannable).toBe(pannable);
    expect(options.zoom).toBeInstanceOf(ZoomOptions);
    expect(options.zoom.step).toBe(ZoomOptions.DefaultOptions.step);
    expect(options.zoom.useWheel).toBe(zoom.useWheel);
    expect(options.pan).toBeInstanceOf(PanOptions);
    expect(options.pan.mouseButtons).toStrictEqual(PanOptions.DefaultOptions.mouseButtons);
    expect(options.pan.useMouse).toBe(pan.useMouse);
  });

  test('should set partial values provided by constructor', () => {
    const defaults = CanvasOptions.DefaultOptions;
    const options = new CanvasOptions({ zoomable: true, zoom: { useWheel: false } });

    expect(options.width).toBe(defaults.width);
    expect(options.height).toBe(defaults.height);
    expect(options.zoomable).toBe(true);
    expect(options.pannable).toBe(false);
    expect(options.zoom).toBeInstanceOf(ZoomOptions);
    expect(options.zoom.step).toBe(ZoomOptions.DefaultOptions.step);
    expect(options.zoom.useWheel).toBe(false);
  });

  test('should allow update of properties', () => {
    const options = new CanvasOptions();
    const zoomOptions = new ZoomOptions();
    const panOptions = new PanOptions();

    options.width = 123;
    options.height = 456;
    options.zoomable = true;
    options.pannable = true;
    options.zoom = zoomOptions
    options.pan = panOptions

    expect(options.width).toBe(123);
    expect(options.height).toBe(456);
    expect(options.zoomable).toBe(true);
    expect(options.pannable).toBe(true);
    expect(options.zoom).toStrictEqual(zoomOptions);
    expect(options.pan).toStrictEqual(panOptions);
  });
});
