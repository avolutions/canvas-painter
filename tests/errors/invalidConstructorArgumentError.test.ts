import { InvalidConstructorArgumentsError } from '../../src/errors/InvalidConstructorArgumentsError';

describe('InvalidConstructorArgumentsError class', () => {
  test('should throw an error with the default message', () => {
    const throwError = () => {
      throw new InvalidConstructorArgumentsError();
    };

    expect(throwError).toThrow(InvalidConstructorArgumentsError);
    expect(throwError).toThrow("Invalid arguments passed to constructor");
  });

  test('should throw an error with a custom message', () => {
    const throwError = () => {
      throw new InvalidConstructorArgumentsError("Custom error message");
    };

    expect(throwError).toThrow(InvalidConstructorArgumentsError);
    expect(throwError).toThrow("Custom error message");
  });
});
