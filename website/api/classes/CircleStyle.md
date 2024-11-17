Represents the style options for a circle.

## Extends

- [`ShapeStyle`](ShapeStyle.md)\<[`ICircleBaseStyle`](../interfaces/ICircleBaseStyle.md)\>

## Implements

- [`ICircleStyle`](../interfaces/ICircleStyle.md)

## Constructors

### new CircleStyle()

> **new CircleStyle**(`style`): [`CircleStyle`](CircleStyle.md)

Creates a new instance of CircleStyle.

#### Parameters

• **style**: `Partial`\<[`ICircleStyle`](../interfaces/ICircleStyle.md)\> = `{}`

The partial style provided by the user.

#### Returns

[`CircleStyle`](CircleStyle.md)

#### Overrides

[`ShapeStyle`](ShapeStyle.md).[`constructor`](ShapeStyle.md#constructors)

#### Defined in

[styles/CircleStyle.ts:40](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CircleStyle.ts#L40)

## Properties

### active?

> `optional` **active**: [`ICircleBaseStyle`](../interfaces/ICircleBaseStyle.md)

Active style for the shape.

When the shape is in the active state, the properties defined in this style
override the default style properties.

#### Implementation of

[`ICircleStyle`](../interfaces/ICircleStyle.md).[`active`](../interfaces/ICircleStyle.md#active)

#### Inherited from

[`ShapeStyle`](ShapeStyle.md).[`active`](ShapeStyle.md#active)

#### Defined in

[styles/ShapeStyle.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L28)

***

### borderColor

> **borderColor**: `string`

The color of the border.

#### Implementation of

[`ICircleStyle`](../interfaces/ICircleStyle.md).[`borderColor`](../interfaces/ICircleStyle.md#bordercolor)

#### Defined in

[styles/CircleStyle.ts:13](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CircleStyle.ts#L13)

***

### borderWidth

> **borderWidth**: `number`

The width of the border in pixels.

#### Implementation of

[`ICircleStyle`](../interfaces/ICircleStyle.md).[`borderWidth`](../interfaces/ICircleStyle.md#borderwidth)

#### Defined in

[styles/CircleStyle.ts:18](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CircleStyle.ts#L18)

***

### color

> **color**: `string`

The fill color of the circle.

#### Implementation of

[`ICircleStyle`](../interfaces/ICircleStyle.md).[`color`](../interfaces/ICircleStyle.md#color)

#### Defined in

[styles/CircleStyle.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CircleStyle.ts#L23)

***

### cursor

> **cursor**: [`Cursor`](../enumerations/Cursor.md)

Specifies the cursor style for the shape.

#### Implementation of

[`ICircleStyle`](../interfaces/ICircleStyle.md).[`cursor`](../interfaces/ICircleStyle.md#cursor)

#### Inherited from

[`ShapeStyle`](ShapeStyle.md).[`cursor`](ShapeStyle.md#cursor)

#### Defined in

[styles/ShapeStyle.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L12)

***

### hover?

> `optional` **hover**: [`ICircleBaseStyle`](../interfaces/ICircleBaseStyle.md)

Hover style for the shape.

When the shape is in the hover state, the properties defined in this style
override the default style properties.

#### Implementation of

[`ICircleStyle`](../interfaces/ICircleStyle.md).[`hover`](../interfaces/ICircleStyle.md#hover)

#### Inherited from

[`ShapeStyle`](ShapeStyle.md).[`hover`](ShapeStyle.md#hover)

#### Defined in

[styles/ShapeStyle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L20)

***

### DefaultStyle

> `readonly` `static` **DefaultStyle**: [`ICircleStyle`](../interfaces/ICircleStyle.md)

Default style for the circle.

#### Defined in

[styles/CircleStyle.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CircleStyle.ts#L28)
