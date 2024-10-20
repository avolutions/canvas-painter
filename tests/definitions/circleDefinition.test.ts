import { CircleDefinition } from '../../src/definitions/CircleDefinition';
import { Point } from '../../src/types/Point';

describe('CircleDefinition', () => {
  test('should create a CircleDefinition with correct center and radius', () => {
    const center = new Point(0, 0);
    const circle = new CircleDefinition(center, 10);

    expect(circle.center).toBe(center);
    expect(circle.center.x).toBe(center.x);
    expect(circle.center.y).toBe(center.y);
    expect(circle.radius).toBe(10);
  });

  test('should not allow creating a CircleDefinition with radius 0', () => {
    expect(() => {
      new CircleDefinition(new Point(5, 10), 0)
    }).toThrow(new RangeError("Radius must be a positive number"));
  });

  test('should not allow creating a CircleDefinition with negative radius', () => {
    expect(() => {
      new CircleDefinition(new Point(5, 10), -5.75)
    }).toThrow(new RangeError("Radius must be a positive number"));
  });

  it('should serialize into an array', () => {
    const definition = new CircleDefinition(new Point(1, 2), 3);
    const result = definition.toArray();

    expect(result).toEqual([[1, 2], 3]);
  });

  it('should serialize into json', () => {
    const definition = new CircleDefinition(new Point(1, 2), 3);
    const result = definition.toJson();

    const expectedResult = {
      center: {
        x: 1,
        y: 2
      },
      radius: 3
    }

    expect(result).toEqual(JSON.stringify(expectedResult));
  });

  test('should allow updating the center and radius', () => {
    const center = new Point(0, 0);
    const circle = new CircleDefinition(center, 10);

    const newCenter = new Point(1, 2);
    circle.center = newCenter;
    circle.radius = 6.7

    expect(circle.center).toBe(newCenter);
    expect(circle.center.x).toBe(newCenter.x);
    expect(circle.center.y).toBe(newCenter.y);
    expect(circle.radius).toBe(6.7);
  });

  test('should not allow update a negative radius', () => {
    const center = new Point(0, 0);
    const circle = new CircleDefinition(center, 10);

    expect(() => {
      circle.radius = -3
    }).toThrow("Radius must be a positive number");
  });
});
