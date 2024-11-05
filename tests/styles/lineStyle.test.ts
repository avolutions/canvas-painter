import { LineStyle } from '../../src/styles/LineStyle';
import { Cursor } from '../../src/types/Cursor';

describe('LineStyle', () => {
  test('should have default style', () => {
    const style = LineStyle.DefaultStyle;

    expect(style.color).toBe('#000000');
    expect(style.width).toBe(1);
    expect(style.cursor).toBe(Cursor.Default);
  });

  test('should create an instance of LineStyle with default styles', () => {
    const defaults = LineStyle.DefaultStyle;
    const style = new LineStyle();

    expect(style).toBeInstanceOf(LineStyle);
    expect(style.color).toBe(defaults.color);
    expect(style.width).toEqual(defaults.width);
    expect(style.cursor).toBe(defaults.cursor);
  });

  test('should set the values provided by constructor', () => {
    const style = {
      color: '#FFFFFF',
      width: 2.5,
      cursor: Cursor.Alias
    }

    const lineStyle = new LineStyle(style);

    expect(lineStyle.color).toBe(style.color);
    expect(lineStyle.width).toBe(style.width);
    expect(lineStyle.cursor).toBe(style.cursor);
  });

  test('should set partial values provided by constructor', () => {
    const defaults = LineStyle.DefaultStyle;

    const style = new LineStyle({ width: 7.3 });

    expect(style.color).toBe(defaults.color);
    expect(style.width).toBe(7.3);
    expect(style.cursor).toBe(defaults.cursor);
  });

  test('should allow update of properties', () => {
    const style = new LineStyle();

    style.color = '#FFFFFF';
    style.width = 4.2;
    style.cursor = Cursor.Cell;

    expect(style.color).toBe('#FFFFFF');
    expect(style.width).toBe(4.2);
    expect(style.cursor).toBe(Cursor.Cell);
  });
});
