import { MouseButton } from '../../src/types/MouseButton'

describe('MouseButton', () => {
  test('should have correct values for each mouse button', () => {
    expect(MouseButton.Left).toBe(0);
    expect(MouseButton.Middle).toBe(1);
    expect(MouseButton.Right).toBe(2);
    expect(MouseButton.Back).toBe(3);
    expect(MouseButton.Forward).toBe(4);
  });
});