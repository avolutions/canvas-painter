import { BorderStyle } from '../../src/styles/BorderStyle';
import { CircleStyle } from '../../src/styles/CircleStyle';


describe('CircleStyle', () => {
  test('should have default style', () => {
    const style = CircleStyle.DefaultStyle;

    expect(style.color).toBe('#000000');
    expect(style.border).toBe(BorderStyle.DefaultStyle);
  });

  test('should create an instance of CircleStyle with default styles', () => {
    const defaults = CircleStyle.DefaultStyle;
    const style = new CircleStyle();

    expect(style).toBeInstanceOf(CircleStyle);
    expect(style.color).toBe(defaults.color);
    expect(style.border).toBeInstanceOf(BorderStyle);
    expect(style.border).toEqual(defaults.border);
  });

  test('should set the values provided by constructor', () => {
    const color = '#FFFFFF';
    const border = {
      color: '#12346',
      width: 2.5
    };

    const style = new CircleStyle({ color: color, border: border });

    expect(style.color).toBe(color);
    expect(style.border).toBeInstanceOf(BorderStyle);
    expect(style.border.color).toBe(border.color);
    expect(style.border.width).toBe(border.width);
  });

  test('should set partial values provided by constructor', () => {
    const defaults = CircleStyle.DefaultStyle;

    const style = new CircleStyle({ border: { width: 4.2 } });

    expect(style.color).toBe(defaults.color);
    expect(style.border).toBeInstanceOf(BorderStyle);
    expect(style.border.color).toBe(BorderStyle.DefaultStyle.color);
    expect(style.border.width).toBe(4.2);
  });

  test('should allow update of properties', () => {
    const style = new CircleStyle();

    style.color = '#FFFFFF';
    style.border.color = '#123456'
    style.border.width = 7.3;

    expect(style.color).toBe('#FFFFFF');
    expect(style.border.color).toBe('#123456');
    expect(style.border.width).toBe(7.3);
  });
});