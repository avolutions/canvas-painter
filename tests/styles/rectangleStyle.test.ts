import { RectangleStyle } from '../../src/styles/RectangleStyle';
import { Cursor } from '../../src/types/Cursor';

describe('RectangleStyle', () => {
  test('should have default style', () => {
    const style = RectangleStyle.DefaultStyle;

    expect(style.color).toBe('#000000');
    expect(style.borderColor).toBe('#000000');
    expect(style.borderWidth).toBe(0);
    expect(style.cursor).toBe(Cursor.Default);
  });

  test('should create an instance of RectangleStyle with default styles', () => {
    const defaults = RectangleStyle.DefaultStyle;
    const style = new RectangleStyle();

    expect(style).toBeInstanceOf(RectangleStyle);
    expect(style.color).toBe(defaults.color);
    expect(style.borderColor).toBe(defaults.borderColor);
    expect(style.borderWidth).toBe(defaults.borderWidth);
    expect(style.cursor).toBe(defaults.cursor);
  });

  test('should set the values provided by constructor', () => {
    const style = {
      color: '#FFFFFF',
      borderColor: '#12346',
      borderWidth: 2.5,
      cursor: Cursor.Alias
    }

    const rectangleStyle = new RectangleStyle(style);

    expect(rectangleStyle.color).toBe(style.color);
    expect(rectangleStyle.borderColor).toBe(style.borderColor);
    expect(rectangleStyle.borderWidth).toBe(style.borderWidth);
    expect(rectangleStyle.cursor).toBe(style.cursor);
  });

  test('should set partial values provided by constructor', () => {
    const defaults = RectangleStyle.DefaultStyle;

    const style = new RectangleStyle({ borderWidth: 4.2 });

    expect(style.color).toBe(defaults.color);
    expect(style.borderColor).toBe(defaults.borderColor);
    expect(style.borderWidth).toBe(4.2);
    expect(style.cursor).toBe(defaults.cursor);
  });

  test('should allow update of properties', () => {
    const style = new RectangleStyle();

    style.color = '#FFFFFF';
    style.borderColor = '#123456'
    style.borderWidth = 7.3;
    style.cursor = Cursor.Cell;

    expect(style.color).toBe('#FFFFFF');
    expect(style.borderColor).toBe('#123456');
    expect(style.borderWidth).toBe(7.3);
    expect(style.cursor).toBe(Cursor.Cell);
  });
});