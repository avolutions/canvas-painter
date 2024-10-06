Interface that defines the structure for serializable objects.
Classes implementing this interface should provide functionality
to serialize their properties into an array and a JSON string.

## Methods

### toArray()

> **toArray**(): `any`[]

Serializes the object’s properties into an array.

#### Returns

`any`[]

An array representation of the object's properties.

#### Defined in

[common/ISerializable.ts:13](https://github.com/avolutions/canvas-painter/blob/main/src/common/ISerializable.ts#L13)

***

### toJson()

> **toJson**(): `string`

Serializes the object’s properties into a JSON string.

#### Returns

`string`

A JSON string representation of the object.

#### Defined in

[common/ISerializable.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/common/ISerializable.ts#L20)
