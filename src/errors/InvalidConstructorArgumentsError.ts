/**
 * Custom error to represent invalid constructor arguments.
 * This error is thrown when arguments passed to a constructor
 * do not meet the expected types or values.
 */
export class InvalidConstructorArgumentsError extends Error {
  /**
   * Creates a new `InvalidConstructorArgumentsError` instance.
   *
   * @param message - The error message to display. Defaults to "Invalid arguments passed to constructor".
   */
  constructor(message: string = "Invalid arguments passed to constructor") {
    super(message);
    this.name = "InvalidConstructorArgumentsError";
  }
}