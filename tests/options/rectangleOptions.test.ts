import { RectangleOptions } from '../../src/options/RectangleOptions';
import { ShapeOptions } from '../../src/options/ShapeOptions';

describe('RectangleOptions', () => {

  test('should have default options', () => {
    const defaults = RectangleOptions.DefaultOptions;

    expect(defaults.centered).toBe(false);
  });

  test('should have default options from ShapeOptions', () => {
    // Iterate over all keys in ShapeOptions.DefaultOptions
    Object.keys(ShapeOptions.DefaultOptions).forEach((key) => {
      // Check if RectangleOptions.DefaultOptions has the same key
      expect(RectangleOptions.DefaultOptions).toHaveProperty(key);

      // Check if the value of the key is the same in both default options
      expect(RectangleOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions])
        .toEqual(ShapeOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions]);
    });
  });

  test('should create an instance of RectangleOptions with default options', () => {
    const defaults = RectangleOptions.DefaultOptions;
    const options = new RectangleOptions();

    expect(options).toBeInstanceOf(RectangleOptions);
    expect(options.centered).toBe(defaults.centered);

    // Check that all default options from ShapeOptions are applied
    Object.keys(ShapeOptions.DefaultOptions).forEach((key) => {
      expect(options).toHaveProperty(key);

      // Check if the value of the key in rectangleOptions is the same as in ShapeOptions.DefaultOptions
      expect(options[key as keyof typeof ShapeOptions.DefaultOptions])
        .toEqual(ShapeOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions]);
    });
  });

  test('should set the values provided by constructor', () => {
    const options = new RectangleOptions({ centered: true, visible: false });

    expect(options.centered).toBe(true);
    expect(options.visible).toBe(false);
  });

  test('should set partial values provided by constructor', () => {
    const options = new RectangleOptions({ visible: false });

    expect(options.centered).toBe(false);
    expect(options.visible).toBe(false);
  });

  test('should allow update of properties', () => {
    const options = new RectangleOptions();

    options.centered = true;
    options.visible = false;

    expect(options.centered).toBe(true);
    expect(options.visible).toBe(false);
  });
});
