import { RectangleOptions } from '../../src/options/RectangleOptions';

describe('RectangleOptions', () => {

  it('should create an instance of RectangleOptions', () => {
    const options = new RectangleOptions();
    expect(options).toBeInstanceOf(RectangleOptions);
  });

  it('should set the centered property correctly when provided', () => {
    const options = new RectangleOptions(true);
    expect(options.centered).toBe(true);
  });

  it('should set the centered property to undefined if not provided', () => {
    const options = new RectangleOptions();
    expect(options.centered).toBeUndefined();
  });

  it('should set the centered property to false when explicitly provided', () => {
    const options = new RectangleOptions(false);
    expect(options.centered).toBe(false);
  });
});
