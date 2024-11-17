Represents the style options for a rectangle.

## Extends

- [`ShapeStyle`](ShapeStyle.md)\<[`IRectangleBaseStyle`](../interfaces/IRectangleBaseStyle.md)\>

## Implements

- [`IRectangleStyle`](../interfaces/IRectangleStyle.md)

## Constructors

### new RectangleStyle()

> **new RectangleStyle**(`style`): [`RectangleStyle`](RectangleStyle.md)

Creates a new instance of RectangleStyle.

#### Parameters

• **style**: `Partial`\<[`IRectangleStyle`](../interfaces/IRectangleStyle.md)\> = `{}`

The partial style provided by the user.

#### Returns

[`RectangleStyle`](RectangleStyle.md)

#### Overrides

[`ShapeStyle`](ShapeStyle.md).[`constructor`](ShapeStyle.md#constructors)

#### Defined in

[styles/RectangleStyle.ts:40](https://github.com/avolutions/canvas-painter/blob/main/src/styles/RectangleStyle.ts#L40)

## Properties

### active?

> `optional` **active**: [`IRectangleBaseStyle`](../interfaces/IRectangleBaseStyle.md)

Active style for the shape.

When the shape is in the active state, the properties defined in this style
override the default style properties.

#### Implementation of

[`IRectangleStyle`](../interfaces/IRectangleStyle.md).[`active`](../interfaces/IRectangleStyle.md#active)

#### Inherited from

[`ShapeStyle`](ShapeStyle.md).[`active`](ShapeStyle.md#active)

#### Defined in

[styles/ShapeStyle.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L28)

***

### borderColor

> **borderColor**: `string`

The color of the border.

#### Implementation of

[`IRectangleStyle`](../interfaces/IRectangleStyle.md).[`borderColor`](../interfaces/IRectangleStyle.md#bordercolor)

#### Defined in

[styles/RectangleStyle.ts:13](https://github.com/avolutions/canvas-painter/blob/main/src/styles/RectangleStyle.ts#L13)

***

### borderWidth

> **borderWidth**: `number`

The width of the border in pixels.

#### Implementation of

[`IRectangleStyle`](../interfaces/IRectangleStyle.md).[`borderWidth`](../interfaces/IRectangleStyle.md#borderwidth)

#### Defined in

[styles/RectangleStyle.ts:18](https://github.com/avolutions/canvas-painter/blob/main/src/styles/RectangleStyle.ts#L18)

***

### color

> **color**: `string`

The fill color of the rectangle.

#### Implementation of

[`IRectangleStyle`](../interfaces/IRectangleStyle.md).[`color`](../interfaces/IRectangleStyle.md#color)

#### Defined in

[styles/RectangleStyle.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/styles/RectangleStyle.ts#L23)

***

### cursor

> **cursor**: [`Cursor`](../enumerations/Cursor.md)

Specifies the cursor style for the shape.

#### Implementation of

[`IRectangleStyle`](../interfaces/IRectangleStyle.md).[`cursor`](../interfaces/IRectangleStyle.md#cursor)

#### Inherited from

[`ShapeStyle`](ShapeStyle.md).[`cursor`](ShapeStyle.md#cursor)

#### Defined in

[styles/ShapeStyle.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L12)

***

### hover?

> `optional` **hover**: [`IRectangleBaseStyle`](../interfaces/IRectangleBaseStyle.md)

Hover style for the shape.

When the shape is in the hover state, the properties defined in this style
override the default style properties.

#### Implementation of

[`IRectangleStyle`](../interfaces/IRectangleStyle.md).[`hover`](../interfaces/IRectangleStyle.md#hover)

#### Inherited from

[`ShapeStyle`](ShapeStyle.md).[`hover`](ShapeStyle.md#hover)

#### Defined in

[styles/ShapeStyle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L20)

***

### DefaultStyle

> `readonly` `static` **DefaultStyle**: [`IRectangleStyle`](../interfaces/IRectangleStyle.md)

Default style for the rectangle.

#### Defined in

[styles/RectangleStyle.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/styles/RectangleStyle.ts#L28)
