Class representing a Canvas element that can manage and render shapes.

## Accessors

### context

> `get` **context**(): `CanvasRenderingContext2D`

Gets the 2D rendering context of the canvas.

#### Returns

`CanvasRenderingContext2D`

The 2D context of the canvas.

#### Defined in

[Canvas.ts:392](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L392)

***

### panOffset

> `get` **panOffset**(): [`Point`](Point.md)

Gets the current pan offset of the canvas.

> `set` **panOffset**(`value`): `void`

Sets the pan offset of the canvas and triggers a redraw.

#### Parameters

• **value**: [`Point`](Point.md)

The new pan offset to set.

#### Returns

[`Point`](Point.md)

The current pan offset as a `Point` object.

#### Defined in

[Canvas.ts:581](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L581)

***

### zoomScale

> `get` **zoomScale**(): `number`

Gets the current zoom scale of the canvas.
A value of `1` represents 100% zoom. Values below `1` indicate zooming out,
and values above `1` indicate zooming in.

> `set` **zoomScale**(`value`): `void`

Sets the zoom scale of the canvas and applies the zoom.

#### Parameters

• **value**: `number`

The new zoom scale to set.

#### Returns

`number`

The current zoom scale.

#### Defined in

[Canvas.ts:557](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L557)

## Methods

### clear()

> **clear**(): `void`

Clears the canvas by removing all content.

#### Returns

`void`

#### Defined in

[Canvas.ts:399](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L399)

***

### draw()

> **draw**(`shape`): `void`

Renders the specified shape on the canvas if shape is visible.

#### Parameters

• **shape**: [`IShape`](../interfaces/IShape.md)

The shape to render.

#### Returns

`void`

#### Defined in

[Canvas.ts:431](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L431)

***

### getCenter()

> **getCenter**(): [`Point`](Point.md)

Returns the center point of the canvas based on its width and height.

#### Returns

[`Point`](Point.md)

The center point of the canvas as a `Point` object.

#### Defined in

[Canvas.ts:255](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L255)

***

### redraw()

> **redraw**(): `void`

Clears the canvas and re-renders all watched and visible shapes.

#### Returns

`void`

#### Defined in

[Canvas.ts:413](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L413)

***

### resetPan()

> **resetPan**(): `void`

Resets the pan offset to its default value (0, 0).

#### Returns

`void`

#### Defined in

[Canvas.ts:528](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L528)

***

### resetZoom()

> **resetZoom**(): `void`

Resets the zoom scale to its default value (1).
If the canvas is both zoomable and pannable, it resets both zoom and pan.

#### Returns

`void`

#### Defined in

[Canvas.ts:511](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L511)

***

### resetZoomPan()

> **resetZoomPan**(): `void`

Resets both the zoom scale and pan offset to their default values (1 for zoom scale and (0, 0) for pan).

#### Returns

`void`

#### Defined in

[Canvas.ts:540](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L540)

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

[Canvas.ts:361](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L361)

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

[Canvas.ts:330](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L330)

***

### zoomIn()

> **zoomIn**(`position`?): `void`

Zooms in on the canvas by increasing the zoom scale.
If a position is provided, the zoom will be centered around that point.
Otherwise, it defaults to zooming in on the center of the canvas.

#### Parameters

• **position?**: [`Point`](Point.md)

Optional position to center the zoom on.

#### Returns

`void`

#### Defined in

[Canvas.ts:444](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L444)

***

### zoomOut()

> **zoomOut**(`position`?): `void`

Zooms out on the canvas by decreasing the zoom scale.
If a position is provided, the zoom will be centered around that point.
Otherwise, it defaults to zooming out from the center of the canvas.

#### Parameters

• **position?**: [`Point`](Point.md)

Optional position to center the zoom on.

#### Returns

`void`

#### Defined in

[Canvas.ts:460](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L460)

***

### init()

> `static` **init**(`id`, `options`?, `style`?): [`Canvas`](Canvas.md)

Initializes a Canvas instance by retrieving the canvas element by ID and its context.

#### Parameters

• **id**: `string`

The ID of the HTML canvas element.

• **options?**: [`ICanvasOptions`](../interfaces/ICanvasOptions.md)

Optional configuration options for the canvas.

• **style?**: [`ICanvasStyle`](../interfaces/ICanvasStyle.md)

Optional styling options for the canvas.

#### Returns

[`Canvas`](Canvas.md)

A new Canvas instance.

#### Throws

ReferenceError if the canvas element is not found.

#### Throws

TypeError if the element is not a valid canvas or can't get 2d context.

#### Defined in

[Canvas.ts:293](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L293)
