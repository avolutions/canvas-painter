A base class that implements ISerializable, providing functionality to serialize
an object's properties to an array or a JSON string, including nested objects
that implement the ISerializable interface.

## Extended by

- [`Point`](Point.md)

## Implements

- [`ISerializable`](../interfaces/ISerializable.md)

## Constructors

### new Serializable()

> **new Serializable**(): [`Serializable`](Serializable.md)

#### Returns

[`Serializable`](Serializable.md)

## Methods

### toArray()

> **toArray**(): `any`[]

Converts the object's properties to an array. If any of the properties
are objects that implement ISerializable, their `toArray` method is called.

#### Returns

`any`[]

An array representation of the object's properties.

#### Implementation of

[`ISerializable`](../interfaces/ISerializable.md).[`toArray`](../interfaces/ISerializable.md#toarray)

#### Defined in

[common/Serializable.ts:16](https://github.com/avolutions/canvas-painter/blob/main/src/common/Serializable.ts#L16)

***

### toJson()

> **toJson**(): `string`

Converts the object to a JSON string. If any of the properties
are objects that implement ISerializable, their `toJson` method is called.

#### Returns

`string`

A JSON string representation of the object.

#### Implementation of

[`ISerializable`](../interfaces/ISerializable.md).[`toJson`](../interfaces/ISerializable.md#tojson)

#### Defined in

[common/Serializable.ts:31](https://github.com/avolutions/canvas-painter/blob/main/src/common/Serializable.ts#L31)
