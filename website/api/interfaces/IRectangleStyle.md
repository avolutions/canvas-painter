Represents the style options for a rectangle including the states.

## Extends

- [`IRectangleBaseStyle`](IRectangleBaseStyle.md).[`IShapeStyle`](IShapeStyle.md)

## Properties

### active?

> `optional` **active**: [`IShapeBaseStyle`](IShapeBaseStyle.md)

Active style for the shape.

When the shape is in the active state, the properties defined in this style
override the default style properties.

#### Inherited from

[`IShapeStyle`](IShapeStyle.md).[`active`](IShapeStyle.md#active)

#### Defined in

[styles/interfaces/IShapeStyle.ts:27](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/IShapeStyle.ts#L27)

***

### borderColor?

> `optional` **borderColor**: `string`

The color of the border.

#### Inherited from

[`IRectangleBaseStyle`](IRectangleBaseStyle.md).[`borderColor`](IRectangleBaseStyle.md#bordercolor)

#### Defined in

[styles/interfaces/IRectangleBaseStyle.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/IRectangleBaseStyle.ts#L10)

***

### borderWidth?

> `optional` **borderWidth**: `number`

The width of the border in pixels.

#### Inherited from

[`IRectangleBaseStyle`](IRectangleBaseStyle.md).[`borderWidth`](IRectangleBaseStyle.md#borderwidth)

#### Defined in

[styles/interfaces/IRectangleBaseStyle.ts:15](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/IRectangleBaseStyle.ts#L15)

***

### color?

> `optional` **color**: `string`

The fill color of the rectangle.

#### Inherited from

[`IRectangleBaseStyle`](IRectangleBaseStyle.md).[`color`](IRectangleBaseStyle.md#color)

#### Defined in

[styles/interfaces/IRectangleBaseStyle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/IRectangleBaseStyle.ts#L20)

***

### cursor?

> `optional` **cursor**: [`Cursor`](../enumerations/Cursor.md)

Specifies the cursor style for the shape.

#### Inherited from

[`IShapeStyle`](IShapeStyle.md).[`cursor`](IShapeStyle.md#cursor)

#### Defined in

[styles/interfaces/IShapeStyle.ts:11](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/IShapeStyle.ts#L11)

***

### hover?

> `optional` **hover**: [`IShapeBaseStyle`](IShapeBaseStyle.md)

Hover style for the shape.

When the shape is in the hover state, the properties defined in this style
override the default style properties.

#### Inherited from

[`IShapeStyle`](IShapeStyle.md).[`hover`](IShapeStyle.md#hover)

#### Defined in

[styles/interfaces/IShapeStyle.ts:19](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/IShapeStyle.ts#L19)
