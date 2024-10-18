import { CircleOptions } from '../../src/options/CircleOptions';
import { ShapeOptions } from '../../src/options/ShapeOptions';

describe('CircleOptions', () => {

  /*test('should have default options', () => {
    const defaults = CircleOptions.DefaultOptions;

  });*/

  test('should have default options from ShapeOptions', () => {
    // Iterate over all keys in ShapeOptions.DefaultOptions
    Object.keys(ShapeOptions.DefaultOptions).forEach((key) => {
      // Check if CircleOptions.DefaultOptions has the same key
      expect(CircleOptions.DefaultOptions).toHaveProperty(key);

      // Check if the value of the key is the same in both default options
      expect(CircleOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions])
        .toEqual(ShapeOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions]);
    });
  });

  test('should create an instance of CircleOptions with default options', () => {
    const options = new CircleOptions();

    expect(options).toBeInstanceOf(CircleOptions);

    // Check that all default options from ShapeOptions are applied
    Object.keys(ShapeOptions.DefaultOptions).forEach((key) => {
      expect(options).toHaveProperty(key);

      // Check if the value of the key in rectangleOptions is the same as in ShapeOptions.DefaultOptions
      expect(options[key as keyof typeof ShapeOptions.DefaultOptions])
        .toEqual(ShapeOptions.DefaultOptions[key as keyof typeof ShapeOptions.DefaultOptions]);
    });
  });

  test('should set the values provided by constructor', () => {
    const options = new CircleOptions({ visible: false });

    expect(options.visible).toBe(false);
  });

  test('should allow update of properties', () => {
    const options = new CircleOptions();

    options.visible = false;

    expect(options.visible).toBe(false);
  });
});
