An abstract class that extends Serializable and implements the IShapeDefinition interface.
This class provides a base definition for shapes that can be serialized into
an array or JSON string.

## Extends

- [`Serializable`](Serializable.md)

## Extended by

- [`CircleDefinition`](CircleDefinition.md)
- [`LineDefinition`](LineDefinition.md)
- [`RectangleDefinition`](RectangleDefinition.md)

## Implements

- [`IShapeDefinition`](../interfaces/IShapeDefinition.md)

## Constructors

### new ShapeDefinition()

> **new ShapeDefinition**(): [`ShapeDefinition`](ShapeDefinition.md)

#### Returns

[`ShapeDefinition`](ShapeDefinition.md)

#### Inherited from

[`Serializable`](Serializable.md).[`constructor`](Serializable.md#constructors)

## Methods

### toArray()

> **toArray**(): `any`[]

Converts the object's properties to an array. If any of the properties
are objects that implement ISerializable, their `toArray` method is called.

#### Returns

`any`[]

An array representation of the object's properties.

#### Implementation of

[`IShapeDefinition`](../interfaces/IShapeDefinition.md).[`toArray`](../interfaces/IShapeDefinition.md#toarray)

#### Inherited from

[`Serializable`](Serializable.md).[`toArray`](Serializable.md#toarray)

#### Defined in

[common/Serializable.ts:16](https://github.com/avolutions/canvas-painter/blob/main/src/common/Serializable.ts#L16)

***

### toJson()

> **toJson**(): `string`

Converts the object to a JSON string. If any of the properties
are objects that implement ISerializable, their `toJson` method is called.
Underscores e.g. of private members are trimmed when setting the serialized name.

#### Returns

`string`

A JSON string representation of the object.

#### Implementation of

[`IShapeDefinition`](../interfaces/IShapeDefinition.md).[`toJson`](../interfaces/IShapeDefinition.md#tojson)

#### Inherited from

[`Serializable`](Serializable.md).[`toJson`](Serializable.md#tojson)

#### Defined in

[common/Serializable.ts:32](https://github.com/avolutions/canvas-painter/blob/main/src/common/Serializable.ts#L32)
