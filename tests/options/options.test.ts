import { Options } from '../../src/options/Options';

interface ExampleOptions {
  foo: string;
  bar: number;
  baz: boolean;
}

describe('Options', () => {
  const defaultOptions: ExampleOptions = {
    foo: 'defaultFoo',
    bar: 42,
    baz: true
  };

  test('should create new instance', () => {
    const instance = new Options<ExampleOptions>({}, defaultOptions);

    expect(instance).toBeInstanceOf(Options);
  });

  test('should apply default options when no options are provided', () => {
    const instance = new Options<ExampleOptions>({}, defaultOptions);

    expect((instance as any).foo).toBe('defaultFoo');
    expect((instance as any).bar).toBe(42);
    expect((instance as any).baz).toBe(true);
  });

  test('should override default options with provided options', () => {
    const instance = new Options<ExampleOptions>({ foo: 'providedFoo' }, defaultOptions);

    expect((instance as any).foo).toBe('providedFoo');
    expect((instance as any).bar).toBe(42);
    expect((instance as any).baz).toBe(true);
  });
});
