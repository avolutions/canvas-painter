import { BorderStyle } from '../../src/styles/BorderStyle';
import { RectangleStyle } from '../../src/styles/RectangleStyle';


describe('RectangleStyle', () => {
  test('should create instance with default values', () => {
    const rectangleStyle = new RectangleStyle();

    expect(rectangleStyle.color).toBeUndefined();
    expect(rectangleStyle.border).toBeUndefined();
  });

  test('should create instance with custom color and border', () => {
    const borderStyle = new BorderStyle('blue', 3);
    const rectangleStyle = new RectangleStyle('green', borderStyle);

    expect(rectangleStyle.color).toBe('green');
    expect(rectangleStyle.border).toBe(borderStyle);
    expect(rectangleStyle.border?.color).toBe('blue');
    expect(rectangleStyle.border?.width).toBe(3);
  });

  test('should allow update of properties', () => {
    const borderStyle = new BorderStyle('blue', 3);
    const rectangleStyle = new RectangleStyle();

    rectangleStyle.color = 'red';
    rectangleStyle.border = borderStyle;

    expect(rectangleStyle.color).toBe('red');
    expect(rectangleStyle.border).toBe(borderStyle);
    expect(rectangleStyle.border?.color).toBe('blue');
    expect(rectangleStyle.border?.width).toBe(3);
  });

});