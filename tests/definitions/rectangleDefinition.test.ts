import { RectangleDefinition } from '../../src/definitions/RectangleDefinition';
import { Angle } from '../../src/types/Angle';
import { Point } from '../../src/types/Point';

test('RectangleDefinition constructs properly', () => {
  const position = new Point(0, 0);
  const width = 100;
  const height = 50;
  const angle = new Angle(45);

  const rectangle = new RectangleDefinition(position, width, height, angle);

  expect(rectangle.position).toEqual(position);
  expect(rectangle.width).toBe(width);
  expect(rectangle.height).toBe(height);
  expect(rectangle.angle).toEqual(angle);
});

it('should serialize into an array', () => {
  const position = new Point(1, 2);
  const width = 100;
  const height = 50;
  const angle = new Angle(45);

  const definition = new RectangleDefinition(position, width, height, angle);
  const result = definition.toArray();

  const expectedResult = [
    100,
    50,
    [
      1,
      2
    ],
    [
      45,
      45 * Math.PI / 180,
      false
    ]
  ];

  expect(result).toEqual(expectedResult);
});

it('should serialize into json', () => {
  const position = new Point(1, 2);
  const width = 100;
  const height = 50;
  const angle = new Angle(45);

  const definition = new RectangleDefinition(position, width, height, angle);
  const result = definition.toJson();

  const expectedResult = {
    width: 100,
    height: 50,
    position: {
      x: 1,
      y: 2
    },
    angle: {
      degrees: 45,
      radians: 45 * Math.PI / 180,
      isNormalized: false
    }
  }

  expect(result).toEqual(JSON.stringify(expectedResult));
});

test('RectangleDefinition handles zero width and height', () => {
  const position = new Point(10, 10);
  const zeroWidth = 0;
  const zeroHeight = 0;
  const angle = new Angle(0);

  const rectangle = new RectangleDefinition(position, zeroWidth, zeroHeight, angle);

  expect(rectangle.width).toBe(0);
  expect(rectangle.height).toBe(0);
});

test('RectangleDefinition handles negative width and height', () => {
  const position = new Point(20, 20);
  const width = -100;
  const height = -50;
  const angle = new Angle(90);

  const rectangle = new RectangleDefinition(position, width, height, angle);

  expect(rectangle.width).toBe(-100);
  expect(rectangle.height).toBe(-50);
});
