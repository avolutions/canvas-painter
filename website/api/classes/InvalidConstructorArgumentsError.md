Custom error to represent invalid constructor arguments.
This error is thrown when arguments passed to a constructor
do not meet the expected types or values.

## Extends

- `Error`

## Constructors

### new InvalidConstructorArgumentsError()

> **new InvalidConstructorArgumentsError**(`message`): [`InvalidConstructorArgumentsError`](InvalidConstructorArgumentsError.md)

Creates a new `InvalidConstructorArgumentsError` instance.

#### Parameters

• **message**: `string` = `"Invalid arguments passed to constructor"`

The error message to display. Defaults to "Invalid arguments passed to constructor".

#### Returns

[`InvalidConstructorArgumentsError`](InvalidConstructorArgumentsError.md)

#### Overrides

`Error.constructor`

#### Defined in

[errors/InvalidConstructorArgumentsError.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/errors/InvalidConstructorArgumentsError.ts#L12)
