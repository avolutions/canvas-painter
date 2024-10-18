Options for configuring the zoom behavior of a canvas.

## Implements

- [`IZoomOptions`](../interfaces/IZoomOptions.md)

## Constructors

### new ZoomOptions()

> **new ZoomOptions**(`options`): [`ZoomOptions`](ZoomOptions.md)

Creates a new instance of ZoomOptions.

#### Parameters

• **options**: `Partial`\<[`IZoomOptions`](../interfaces/IZoomOptions.md)\> = `{}`

The partial options provided by the user.

#### Returns

[`ZoomOptions`](ZoomOptions.md)

#### Defined in

[options/ZoomOptions.ts:30](https://github.com/avolutions/canvas-painter/blob/main/src/options/ZoomOptions.ts#L30)

## Properties

### step

> **step**: `number`

The step value for zoom increments.

#### Implementation of

[`IZoomOptions`](../interfaces/IZoomOptions.md).[`step`](../interfaces/IZoomOptions.md#step)

#### Defined in

[options/ZoomOptions.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/options/ZoomOptions.ts#L10)

***

### useWheel

> **useWheel**: `boolean`

Whether zooming with the mouse wheel is enabled.

#### Implementation of

[`IZoomOptions`](../interfaces/IZoomOptions.md).[`useWheel`](../interfaces/IZoomOptions.md#usewheel)

#### Defined in

[options/ZoomOptions.ts:15](https://github.com/avolutions/canvas-painter/blob/main/src/options/ZoomOptions.ts#L15)

***

### DefaultOptions

> `readonly` `static` **DefaultOptions**: [`IZoomOptions`](../interfaces/IZoomOptions.md)

Default zoom options.

#### Defined in

[options/ZoomOptions.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/options/ZoomOptions.ts#L20)
