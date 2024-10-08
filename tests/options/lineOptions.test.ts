import { LineOptions } from '../../src/options/LineOptions';
import { ShapeOptions } from '../../src/options/ShapeOptions';

describe('LineOptions', () => {
  test('should create an instance of LineOptions', () => {
    const options = new LineOptions();

    expect(options).toBeInstanceOf(LineOptions);

    // Ensure that LineOptions extends ShapeOptions
    expect(options).toBeInstanceOf(ShapeOptions);
  });

  test('should have default options', () => {
    const defaults = LineOptions.DefaultOptions;
  });

  test('should inherit default shape options', () => {
    const shapeDefaults = ShapeOptions.DefaultOptions;
    const rectangleDefaults = LineOptions.DefaultOptions;

    // Ensure every key from ShapeOptions.DefaultOptions exists in LineOptions.DefaultOptions
    (Object.keys(shapeDefaults) as (keyof ShapeOptions)[]).forEach((key) => {
      expect(rectangleDefaults).toHaveProperty(key, shapeDefaults[key]);
    });
  });

  test('should allow update of inherited properties', () => {
    const options = new LineOptions();

    options.visible = true;

    expect(options.visible).toBe(true);
  });
});
