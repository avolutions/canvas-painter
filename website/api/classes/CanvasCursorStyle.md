Represents the cursor style configuration for a canvas, defining how the cursor appears in
different states such as default and pan (dragging) mode.

## Implements

- [`ICanvasCursorStyle`](../interfaces/ICanvasCursorStyle.md)

## Constructors

### new CanvasCursorStyle()

> **new CanvasCursorStyle**(`style`): [`CanvasCursorStyle`](CanvasCursorStyle.md)

Creates a new instance of CanvasCursorStyle.

#### Parameters

• **style**: `Partial`\<[`ICanvasCursorStyle`](../interfaces/ICanvasCursorStyle.md)\> = `{}`

The partial style provided by the user.

#### Returns

[`CanvasCursorStyle`](CanvasCursorStyle.md)

#### Defined in

[styles/CanvasCursorStyle.ts:32](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CanvasCursorStyle.ts#L32)

## Properties

### default

> **default**: [`Cursor`](../enumerations/Cursor.md)

Cursor style in the default state.

#### Implementation of

[`ICanvasCursorStyle`](../interfaces/ICanvasCursorStyle.md).[`default`](../interfaces/ICanvasCursorStyle.md#default)

#### Defined in

[styles/CanvasCursorStyle.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CanvasCursorStyle.ts#L12)

***

### panActive

> **panActive**: [`Cursor`](../enumerations/Cursor.md)

Cursor style when panning is active on the canvas.

#### Implementation of

[`ICanvasCursorStyle`](../interfaces/ICanvasCursorStyle.md).[`panActive`](../interfaces/ICanvasCursorStyle.md#panactive)

#### Defined in

[styles/CanvasCursorStyle.ts:17](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CanvasCursorStyle.ts#L17)

***

### DefaultStyle

> `readonly` `static` **DefaultStyle**: [`ICanvasCursorStyle`](../interfaces/ICanvasCursorStyle.md)

Default style for the canvas cursors.

#### Defined in

[styles/CanvasCursorStyle.ts:22](https://github.com/avolutions/canvas-painter/blob/main/src/styles/CanvasCursorStyle.ts#L22)
