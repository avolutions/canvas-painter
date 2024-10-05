import { BorderStyle } from '../../src/styles/BorderStyle';
import { CircleStyle } from '../../src/styles/CircleStyle';


describe('CircleStyle', () => {
  test('should create instance with default values', () => {
    const circleStyle = new CircleStyle();

    expect(circleStyle.color).toBeUndefined();
    expect(circleStyle.border).toBeUndefined();
  });

  test('should create instance with custom color and border', () => {
    const borderStyle = new BorderStyle('blue', 3);
    const circleStyle = new CircleStyle('green', borderStyle);

    expect(circleStyle.color).toBe('green');
    expect(circleStyle.border).toBe(borderStyle);
    expect(circleStyle.border?.color).toBe('blue');
    expect(circleStyle.border?.width).toBe(3);
  });

  test('should allow update of properties', () => {
    const borderStyle = new BorderStyle('blue', 3);
    const circleStyle = new CircleStyle();

    circleStyle.color = 'red';
    circleStyle.border = borderStyle;

    expect(circleStyle.color).toBe('red');
    expect(circleStyle.border).toBe(borderStyle);
    expect(circleStyle.border?.color).toBe('blue');
    expect(circleStyle.border?.width).toBe(3);
  });

});