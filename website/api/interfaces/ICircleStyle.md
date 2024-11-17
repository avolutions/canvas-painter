Represents the style options for a circle including the states.

## Extends

- [`ICircleBaseStyle`](ICircleBaseStyle.md).[`IShapeStyle`](IShapeStyle.md)

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

[`ICircleBaseStyle`](ICircleBaseStyle.md).[`borderColor`](ICircleBaseStyle.md#bordercolor)

#### Defined in

[styles/interfaces/ICircleBaseStyle.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/ICircleBaseStyle.ts#L10)

***

### borderWidth?

> `optional` **borderWidth**: `number`

The width of the border in pixels.

#### Inherited from

[`ICircleBaseStyle`](ICircleBaseStyle.md).[`borderWidth`](ICircleBaseStyle.md#borderwidth)

#### Defined in

[styles/interfaces/ICircleBaseStyle.ts:15](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/ICircleBaseStyle.ts#L15)

***

### color?

> `optional` **color**: `string`

The fill color of the circle.

#### Inherited from

[`ICircleBaseStyle`](ICircleBaseStyle.md).[`color`](ICircleBaseStyle.md#color)

#### Defined in

[styles/interfaces/ICircleBaseStyle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/ICircleBaseStyle.ts#L20)

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
