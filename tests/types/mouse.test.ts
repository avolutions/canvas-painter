import { Mouse } from '../../src/types/Mouse'
import { Point } from '../../src/types/Point';

describe('Mouse class', () => {
  test('should return the position of current event', () => {
    const mockEvent = {
      offsetX: 100,
      offsetY: 200,
    } as MouseEvent;

    // Call the getEventPosition method
    const point = Mouse.getEventPosition(mockEvent);

    // Assert that the returned point has the correct coordinates
    expect(point).toBeInstanceOf(Point);
    expect(point.x).toBe(100);
    expect(point.y).toBe(200);
  });
});