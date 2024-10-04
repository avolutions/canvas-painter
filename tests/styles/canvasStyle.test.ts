import { CanvasStyle } from '../../src/styles/CanvasStyle';

describe('CanvasStyle', () => {
  test('should have default style', () => {
    const defaultStyle = CanvasStyle.DefaultStyle;

    expect(defaultStyle.color).toBe('#000000');
  });

  test('should create instance with default color', () => {
    const canvasStyle = new CanvasStyle();

    expect(canvasStyle.color).toBeUndefined();  // No color provided
  });

  test('should create instance with custom color', () => {
    const canvasStyle = new CanvasStyle('#FFFFFF');

    expect(canvasStyle.color).toBe('#FFFFFF');
  });

  test('should allow update of properties', () => {
    const options = new CanvasStyle();

    options.color = 'red';

    expect(options.color).toBe('red');
  });
});