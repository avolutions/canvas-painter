Class representing a line definition.

## Extends

- [`ShapeDefinition`](ShapeDefinition.md)

## Constructors

### new LineDefinition()

> **new LineDefinition**(`start`, `end`): [`LineDefinition`](LineDefinition.md)

Creates an instance of LineDefinition.

#### Parameters

• **start**: [`Point`](Point.md)

The starting point of the line.

• **end**: [`Point`](Point.md)

The ending point of the line.

#### Returns

[`LineDefinition`](LineDefinition.md)

#### Overrides

[`ShapeDefinition`](ShapeDefinition.md).[`constructor`](ShapeDefinition.md#constructors)

#### Defined in

[definitions/LineDefinition.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/LineDefinition.ts#L20)

## Properties

### end

> **end**: [`Point`](Point.md)

The ending point of the line.

#### Defined in

[definitions/LineDefinition.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/LineDefinition.ts#L12)

***

### start

> **start**: [`Point`](Point.md)

The starting point of the line.

#### Defined in

[definitions/LineDefinition.ts:9](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/LineDefinition.ts#L9)

## Methods

### toArray()

> **toArray**(): `any`[]

Converts the object's properties to an array. If any of the properties
are objects that implement ISerializable, their `toArray` method is called.

#### Returns

`any`[]

An array representation of the object's properties.

#### Inherited from

[`ShapeDefinition`](ShapeDefinition.md).[`toArray`](ShapeDefinition.md#toarray)

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

#### Inherited from

[`ShapeDefinition`](ShapeDefinition.md).[`toJson`](ShapeDefinition.md#tojson)

#### Defined in

[common/Serializable.ts:32](https://github.com/avolutions/canvas-painter/blob/main/src/common/Serializable.ts#L32)
