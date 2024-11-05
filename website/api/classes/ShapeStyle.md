Represents the style for a shape, including optional state-specific styles.

## Extended by

- [`CircleStyle`](CircleStyle.md)
- [`LineStyle`](LineStyle.md)
- [`RectangleStyle`](RectangleStyle.md)

## Type Parameters

• **TStyle** *extends* [`IShapeBaseStyle`](../interfaces/IShapeBaseStyle.md)

## Implements

- [`IShapeStyle`](../interfaces/IShapeStyle.md)

## Constructors

### new ShapeStyle()

> **new ShapeStyle**\<`TStyle`\>(): [`ShapeStyle`](ShapeStyle.md)\<`TStyle`\>

#### Returns

[`ShapeStyle`](ShapeStyle.md)\<`TStyle`\>

## Properties

### cursor

> **cursor**: [`Cursor`](../enumerations/Cursor.md)

Specifies the cursor style for the shape.

#### Implementation of

[`IShapeStyle`](../interfaces/IShapeStyle.md).[`cursor`](../interfaces/IShapeStyle.md#cursor)

#### Defined in

[styles/ShapeStyle.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L12)

***

### hover?

> `optional` **hover**: `TStyle`

Hover style for the shape.

When the shape is in the hover state, the properties defined in this style
override the default style properties.

#### Implementation of

[`IShapeStyle`](../interfaces/IShapeStyle.md).[`hover`](../interfaces/IShapeStyle.md#hover)

#### Defined in

[styles/ShapeStyle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L20)
