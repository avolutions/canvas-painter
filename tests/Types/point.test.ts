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

  it('should serialize into an array', () => {
    const point = new Point(5, 6);
    const result = point.toArray();

    expect(result).toEqual([5, 6]);
  });

  it('should serialize into json', () => {
    const point = new Point(5, 6);
    const result = point.toJson();

    expect(result).toEqual(JSON.stringify({x: 5, y: 6}));
  });

  test('should update x and y coordinates', () => {
    const point = new Point(0, 0);

    expect(point.x).toBe(0);
    expect(point.y).toBe(0);

    point.x = 5;
    point.y = -8;

    expect(point.x).toBe(5);
    expect(point.y).toBe(-8);
  });

  test('should move the point by the given delta on the x-axis', () => {
    const point = new Point(0, 0);

    point.moveX(3);
    expect(point.x).toBe(3);
    expect(point.y).toBe(0);

    point.moveX(-7);
    expect(point.x).toBe(-4);
    expect(point.y).toBe(0);
  });

  test('should move the point by the given delta on the y-axis', () => {
    const point = new Point(0, 0);

    point.moveY(3);
    expect(point.x).toBe(0);
    expect(point.y).toBe(3);

    point.moveY(-7);
    expect(point.x).toBe(0);
    expect(point.y).toBe(-4);
  });

  test('should move the point by the given deltas on both axes', () => {
    const point = new Point(0, -3);

    point.move(3, 4.6);
    expect(point.x).toBeCloseTo(3);
    expect(point.y).toBeCloseTo(1.6);

    point.move(-12.5, -7);
    expect(point.x).toBeCloseTo(-9.5);
    expect(point.y).toBeCloseTo(-5.4);
  });

  test('should move the point only along the x-axis when y delta is not provided', () => {
    const point = new Point(0, 12);

    point.move(3);
    expect(point.x).toBe(3);
    expect(point.y).toBe(12);
  });

  test('should move the point only along the y-axis when x delta is not provided', () => {
    const point = new Point(12, 0);

    point.move(undefined, 3);
    expect(point.x).toBe(12);
    expect(point.y).toBe(3);
  });

  it('should not move the point if no deltas are provided', () => {
    const point = new Point(5, 6);

    point.move();
    expect(point.x).toBe(5);
    expect(point.y).toBe(6);
  });
});