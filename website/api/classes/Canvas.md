Class representing a Canvas element that can manage and render shapes.

## Accessors

### context

> `get` **context**(): `CanvasRenderingContext2D`

Gets the 2D rendering context of the canvas.

#### Returns

`CanvasRenderingContext2D`

The 2D context of the canvas.

#### Defined in

[Canvas.ts:122](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/Canvas.ts#L122)

## Methods

### watch()

> **watch**(`shape`): `void`

Registers a shape to be watched for changes and renders it.

#### Parameters

• **shape**: [`IShape`](../interfaces/IShape.md)

The shape to watch and render on the canvas.

#### Returns

`void`

#### Defined in

[Canvas.ts:106](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/Canvas.ts#L106)

***

### init()

> `static` **init**(`id`, `options`?): [`Canvas`](Canvas.md)

Initializes a Canvas instance by retrieving the canvas element by ID and its context.

#### Parameters

• **id**: `string`

The ID of the HTML canvas element.

• **options?**: [`CanvasOptions`](../interfaces/CanvasOptions.md)

Optional configuration options for the canvas.

#### Returns

[`Canvas`](Canvas.md)

A new Canvas instance.

#### Throws

If the canvas element is not found or is not a valid canvas.

#### Defined in

[Canvas.ts:77](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/Canvas.ts#L77)
