import { BorderStyle } from '../../src/styles/BorderStyle';

describe('BorderStyle', () => {
  test('should have default style', () => {
    const style = BorderStyle.DefaultStyle;

    expect(style.color).toBe('');
    expect(style.width).toBe(0);
  });

  test('should create an instance of BorderStyle with default styles', () => {
    const defaults = BorderStyle.DefaultStyle;
    const style = new BorderStyle();

    expect(style).toBeInstanceOf(BorderStyle);
    expect(style.color).toBe(defaults.color);
    expect(style.width).toEqual(defaults.width);
  });

  test('should set the values provided by constructor', () => {
    const style = new BorderStyle({ color: '#FFFFFF', width: 2.5 });

    expect(style.color).toBe('#FFFFFF');
    expect(style.width).toBe(2.5);
  });

  test('should set partial values provided by constructor', () => {
    const defaults = BorderStyle.DefaultStyle;

    const style = new BorderStyle({ width: 7.3 });

    expect(style.color).toBe(defaults.color);
    expect(style.width).toBe(7.3);
  });

  test('should allow update of properties', () => {
    const style = new BorderStyle();

    style.color = '#FFFFFF';
    style.width = 4.2;

    expect(style.color).toBe('#FFFFFF');
    expect(style.width).toBe(4.2);
  });
});