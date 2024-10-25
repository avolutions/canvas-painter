import { CanvasCursorStyle } from '../../src/styles/CanvasCursorStyle';
import { CanvasStyle } from '../../src/styles/CanvasStyle';
import { Cursor } from '../../src/types/Cursor';

describe('CanvasStyle', () => {
  test('should have default style', () => {
    const style = CanvasStyle.DefaultStyle;

    expect(style.color).toBe('#000000');
    expect(style.cursor).toBe(CanvasCursorStyle.DefaultStyle);
  });

  test('should create an instance of CanvasStyle with default styles', () => {
    const defaults = CanvasStyle.DefaultStyle;
    const style = new CanvasStyle();

    expect(style).toBeInstanceOf(CanvasStyle);
    expect(style.color).toBe(defaults.color);
    expect(style.cursor).toBeInstanceOf(CanvasCursorStyle);
    expect(style.cursor).toEqual(defaults.cursor);
  });

  test('should set the values provided by constructor', () => {
    const color = '#FFFFFF';
    const cursor = {
      default: Cursor.Grab,
      panActive: Cursor.Text
    };

    const style = new CanvasStyle({ color: color, cursor: cursor });

    expect(style.color).toBe(color);
    expect(style.cursor).toBeInstanceOf(CanvasCursorStyle);
    expect(style.cursor.default).toBe(cursor.default);
    expect(style.cursor.panActive).toBe(cursor.panActive);
  });

  test('should set partial values provided by constructor', () => {
    const defaults = CanvasStyle.DefaultStyle;

    const style = new CanvasStyle({ cursor: { panActive: Cursor.SwResize } });

    expect(style.color).toBe(defaults.color);
    expect(style.cursor).toBeInstanceOf(CanvasCursorStyle);
    expect(style.cursor.default).toBe(CanvasCursorStyle.DefaultStyle.default);
    expect(style.cursor.panActive).toBe(Cursor.SwResize);
  });

  test('should allow update of properties', () => {
    const style = new CanvasStyle();

    style.color = '#FFFFFF';
    style.cursor.default = Cursor.Alias;
    style.cursor.panActive = Cursor.Move;

    expect(style.color).toBe('#FFFFFF');
    expect(style.cursor.default).toBe(Cursor.Alias);
    expect(style.cursor.panActive).toBe(Cursor.Move);

    style.cursor = { default: Cursor.Copy, panActive: Cursor.Pointer };
    expect(style.cursor.default).toBe(Cursor.Copy);
    expect(style.cursor.panActive).toBe(Cursor.Pointer);
  });
});