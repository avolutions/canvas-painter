Class representing a Canvas element that can manage and render shapes.

## Accessors

### context

> `get` **context**(): `CanvasRenderingContext2D`

Gets the 2D rendering context of the canvas.

#### Returns

`CanvasRenderingContext2D`

The 2D context of the canvas.

#### Defined in

[Canvas.ts:376](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L376)

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

[Canvas.ts:565](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L565)

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

[Canvas.ts:541](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L541)

## Methods

### clear()

> **clear**(): `void`

Clears the canvas by removing all content.

#### Returns

`void`

#### Defined in

[Canvas.ts:383](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L383)

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

[Canvas.ts:415](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L415)

***

### getCenter()

> **getCenter**(): [`Point`](Point.md)

Returns the center point of the canvas based on its width and height.

#### Returns

[`Point`](Point.md)

The center point of the canvas as a `Point` object.

#### Defined in

[Canvas.ts:244](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L244)

***

### redraw()

> **redraw**(): `void`

Clears the canvas and re-renders all watched and visible shapes.

#### Returns

`void`

#### Defined in

[Canvas.ts:397](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L397)

***

### resetPan()

> **resetPan**(): `void`

Resets the pan offset to its default value (0, 0).

#### Returns

`void`

#### Defined in

[Canvas.ts:512](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L512)

***

### resetZoom()

> **resetZoom**(): `void`

Resets the zoom scale to its default value (1).
If the canvas is both zoomable and pannable, it resets both zoom and pan.

#### Returns

`void`

#### Defined in

[Canvas.ts:495](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L495)

***

### resetZoomPan()

> **resetZoomPan**(): `void`

Resets both the zoom scale and pan offset to their default values (1 for zoom scale and (0, 0) for pan).

#### Returns

`void`

#### Defined in

[Canvas.ts:524](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L524)

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

[Canvas.ts:345](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L345)

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

[Canvas.ts:314](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L314)

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

[Canvas.ts:428](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L428)

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

[Canvas.ts:444](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L444)

***

### init()

> `static` **init**(`id`, `options`?, `style`?): [`Canvas`](Canvas.md)

Initializes a Canvas instance by retrieving the canvas element by ID and its context.

#### Parameters

• **id**: `string`

The ID of the HTML canvas element.

• **options?**: [`ICanvasOptions`](../interfaces/ICanvasOptions.md)

Optional configuration options for the canvas.

• **style?**: [`CanvasStyle`](CanvasStyle.md)

Optional styling options for the canvas.

#### Returns

[`Canvas`](Canvas.md)

A new Canvas instance.

#### Throws

Error if the canvas element is not found or is not a valid canvas.

#### Defined in

[Canvas.ts:279](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L279)
