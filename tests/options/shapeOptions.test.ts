import { ShapeOptions } from '../../src/options/ShapeOptions';

describe('ShapeOptions', () => {

  test('should have default values', () => {
    expect(ShapeOptions.DefaultOptions.visible).toBe(true);
    expect(ShapeOptions.DefaultOptions.draggable).toBe(true);
  });
});
