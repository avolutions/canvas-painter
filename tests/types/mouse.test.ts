import { Mouse } from '../../src/types/Mouse'
import { Point } from '../../src/types/Point';

const mockMouseEvent = (): MouseEvent => {
  return {
    offsetX: 100,
    offsetY: 150,
    clientX: 200,
    clientY: 250,
    pageX: 300,
    pageY: 350,
    screenX: 400,
    screenY: 450,
  } as MouseEvent;
};

describe('Mouse class', () => {
  test('should return correct offset position', () => {
    const event = mockMouseEvent();
    const position = Mouse.getOffsetPosition(event);

    expect(position).toEqual(new Point(100, 150));
  });

  test('should return correct client position', () => {
    const event = mockMouseEvent();
    const position = Mouse.getClientPosition(event);

    expect(position).toEqual(new Point(200, 250));
  });

  test('should return correct page position', () => {
    const event = mockMouseEvent();
    const position = Mouse.getPagePosition(event);

    expect(position).toEqual(new Point(300, 350));
  });

  test('should return correct screen position', () => {
    const event = mockMouseEvent();
    const position = Mouse.getScreenPosition(event);

    expect(position).toEqual(new Point(400, 450));
  });
});