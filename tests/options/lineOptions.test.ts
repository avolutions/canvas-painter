import { LineOptions } from '../../src/options/LineOptions';
import { ShapeOptions } from '../../src/options/ShapeOptions';

describe('LineOptions', () => {

  /*test('should have default options', () => {
    const defaults = LineOptions.DefaultOptions;

  });*/

  test('should have default options from ShapeOptions', () => {
    // Iterate over all keys in ShapeOptions.DefaultOptions
    Object.keys(ShapeOptions.DefaultOptions).forEach((key) => {
      // Check if LineOptions.DefaultOptions has the same key
      expect(LineOptions.DefaultOptions).toHaveProperty(key);

      // Check if the value of the key is the same in both default options
      expect(LineOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions])
        .toEqual(ShapeOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions]);
    });
  });

  test('should create an instance of LineOptions with default options', () => {
    const options = new LineOptions();

    expect(options).toBeInstanceOf(LineOptions);

    // Check that all default options from ShapeOptions are applied
    Object.keys(ShapeOptions.DefaultOptions).forEach((key) => {
      expect(options).toHaveProperty(key);

      // Check if the value of the key in rectangleOptions is the same as in ShapeOptions.DefaultOptions
      expect(options[key as keyof typeof ShapeOptions.DefaultOptions])
        .toEqual(ShapeOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions]);
    });
  });

  test('should set the values provided by constructor', () => {
    const options = new LineOptions({ visible: false, selectable: false });

    expect(options.visible).toBe(false);
    expect(options.selectable).toBe(false);
  });

  test('should set partial values provided by constructor', () => {
    const options = new LineOptions({ visible: false });

    expect(options.visible).toBe(false);
    expect(options.selectable).toBe(true);
  });

  test('should allow update of properties', () => {
    const options = new LineOptions();

    options.visible = false;
    options.selectable = false;

    expect(options.visible).toBe(false);
    expect(options.selectable).toBe(false);
  });
});
