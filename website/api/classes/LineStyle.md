Represents the style options for a line.

## Extends

- [`ShapeStyle`](ShapeStyle.md)\<[`ILineBaseStyle`](../interfaces/ILineBaseStyle.md)\>

## Implements

- [`ILineStyle`](../interfaces/ILineStyle.md)

## Constructors

### new LineStyle()

> **new LineStyle**(`style`): [`LineStyle`](LineStyle.md)

Creates a new instance of LineStyle.

#### Parameters

• **style**: `Partial`\<[`ILineStyle`](../interfaces/ILineStyle.md)\> = `{}`

The partial style provided by the user.

#### Returns

[`LineStyle`](LineStyle.md)

#### Overrides

[`ShapeStyle`](ShapeStyle.md).[`constructor`](ShapeStyle.md#constructors)

#### Defined in

[styles/LineStyle.ts:34](https://github.com/avolutions/canvas-painter/blob/main/src/styles/LineStyle.ts#L34)

## Properties

### color

> **color**: `string`

The color of the line stroke.

#### Implementation of

[`ILineStyle`](../interfaces/ILineStyle.md).[`color`](../interfaces/ILineStyle.md#color)

#### Defined in

[styles/LineStyle.ts:13](https://github.com/avolutions/canvas-painter/blob/main/src/styles/LineStyle.ts#L13)

***

### cursor

> **cursor**: [`Cursor`](../enumerations/Cursor.md)

Specifies the cursor style for the shape.

#### Implementation of

[`ILineStyle`](../interfaces/ILineStyle.md).[`cursor`](../interfaces/ILineStyle.md#cursor)

#### Inherited from

[`ShapeStyle`](ShapeStyle.md).[`cursor`](ShapeStyle.md#cursor)

#### Defined in

[styles/ShapeStyle.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L12)

***

### hover?

> `optional` **hover**: [`ILineBaseStyle`](../interfaces/ILineBaseStyle.md)

Hover style for the shape.

When the shape is in the hover state, the properties defined in this style
override the default style properties.

#### Implementation of

[`ILineStyle`](../interfaces/ILineStyle.md).[`hover`](../interfaces/ILineStyle.md#hover)

#### Inherited from

[`ShapeStyle`](ShapeStyle.md).[`hover`](ShapeStyle.md#hover)

#### Defined in

[styles/ShapeStyle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/styles/ShapeStyle.ts#L20)

***

### width

> **width**: `number`

The width of the line stroke.

#### Implementation of

[`ILineStyle`](../interfaces/ILineStyle.md).[`width`](../interfaces/ILineStyle.md#width)

#### Defined in

[styles/LineStyle.ts:18](https://github.com/avolutions/canvas-painter/blob/main/src/styles/LineStyle.ts#L18)

***

### DefaultStyle

> `readonly` `static` **DefaultStyle**: [`ILineStyle`](../interfaces/ILineStyle.md)

Default style for the line.

#### Defined in

[styles/LineStyle.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/styles/LineStyle.ts#L23)
