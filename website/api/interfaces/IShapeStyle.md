Interface representing the style properties for a shape.

## Extended by

- [`ICircleStyle`](ICircleStyle.md)
- [`ILineStyle`](ILineStyle.md)
- [`IRectangleStyle`](IRectangleStyle.md)

## Properties

### cursor?

> `optional` **cursor**: [`Cursor`](../enumerations/Cursor.md)

Specifies the cursor style for the shape.

#### Defined in

[styles/interfaces/IShapeStyle.ts:11](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/IShapeStyle.ts#L11)

***

### hover?

> `optional` **hover**: [`IShapeBaseStyle`](IShapeBaseStyle.md)

Hover style for the shape.

When the shape is in the hover state, the properties defined in this style
override the default style properties.

#### Defined in

[styles/interfaces/IShapeStyle.ts:19](https://github.com/avolutions/canvas-painter/blob/main/src/styles/interfaces/IShapeStyle.ts#L19)
