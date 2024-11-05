Represents the style options for a line including the states.

## Extends

- [`ILineBaseStyle`](ILineBaseStyle.md).[`IShapeStyle`](IShapeStyle.md)

## Properties

### color?

> `optional` **color**: `string`

The color of the line stroke.

#### Inherited from

[`ILineBaseStyle`](ILineBaseStyle.md).[`color`](ILineBaseStyle.md#color)

#### Defined in

[styles/interfaces/ILineBaseStyle.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/ILineBaseStyle.ts#L10)

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

***

### width?

> `optional` **width**: `number`

The width of the line stroke.

#### Inherited from

[`ILineBaseStyle`](ILineBaseStyle.md).[`width`](ILineBaseStyle.md#width)

#### Defined in

[styles/interfaces/ILineBaseStyle.ts:15](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/ILineBaseStyle.ts#L15)
