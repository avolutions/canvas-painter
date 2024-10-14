import { PanOptions } from '../../src/options/PanOptions';
import { MouseButton } from '../../src/types/MouseButton';

describe('PanOptions', () => {
  test('should have default options', () => {
    const defaults = PanOptions.DefaultOptions;

    expect(defaults.mouseButtons).toStrictEqual([ MouseButton.Left ]);
    expect(defaults.useMouse).toBe(true);
  });

  test('should create an instance of PanOptions with default options', () => {
    const defaults = PanOptions.DefaultOptions;
    const options = new PanOptions();

    expect(options).toBeInstanceOf(PanOptions);
    expect(options.mouseButtons).toStrictEqual(defaults.mouseButtons);
    expect(options.useMouse).toBe(defaults.useMouse);
  });

  test('should set the values provided by constructor', () => {
    const buttons = [ MouseButton.Right, MouseButton.Middle ];
    const options = new PanOptions({ mouseButtons: buttons, useMouse: false });

    expect(options.mouseButtons).toStrictEqual(buttons);
    expect(options.useMouse).toBe(false);
  });

  test('should set partial values provided by constructor', () => {
    const options = new PanOptions({ useMouse: false });

    expect(options.mouseButtons).toStrictEqual([ MouseButton.Left ]);
    expect(options.useMouse).toBe(false);
  });

  test('should allow update of properties', () => {
    const buttons = [ MouseButton.Right, MouseButton.Middle ];
    const options = new PanOptions();

    options.mouseButtons = buttons
    options.useMouse = false;

    expect(options.mouseButtons).toStrictEqual(buttons);
    expect(options.useMouse).toBe(false);
  });
});
