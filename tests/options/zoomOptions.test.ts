import { ZoomOptions } from '../../src/options/ZoomOptions';

describe('ZoomOptions', () => {
  test('should create an instance of ZoomOptions', () => {
    const options = new ZoomOptions();
    expect(options).toBeInstanceOf(ZoomOptions);
  });

  test('should have default options', () => {
    const defaults = ZoomOptions.DefaultOptions;

    expect(defaults.step).toBe(0.1);
    expect(defaults.useWheel).toBe(true);
  });

  test('should set values correctly when provided', () => {
    const step = 1.5;
    const useWheel = false;
    const options = new ZoomOptions(step, useWheel);

    expect(options.step).toBe(step);
    expect(options.useWheel).toBe(useWheel);
  });

  test('should allow values to be undefined', () => {
    const options = new ZoomOptions();

    expect(options.step).toBeUndefined();
    expect(options.useWheel).toBeUndefined();
  });

  test('should allow update of properties', () => {
    const options = new ZoomOptions();

    options.step = 4.2;
    options.useWheel = false;

    expect(options.step).toBe(4.2);
    expect(options.useWheel).toBe(false);
  });
});
