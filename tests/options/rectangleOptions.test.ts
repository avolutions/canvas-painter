import { RectangleOptions } from '../../src/options/RectangleOptions';

describe('RectangleOptions', () => {

  test('should create an instance of RectangleOptions', () => {
    const options = new RectangleOptions();

    expect(options).toBeInstanceOf(RectangleOptions);
  });

  test('should have default options', () => {
    const defaults = RectangleOptions.DefaultOptions;

    expect(defaults.centered).toBe(false);
  });

  test('should set the centered property correctly when provided', () => {
    const options = new RectangleOptions(true);

    expect(options.centered).toBe(true);
  });

  test('should set the centered property to undefined if not provided', () => {
    const options = new RectangleOptions();

    expect(options.centered).toBeUndefined();
  });

  test('should set the centered property to false when explictestly provided', () => {
    const options = new RectangleOptions(false);

    expect(options.centered).toBe(false);
  });

  test('should allow update of properties', () => {
    const options = new RectangleOptions();

    options.centered = true;

    expect(options.centered).toBe(true);
  });
});
