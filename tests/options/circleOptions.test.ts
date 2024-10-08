import { CircleOptions } from '../../src/options/CircleOptions';
import { ShapeOptions } from '../../src/options/ShapeOptions';

describe('CircleOptions', () => {
  test('should create an instance of CircleOptions', () => {
    const options = new CircleOptions();

    expect(options).toBeInstanceOf(CircleOptions);

    // Ensure that CircleOptions extends ShapeOptions
    expect(options).toBeInstanceOf(ShapeOptions);
  });

  test('should have default options', () => {
    const defaults = CircleOptions.DefaultOptions;
  });

  test('should inherit default shape options', () => {
    const shapeDefaults = ShapeOptions.DefaultOptions;
    const rectangleDefaults = CircleOptions.DefaultOptions;

    // Ensure every key from ShapeOptions.DefaultOptions exists in CircleOptions.DefaultOptions
    (Object.keys(shapeDefaults) as (keyof ShapeOptions)[]).forEach((key) => {
      expect(rectangleDefaults).toHaveProperty(key, shapeDefaults[key]);
    });
  });

  test('should allow update of inherited properties', () => {
    const options = new CircleOptions();

    options.visible = true;

    expect(options.visible).toBe(true);
  });
});
