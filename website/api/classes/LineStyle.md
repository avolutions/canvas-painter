Represents the style options for a line.

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

#### Defined in

[styles/LineStyle.ts:30](https://github.com/avolutions/canvas-painter/blob/main/src/styles/LineStyle.ts#L30)

## Properties

### color

> **color**: `string`

The color of the line stroke.

#### Implementation of

[`ILineStyle`](../interfaces/ILineStyle.md).[`color`](../interfaces/ILineStyle.md#color)

#### Defined in

[styles/LineStyle.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/styles/LineStyle.ts#L10)

***

### width

> **width**: `number`

The width of the line stroke.

#### Implementation of

[`ILineStyle`](../interfaces/ILineStyle.md).[`width`](../interfaces/ILineStyle.md#width)

#### Defined in

[styles/LineStyle.ts:15](https://github.com/avolutions/canvas-painter/blob/main/src/styles/LineStyle.ts#L15)

***

### DefaultStyle

> `readonly` `static` **DefaultStyle**: [`ILineStyle`](../interfaces/ILineStyle.md)

Default style for the line.

#### Defined in

[styles/LineStyle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/styles/LineStyle.ts#L20)
