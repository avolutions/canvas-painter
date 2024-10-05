Class representing a 2D point with x and y coordinates.

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

#### Defined in

[types/Point.ts:21](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/types/Point.ts#L21)

## Properties

### x

> **x**: `number`

The x-coordinate of the point.

#### Defined in

[types/Point.ts:8](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/types/Point.ts#L8)

***

### y

> **y**: `number`

The y-coordinate of the point.

#### Defined in

[types/Point.ts:13](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/types/Point.ts#L13)

## Methods

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

[types/Point.ts:50](https://github.com/avolutions/canvas-painter/blob/984649316f6083bd9b5b3a43b32a65b9a8e0353e/src/types/Point.ts#L50)

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

[types/Point.ts:31](https://github.com/avolutions/canvas-painter/blob/984649316f6083bd9b5b3a43b32a65b9a8e0353e/src/types/Point.ts#L31)

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

[types/Point.ts:40](https://github.com/avolutions/canvas-painter/blob/984649316f6083bd9b5b3a43b32a65b9a8e0353e/src/types/Point.ts#L40)
