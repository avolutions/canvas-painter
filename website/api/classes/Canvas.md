Class representing a Canvas element that can manage and render shapes.

## Accessors

### context

#### Get Signature

> **get** **context**(): `CanvasRenderingContext2D`

Gets the 2D rendering context of the canvas.

##### Returns

`CanvasRenderingContext2D`

The 2D context of the canvas.

#### Defined in

[Canvas.ts:581](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L581)

***

### interactive

#### Set Signature

> **set** **interactive**(`value`): `void`

Enables or disables features like panning, zooming, and dragging shapes.
Automatically adds or removes event listeners as needed.

##### Parameters

• **value**: `boolean`

`true` to enable, `false` to disable interactivity.

##### Returns

`void`

#### Defined in

[Canvas.ts:781](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L781)

***

### panOffset

#### Get Signature

> **get** **panOffset**(): [`Point`](Point.md)

Gets the current pan offset of the canvas.

##### Returns

[`Point`](Point.md)

The current pan offset as a `Point` object.

#### Set Signature

> **set** **panOffset**(`value`): `void`

Sets the pan offset of the canvas and triggers a redraw.

##### Parameters

• **value**: [`Point`](Point.md)

The new pan offset to set.

##### Returns

`void`

#### Defined in

[Canvas.ts:771](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L771)

***

### zoomScale

#### Get Signature

> **get** **zoomScale**(): `number`

Gets the current zoom scale of the canvas.
A value of `1` represents 100% zoom. Values below `1` indicate zooming out,
and values above `1` indicate zooming in.

##### Returns

`number`

The current zoom scale.

#### Set Signature

> **set** **zoomScale**(`value`): `void`

Sets the zoom scale of the canvas and applies the zoom.

##### Parameters

• **value**: `number`

The new zoom scale to set.

##### Returns

`void`

#### Defined in

[Canvas.ts:747](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L747)

## Methods

### clear()

> **clear**(): `void`

Clears the canvas by removing all content.

#### Returns

`void`

#### Defined in

[Canvas.ts:588](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L588)

***

### deselectShapes()

> **deselectShapes**(`exceptShape`?): `void`

Deselects all currently watched shapes except for the optional specified shape.

#### Parameters

• **exceptShape?**: [`IShape`](../interfaces/IShape.md)

The shape to exclude from deselection. If not provided,
all shapes are deselected.

#### Returns

`void`

#### Defined in

[Canvas.ts:841](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L841)

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

[Canvas.ts:621](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L621)

***

### getCenter()

> **getCenter**(): [`Point`](Point.md)

Returns the center point of the canvas based on its width and height.

#### Returns

[`Point`](Point.md)

The center point of the canvas as a `Point` object.

#### Defined in

[Canvas.ts:431](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L431)

***

### redraw()

> **redraw**(): `void`

Clears the canvas and re-renders all watched and visible shapes.

#### Returns

`void`

#### Defined in

[Canvas.ts:602](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L602)

***

### resetPan()

> **resetPan**(): `void`

Resets the pan offset to its default value (0, 0).

#### Returns

`void`

#### Defined in

[Canvas.ts:718](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L718)

***

### resetZoom()

> **resetZoom**(): `void`

Resets the zoom scale to its default value (1).
If the canvas is both zoomable and pannable, it resets both zoom and pan.

#### Returns

`void`

#### Defined in

[Canvas.ts:701](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L701)

***

### resetZoomPan()

> **resetZoomPan**(): `void`

Resets both the zoom scale and pan offset to their default values (1 for zoom scale and (0, 0) for pan).

#### Returns

`void`

#### Defined in

[Canvas.ts:730](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L730)

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

[Canvas.ts:550](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L550)

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

[Canvas.ts:519](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L519)

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

[Canvas.ts:634](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L634)

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

[Canvas.ts:650](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L650)

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

[Canvas.ts:469](https://github.com/avolutions/canvas-painter/blob/main/src/Canvas.ts#L469)
