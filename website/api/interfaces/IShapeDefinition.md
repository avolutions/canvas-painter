Interface for defining the basic structure of a shape.

This interface can be extended by various shape definitions
(e.g., rectangles, circles) to ensure a consistent structure
across different shape types.

## Remarks

This is an empty object type and serves as a base or marker for shape definition types.

## Extends

- [`ISerializable`](ISerializable.md)

## Methods

### toArray()

> **toArray**(): `any`[]

Serializes the object’s properties into an array.

#### Returns

`any`[]

An array representation of the object's properties.

#### Inherited from

[`ISerializable`](ISerializable.md).[`toArray`](ISerializable.md#toarray)

#### Defined in

[common/ISerializable.ts:13](https://github.com/avolutions/canvas-painter/blob/main/src/common/ISerializable.ts#L13)

***

### toJson()

> **toJson**(): `string`

Serializes the object’s properties into a JSON string.

#### Returns

`string`

A JSON string representation of the object.

#### Inherited from

[`ISerializable`](ISerializable.md).[`toJson`](ISerializable.md#tojson)

#### Defined in

[common/ISerializable.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/common/ISerializable.ts#L20)
