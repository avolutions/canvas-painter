import { ShapeState } from '../../src/common/ShapeState'

describe('ShapeState', () => {
  test('should have correct values for each shape state', () => {
    expect(ShapeState.Default).toBe("default");
    expect(ShapeState.Hover).toBe("hover");
    expect(ShapeState.Active).toBe("active");
  });
});