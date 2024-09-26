Class representing a Canvas element that can manage and render shapes.

## Accessors

### context

> `get` **context**(): `CanvasRenderingContext2D`

Gets the 2D rendering context of the canvas.

#### Returns

`CanvasRenderingContext2D`

The 2D context of the canvas.

#### Defined in

[Canvas.ts:178](https://github.com/avolutions/canvas-painter/blob/082fa322f0a26565340ac3eb4f104d110cca3cf1/src/Canvas.ts#L178)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[Canvas.ts:182](https://github.com/avolutions/canvas-painter/blob/082fa322f0a26565340ac3eb4f104d110cca3cf1/src/Canvas.ts#L182)

***

### unwatch()

#### unwatch(shape, redraw)

> **unwatch**(`shape`, `redraw`?): `void`

##### Parameters

• **shape**: [`IShape`](../interfaces/IShape.md)

• **redraw?**: `boolean`

##### Returns

`void`

##### Defined in

[Canvas.ts:144](https://github.com/avolutions/canvas-painter/blob/082fa322f0a26565340ac3eb4f104d110cca3cf1/src/Canvas.ts#L144)

#### unwatch(shapes, redraw)

> **unwatch**(`shapes`, `redraw`?): `void`

##### Parameters

• **shapes**: [`IShape`](../interfaces/IShape.md)[]

• **redraw?**: `boolean`

##### Returns

`void`

##### Defined in

[Canvas.ts:145](https://github.com/avolutions/canvas-painter/blob/082fa322f0a26565340ac3eb4f104d110cca3cf1/src/Canvas.ts#L145)

***

### watch()

Registers a shape to be watched for changes and renders it.

#### Param

The shape to watch and render on the canvas.

#### watch(shape, redraw)

> **watch**(`shape`, `redraw`?): `void`

Registers a shape to be watched for changes and renders it.

##### Parameters

• **shape**: [`IShape`](../interfaces/IShape.md)

• **redraw?**: `boolean`

##### Returns

`void`

##### Param

The shape to watch and render on the canvas.

##### Defined in

[Canvas.ts:111](https://github.com/avolutions/canvas-painter/blob/082fa322f0a26565340ac3eb4f104d110cca3cf1/src/Canvas.ts#L111)

#### watch(shapes, redraw)

> **watch**(`shapes`, `redraw`?): `void`

Registers a shape to be watched for changes and renders it.

##### Parameters

• **shapes**: [`IShape`](../interfaces/IShape.md)[]

• **redraw?**: `boolean`

##### Returns

`void`

##### Param

The shape to watch and render on the canvas.

##### Defined in

[Canvas.ts:112](https://github.com/avolutions/canvas-painter/blob/082fa322f0a26565340ac3eb4f104d110cca3cf1/src/Canvas.ts#L112)

***

### init()

> `static` **init**(`id`, `options`?, `style`?): [`Canvas`](Canvas.md)

Initializes a Canvas instance by retrieving the canvas element by ID and its context.

#### Parameters

• **id**: `string`

The ID of the HTML canvas element.

• **options?**: [`CanvasOptions`](../interfaces/CanvasOptions.md)

Optional configuration options for the canvas.

• **style?**: `CanvasStyle`

#### Returns

[`Canvas`](Canvas.md)

A new Canvas instance.

#### Throws

If the canvas element is not found or is not a valid canvas.

#### Defined in

[Canvas.ts:79](https://github.com/avolutions/canvas-painter/blob/082fa322f0a26565340ac3eb4f104d110cca3cf1/src/Canvas.ts#L79)
