import { RectangleDefinition } from '../../src/definitions/RectangleDefinition';
import { RectangleStyle } from '../../src/styles/RectangleStyle';
import { Angle } from '../../src/types/Angle';
import { Point } from '../../src/types/Point';

test('RectangleDefinition constructs properly', () => {
  const position = new Point(0, 0);
  const width = 100;
  const height = 50;
  const angle = new Angle(45);
  const style = {
    color: 'red',
    border: {
      color: 'blue',
      width: 2.5
    }
  };

  const rectangle = new RectangleDefinition(position, width, height, angle, style);

  expect(rectangle.position).toEqual(position);
  expect(rectangle.width).toBe(width);
  expect(rectangle.height).toBe(height);
  expect(rectangle.angle).toEqual(angle);
  expect(rectangle.style).toEqual(style);
});

test('RectangleDefinition handles zero width and height', () => {
  const position = new Point(10, 10);
  const zeroWidth = 0;
  const zeroHeight = 0;
  const angle = new Angle(0);
  const style = {
    color: 'red',
    border: {
      color: 'blue',
      width: 2.5
    }
  };

  const rectangle = new RectangleDefinition(position, zeroWidth, zeroHeight, angle, style);

  expect(rectangle.width).toBe(0);
  expect(rectangle.height).toBe(0);
});

test('RectangleDefinition handles negative width and height', () => {
  const position = new Point(20, 20);
  const width = -100;
  const height = -50;
  const angle = new Angle(90);
  const style = {
    color: 'red',
    border: {
      color: 'blue',
      width: 2.5
    }
  };

  const rectangle = new RectangleDefinition(position, width, height, angle, style);

  expect(rectangle.width).toBe(-100);
  expect(rectangle.height).toBe(-50);
});
