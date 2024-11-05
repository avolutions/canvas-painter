Class representing a 2D point with x and y coordinates.

## Extends

- [`Serializable`](Serializable.md)

## Constructors

### new Point()

> **new Point**(`x`, `y`): [`Point`](Point.md)

Creates an instance of Point.

#### Parameters

• **x**: `number`

The x-coordinate of the point.

• **y**: `number`

The y-coordinate of the point.

#### Returns

[`Point`](Point.md)

#### Overrides

[`Serializable`](Serializable.md).[`constructor`](Serializable.md#constructors)

#### Defined in

[types/Point.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/types/Point.ts#L23)

## Properties

### x

> **x**: `number`

The x-coordinate of the point.

#### Defined in

[types/Point.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/types/Point.ts#L10)

***

### y

> **y**: `number`

The y-coordinate of the point.

#### Defined in

[types/Point.ts:15](https://github.com/avolutions/canvas-painter/blob/main/src/types/Point.ts#L15)

## Methods

### asUntransformed()

> **asUntransformed**(`offset`, `zoom`): `this`

Adjusts the point's coordinates to remove the effects of a specified pan offset and zoom level.

#### Parameters

• **offset**: [`Point`](Point.md)

The pan offset to remove from the current point's coordinates.

• **zoom**: `number`

The zoom level to reverse from the current point's coordinates.

#### Returns

`this`

The current point with out transformation.

#### Defined in

[types/Point.ts:67](https://github.com/avolutions/canvas-painter/blob/main/src/types/Point.ts#L67)

***

### move()

> **move**(`deltaX`, `deltaY`): `void`

Moves the point by a specified delta along the x and y axes.

#### Parameters

• **deltaX**: `number` = `0`

The amount to move the point along the x-axis (default is 0).

• **deltaY**: `number` = `0`

The amount to move the point along the y-axis (default is 0).

#### Returns

`void`

#### Defined in

[types/Point.ts:54](https://github.com/avolutions/canvas-painter/blob/main/src/types/Point.ts#L54)

***

### moveX()

> **moveX**(`delta`): `void`

Moves the point along the x-axis by a specified delta.

#### Parameters

• **delta**: `number`

The amount to move the point along the x-axis.

#### Returns

`void`

#### Defined in

[types/Point.ts:35](https://github.com/avolutions/canvas-painter/blob/main/src/types/Point.ts#L35)

***

### moveY()

> **moveY**(`delta`): `void`

Moves the point along the y-axis by a specified delta.

#### Parameters

• **delta**: `number`

The amount to move the point along the y-axis.

#### Returns

`void`

#### Defined in

[types/Point.ts:44](https://github.com/avolutions/canvas-painter/blob/main/src/types/Point.ts#L44)

***

### toArray()

> **toArray**(): `any`[]

Converts the object's properties to an array. If any of the properties
are objects that implement ISerializable, their `toArray` method is called.

#### Returns

`any`[]

An array representation of the object's properties.

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

#### Inherited from

[`Serializable`](Serializable.md).[`toJson`](Serializable.md#tojson)

#### Defined in

[common/Serializable.ts:32](https://github.com/avolutions/canvas-painter/blob/main/src/common/Serializable.ts#L32)
