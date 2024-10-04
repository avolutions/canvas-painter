import { BorderStyle } from '../../src/styles/BorderStyle';

describe('BorderStyle', () => {
  test('should create instance with default values', () => {
    const borderStyle = new BorderStyle();

    expect(borderStyle.color).toBeUndefined();
    expect(borderStyle.width).toBeUndefined();
  });

  test('should create instance with provided color and width', () => {
    const borderStyle = new BorderStyle('red', 5);

    expect(borderStyle.color).toBe('red');
    expect(borderStyle.width).toBe(5);
  });

  test('should allow update of properties', () => {
    const options = new BorderStyle();

    options.color = 'red';
    options.width = 42;

    expect(options.color).toBe('red');
    expect(options.width).toBe(42);
  });
});