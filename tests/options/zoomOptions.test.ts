import { ZoomOptions } from '../../src/options/ZoomOptions';

describe('ZoomOptions', () => {
  test('should have default options', () => {
    const defaults = ZoomOptions.DefaultOptions;

    expect(defaults.step).toBe(0.1);
    expect(defaults.useWheel).toBe(true);
  });

  test('should create an instance of ZoomOptions with default options', () => {
    const defaults = ZoomOptions.DefaultOptions;
    const options = new ZoomOptions();

    expect(options).toBeInstanceOf(ZoomOptions);
    expect(options.step).toBe(defaults.step);
    expect(options.useWheel).toBe(defaults.useWheel);
  });

  test('should set the values provided by constructor', () => {
    const options = new ZoomOptions({ step: 4.2, useWheel: false });

    expect(options.step).toBe(4.2);
    expect(options.useWheel).toBe(false);
  });

  test('should set partial values provided by constructor', () => {
    const options = new ZoomOptions({ useWheel: false });

    expect(options.step).toBe(ZoomOptions.DefaultOptions.step);
    expect(options.useWheel).toBe(false);
  });

  test('should allow update of properties', () => {
    const options = new ZoomOptions();

    options.step = 4.2;
    options.useWheel = false;

    expect(options.step).toBe(4.2);
    expect(options.useWheel).toBe(false);
  });
});
