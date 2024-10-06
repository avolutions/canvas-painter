Class representing a Rectangle definition.

## Extends

- [`ShapeDefinition`](ShapeDefinition.md)

## Constructors

### new RectangleDefinition()

> **new RectangleDefinition**(`position`, `width`, `height`, `angle`): [`RectangleDefinition`](RectangleDefinition.md)

Creates a new instance of RectangleDefinition.

#### Parameters

• **position**: [`Point`](Point.md)

The position of the rectangle (top-left or center).

• **width**: `number`

The width of the rectangle.

• **height**: `number`

The height of the rectangle.

• **angle**: [`Angle`](Angle.md)

The angle of the rectangle in degrees.

#### Returns

[`RectangleDefinition`](RectangleDefinition.md)

#### Overrides

[`ShapeDefinition`](ShapeDefinition.md).[`constructor`](ShapeDefinition.md#constructors)

#### Defined in

[definitions/RectangleDefinition.ts:29](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/RectangleDefinition.ts#L29)

## Properties

### angle

> **angle**: [`Angle`](Angle.md)

The angle of the rectangle.

#### Defined in

[definitions/RectangleDefinition.ts:19](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/RectangleDefinition.ts#L19)

***

### height

> **height**: `number`

The height of the rectangle.

#### Defined in

[definitions/RectangleDefinition.ts:16](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/RectangleDefinition.ts#L16)

***

### position

> **position**: [`Point`](Point.md)

The position of the rectangle.

#### Defined in

[definitions/RectangleDefinition.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/RectangleDefinition.ts#L10)

***

### width

> **width**: `number`

The width of the rectangle.

#### Defined in

[definitions/RectangleDefinition.ts:13](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/RectangleDefinition.ts#L13)

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
