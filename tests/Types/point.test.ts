import { Point } from '../../src/types/Point'

describe('Point class', () => {
  test('should create a point with given x and y coordinates', () => {
    const point = new Point(3, 4);

    expect(point.x).toBe(3);
    expect(point.y).toBe(4);
  });

  test('should create a point with given negative x and y coordinates', () => {
    const point = new Point(-3, -4);

    expect(point.x).toBe(-3);
    expect(point.y).toBe(-4);
  });
});