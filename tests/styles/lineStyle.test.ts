import { LineStyle } from '../../src/styles/LineStyle';

describe('LineStyle', () => {
  test('should create instance with default values', () => {
    const style = new LineStyle();

    expect(style.color).toBeUndefined();
    expect(style.width).toBeUndefined();
  });

  it('should create a LineStyle with the correct color and width', () => {
    const style = new LineStyle('red', 5);

    expect(style.color).toBe('red');
    expect(style.width).toBe(5);
  });

  it('should allow creating a LineStyle with only color', () => {
    const style = new LineStyle('blue');

    expect(style.color).toBe('blue');
    expect(style.width).toBeUndefined();
  });

  it('should allow creating a LineStyle with only width', () => {
    const style = new LineStyle(undefined, 10);

    expect(style.color).toBeUndefined();
    expect(style.width).toBe(10);
  });

  it('should allow updating of properties', () => {
    const style = new LineStyle('red', 5);

    // Update color and width
    style.color = 'blue';
    style.width = 10;

    expect(style.color).toBe('blue');
    expect(style.width).toBe(10);
  });
});
