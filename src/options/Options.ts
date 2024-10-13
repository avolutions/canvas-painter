/**
 * A base class for handling options with default values.
 *
 * @template T The type of the options object.
 */
export class Options<T> {
  /**
   * Creates a new instance of the Options class.
   *
   * @param options The partial options provided by the user.
   * @param defaultOptions The default options to fall back on when certain properties are not provided.
   */
  constructor(options: Partial<T> = {}, defaultOptions: T) {
    const optionsWithDefaults = {
      ...defaultOptions,
      ...options
    };

    Object.assign(this, optionsWithDefaults);
  }
}
