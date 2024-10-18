Options for configuring the behavior of a canvas.

## Implements

- [`ICanvasOptions`](../interfaces/ICanvasOptions.md)

## Constructors

### new CanvasOptions()

> **new CanvasOptions**(`options`): [`CanvasOptions`](CanvasOptions.md)

Creates a new instance of CanvasOptions.

#### Parameters

• **options**: `Partial`\<[`ICanvasOptions`](../interfaces/ICanvasOptions.md)\> = `{}`

The partial options provided by the user.

#### Returns

[`CanvasOptions`](CanvasOptions.md)

#### Defined in

[options/CanvasOptions.ts:57](https://github.com/avolutions/canvas-painter/blob/main/src/options/CanvasOptions.ts#L57)

## Properties

### height

> **height**: `number`

The height of the canvas in pixels.

#### Implementation of

[`ICanvasOptions`](../interfaces/ICanvasOptions.md).[`height`](../interfaces/ICanvasOptions.md#height)

#### Defined in

[options/CanvasOptions.ts:18](https://github.com/avolutions/canvas-painter/blob/main/src/options/CanvasOptions.ts#L18)

***

### pan

> **pan**: [`IPanOptions`](../interfaces/IPanOptions.md)

The options for configuring the pan behavior of the canvas.

#### Implementation of

[`ICanvasOptions`](../interfaces/ICanvasOptions.md).[`pan`](../interfaces/ICanvasOptions.md#pan)

#### Defined in

[options/CanvasOptions.ts:38](https://github.com/avolutions/canvas-painter/blob/main/src/options/CanvasOptions.ts#L38)

***

### pannable

> **pannable**: `boolean`

Whether panning is enabled on the canvas.

#### Implementation of

[`ICanvasOptions`](../interfaces/ICanvasOptions.md).[`pannable`](../interfaces/ICanvasOptions.md#pannable)

#### Defined in

[options/CanvasOptions.ts:33](https://github.com/avolutions/canvas-painter/blob/main/src/options/CanvasOptions.ts#L33)

***

### width

> **width**: `number`

The width of the canvas in pixels.

#### Implementation of

[`ICanvasOptions`](../interfaces/ICanvasOptions.md).[`width`](../interfaces/ICanvasOptions.md#width)

#### Defined in

[options/CanvasOptions.ts:13](https://github.com/avolutions/canvas-painter/blob/main/src/options/CanvasOptions.ts#L13)

***

### zoom

> **zoom**: [`ZoomOptions`](ZoomOptions.md)

The options for configuring the zoom behavior of the canvas.

#### Implementation of

[`ICanvasOptions`](../interfaces/ICanvasOptions.md).[`zoom`](../interfaces/ICanvasOptions.md#zoom)

#### Defined in

[options/CanvasOptions.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/options/CanvasOptions.ts#L28)

***

### zoomable

> **zoomable**: `boolean`

Whether zooming is enabled on the canvas.

#### Implementation of

[`ICanvasOptions`](../interfaces/ICanvasOptions.md).[`zoomable`](../interfaces/ICanvasOptions.md#zoomable)

#### Defined in

[options/CanvasOptions.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/options/CanvasOptions.ts#L23)

***

### DefaultOptions

> `readonly` `static` **DefaultOptions**: [`ICanvasOptions`](../interfaces/ICanvasOptions.md)

Default canvas options.

#### Defined in

[options/CanvasOptions.ts:43](https://github.com/avolutions/canvas-painter/blob/main/src/options/CanvasOptions.ts#L43)
