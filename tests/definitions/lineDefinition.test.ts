import { LineDefinition } from '../../src/definitions/LineDefinition';
import { Point } from '../../src/types/Point';

describe('LineDefinition', () => {
  it('should create a LineDefinition with correct start and end points', () => {
    const start = new Point(0, 0);
    const end = new Point(10, 10);
    const line = new LineDefinition(start, end);

    expect(line.start).toBe(start);
    expect(line.end).toBe(end);
  });

  it('should allow creating a LineDefinition with different points', () => {
    const line = new LineDefinition({ x: 5, y: 10 }, { x: 15, y: 20 });

    expect(line.start.x).toBe(5);
    expect(line.start.y).toBe(10);
    expect(line.end.x).toBe(15);
    expect(line.end.y).toBe(20);
  });

  it('should allow updating the start and end points', () => {
    const start = new Point(0, 0);
    const end = new Point(10, 10);
    const line = new LineDefinition(start, end);

    // Update start and end points
    const newStart = new Point(1, 1);
    const newEnd = new Point(20, 20);
    line.start = newStart;
    line.end = newEnd;

    expect(line.start).toBe(newStart);
    expect(line.end).toBe(newEnd);
    expect(line.start.x).toBe(1);
    expect(line.start.y).toBe(1);
    expect(line.end.x).toBe(20);
    expect(line.end.y).toBe(20);
  });
});
