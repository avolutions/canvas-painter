Class representing the style of a canvas.

## Implements

- [`ICanvasStyle`](../interfaces/ICanvasStyle.md)

## Constructors

### new CanvasStyle()

> **new CanvasStyle**(`style`): [`CanvasStyle`](CanvasStyle.md)

Creates a new instance of CanvasStyle.

#### Parameters

• **style**: `Partial`\<[`ICanvasStyle`](../interfaces/ICanvasStyle.md)\> = `{}`

The partial style provided by the user.

#### Returns

[`CanvasStyle`](CanvasStyle.md)

#### Defined in

[styles/CanvasStyle.ts:32](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CanvasStyle.ts#L32)

## Properties

### color

> **color**: `string`

Default color for canvas shapes.

#### Implementation of

[`ICanvasStyle`](../interfaces/ICanvasStyle.md).[`color`](../interfaces/ICanvasStyle.md#color)

#### Defined in

[styles/CanvasStyle.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CanvasStyle.ts#L12)

***

### cursor

> **cursor**: [`CanvasCursorStyle`](CanvasCursorStyle.md)

Cursor style configuration for different canvas interaction states.

#### Implementation of

[`ICanvasStyle`](../interfaces/ICanvasStyle.md).[`cursor`](../interfaces/ICanvasStyle.md#cursor)

#### Defined in

[styles/CanvasStyle.ts:17](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CanvasStyle.ts#L17)

***

### DefaultStyle

> `readonly` `static` **DefaultStyle**: [`ICanvasStyle`](../interfaces/ICanvasStyle.md)

Default style for the canvas.

#### Defined in

[styles/CanvasStyle.ts:22](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CanvasStyle.ts#L22)
