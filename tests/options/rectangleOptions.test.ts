import { RectangleOptions } from '../../src/options/RectangleOptions';
import { ShapeOptions } from '../../src/options/ShapeOptions';

describe('RectangleOptions', () => {

  test('should create an instance of RectangleOptions', () => {
    const options = new RectangleOptions();

    expect(options).toBeInstanceOf(RectangleOptions);

    // Ensure that RectangleOptions extends ShapeOptions
    expect(options).toBeInstanceOf(ShapeOptions);
  });

  test('should have default options', () => {
    const defaults = RectangleOptions.DefaultOptions;

    expect(defaults.centered).toBe(false);
  });

  test('should inherit default shape options', () => {
    const shapeDefaults = ShapeOptions.DefaultOptions;
    const rectangleDefaults = RectangleOptions.DefaultOptions;

    // Ensure every key from ShapeOptions.DefaultOptions exists in RectangleOptions.DefaultOptions
    (Object.keys(shapeDefaults) as (keyof ShapeOptions)[]).forEach((key) => {
      expect(rectangleDefaults).toHaveProperty(key, shapeDefaults[key]);
    });
  });

  test('should set the centered property to undefined if not provided', () => {
    const options = new RectangleOptions();

    expect(options.centered).toBeUndefined();
  });

  test('should set the centered property correctly when provided', () => {
    const options = new RectangleOptions(true);

    expect(options.centered).toBe(true);
  });

  test('should allow update of properties', () => {
    const options = new RectangleOptions();

    options.centered = true;

    expect(options.centered).toBe(true);
  });

  test('should allow update of inherited properties', () => {
    const options = new RectangleOptions();

    options.visible = true;

    expect(options.visible).toBe(true);
  });
});
