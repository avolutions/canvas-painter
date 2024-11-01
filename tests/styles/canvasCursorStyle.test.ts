import { CanvasCursorStyle } from '../../src/styles/CanvasCursorStyle';
import { Cursor } from '../../src/types/Cursor';

describe('CanvasCursorStyle', () => {
  test('should have default style', () => {
    const defaultStyle = CanvasCursorStyle.DefaultStyle;

    expect(defaultStyle.default).toBe('default');
    expect(defaultStyle.panActive).toBe('grabbing');
  });

  test('should create an instance of CanvasCursorStyle with default styles', () => {
    const defaults = CanvasCursorStyle.DefaultStyle;
    const style = new CanvasCursorStyle();

    expect(style).toBeInstanceOf(CanvasCursorStyle);
    expect(style.default).toBe(defaults.default);
    expect(style.panActive).toBe(defaults.panActive);
  });

  test('should set the values provided by constructor', () => {
    const defaultCursor = Cursor.Move;
    const panActive = Cursor.ZoomIn;

    const style = new CanvasCursorStyle({ default: defaultCursor, panActive: panActive });

    expect(style.default).toBe(defaultCursor);
    expect(style.panActive).toBe(panActive);
  });

  test('should set partial values provided by constructor', () => {
    const defaults = CanvasCursorStyle.DefaultStyle;
    const style = new CanvasCursorStyle({ panActive: Cursor.Move });

    expect(style.default).toBe(defaults.default);
    expect(style.panActive).toBe(Cursor.Move );
  });

  test('should allow update of properties', () => {
    const style = new CanvasCursorStyle();

    style.default = Cursor.Grab;
    style.panActive = Cursor.ZoomIn;

    expect(style.default).toBe(Cursor.Grab);
    expect(style.panActive).toBe(Cursor.ZoomIn);
  });
});