Class representing a Canvas element that can manage and render shapes.

## Accessors

### context

> `get` **context**(): `CanvasRenderingContext2D`

Gets the 2D rendering context of the canvas.

#### Returns

`CanvasRenderingContext2D`

The 2D context of the canvas.

#### Defined in

[Canvas.ts:253](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L253)

## Methods

### clear()

> **clear**(): `void`

Clears the canvas by removing all content.

#### Returns

`void`

#### Defined in

[Canvas.ts:260](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L260)

***

### draw()

> **draw**(`shape`): `void`

Renders the specified shape on the canvas.

#### Parameters

• **shape**: [`IShape`](../interfaces/IShape.md)

The shape to render.

#### Returns

`void`

#### Defined in

[Canvas.ts:288](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L288)

***

### redraw()

> **redraw**(): `void`

Clears the canvas and re-renders all watched shapes.

#### Returns

`void`

#### Defined in

[Canvas.ts:276](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L276)

***

### unwatch()

> **unwatch**(`shapeOrShapes`, `redraw`): `void`

Unregisters a shape or an array of shapes from being watched and re-renders the canvas.

#### Parameters

• **shapeOrShapes**: [`IShape`](../interfaces/IShape.md) \| [`IShape`](../interfaces/IShape.md)[]

The shape(s) to stop watching.

• **redraw**: `boolean` = `true`

Whether to immediately redraw the canvas after unregistering the shape(s).

#### Returns

`void`

#### Defined in

[Canvas.ts:222](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L222)

***

### watch()

> **watch**(`shapeOrShapes`, `redraw`): `void`

Registers a shape or an array of shapes to be watched for changes and renders them.

#### Parameters

• **shapeOrShapes**: [`IShape`](../interfaces/IShape.md) \| [`IShape`](../interfaces/IShape.md)[]

The shape(s) to watch and render on the canvas.

• **redraw**: `boolean` = `true`

Whether to immediately redraw the canvas after registering the shape(s).

#### Returns

`void`

#### Defined in

[Canvas.ts:191](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L191)

***

### init()

> `static` **init**(`id`, `options`?, `style`?): [`Canvas`](Canvas.md)

Initializes a Canvas instance by retrieving the canvas element by ID and its context.

#### Parameters

• **id**: `string`

The ID of the HTML canvas element.

• **options?**: [`CanvasOptions`](CanvasOptions.md)

Optional configuration options for the canvas.

• **style?**: [`CanvasStyle`](CanvasStyle.md)

Optional styling options for the canvas.

#### Returns

[`Canvas`](Canvas.md)

A new Canvas instance.

#### Throws

If the canvas element is not found or is not a valid canvas.

#### Defined in

[Canvas.ts:155](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L155)
