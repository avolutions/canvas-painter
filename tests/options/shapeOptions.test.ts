import { ShapeOptions } from '../../src/options/ShapeOptions';

describe('ShapeOptions', () => {

  test('should create an instance of ShapeOptions', () => {
    const options = new ShapeOptions();

    expect(options).toBeInstanceOf(ShapeOptions);
  });

  test('should have default options', () => {
    const defaults = ShapeOptions.DefaultOptions;

    expect(defaults.visible).toBe(true);
  });

  test('should set the isVisible property to undefined if not provided', () => {
    const options = new ShapeOptions();

    expect(options.visible).toBeUndefined();
  });

  test('should set the properties correctly when provided', () => {
    const options = new ShapeOptions(true);

    expect(options.visible).toBe(true);
  });

  test('should allow update of properties', () => {
    const options = new ShapeOptions();

    options.visible = true;

    expect(options.visible).toBe(true);
  });
});
