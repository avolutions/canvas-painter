import { LineStyle } from '../../src/styles/LineStyle';

describe('LineStyle', () => {
  test('should have default style', () => {
    const style = LineStyle.DefaultStyle;

    expect(style.color).toBe('#000000');
    expect(style.width).toBe(1);
  });

  test('should create an instance of LineStyle with default styles', () => {
    const defaults = LineStyle.DefaultStyle;
    const style = new LineStyle();

    expect(style).toBeInstanceOf(LineStyle);
    expect(style.color).toBe(defaults.color);
    expect(style.width).toEqual(defaults.width);
  });

  test('should set the values provided by constructor', () => {
    const style = new LineStyle({ color: '#FFFFFF', width: 2.5 });

    expect(style.color).toBe('#FFFFFF');
    expect(style.width).toBe(2.5);
  });

  test('should set partial values provided by constructor', () => {
    const defaults = LineStyle.DefaultStyle;

    const style = new LineStyle({ width: 7.3 });

    expect(style.color).toBe(defaults.color);
    expect(style.width).toBe(7.3);
  });

  test('should allow update of properties', () => {
    const style = new LineStyle();

    style.color = '#FFFFFF';
    style.width = 4.2;

    expect(style.color).toBe('#FFFFFF');
    expect(style.width).toBe(4.2);
  });
});
