import { CanvasOptions } from '../../src/options/CanvasOptions';

describe('CanvasOptions', () => {
  it('should create an instance of CanvasOptions', () => {
    const options = new CanvasOptions();
    expect(options).toBeInstanceOf(CanvasOptions);
  });

  test('should have default options', () => {
    const defaults = CanvasOptions.DefaultOptions;

    expect(defaults.width).toBe(300);
    expect(defaults.height).toBe(150);
  });

  it('should set width and height correctly when provided', () => {
    const width = 800;
    const height = 600;
    const options = new CanvasOptions(width, height);

    expect(options.width).toBe(800);
    expect(options.height).toBe(600);
  });

  it('should allow width and height to be undefined', () => {
    const options = new CanvasOptions();

    expect(options.width).toBeUndefined();
    expect(options.height).toBeUndefined();
  });

  it('should allow width to be defined and height undefined', () => {
    const width = 1024;
    const options = new CanvasOptions(width);

    expect(options.width).toBe(1024);
    expect(options.height).toBeUndefined();
  });

  it('should allow height to be defined and width undefined', () => {
    const height = 768;
    const options = new CanvasOptions(undefined, height);

    expect(options.width).toBeUndefined();
    expect(options.height).toBe(768);
  });

  it('should allow update of properties', () => {
    const options = new CanvasOptions();

    options.width = 123;
    options.height = 456;

    expect(options.width).toBe(123);
    expect(options.height).toBe(456);
  });
});
