Interface representing a shape that can be rendered on a canvas.

This interface defines methods for rendering the shape on a canvas and managing observers.

## Accessors

### state

#### Get Signature

> **get** **state**(): [`ShapeState`](../enumerations/ShapeState.md)

Gets the current state of the shape.

##### Returns

[`ShapeState`](../enumerations/ShapeState.md)

The current state of the shape.

#### Set Signature

> **set** **state**(`state`): `void`

Sets a new state for the shape.

##### Parameters

• **state**: [`ShapeState`](../enumerations/ShapeState.md)

The new state to assign to the shape.

##### Returns

`void`

#### Defined in

[shapes/IShape.ts:82](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L82)

***

### stateStyle

#### Get Signature

> **get** **stateStyle**(): [`IShapeStyle`](IShapeStyle.md)

Retrieves the effective style of the shape based on its current state.

##### Returns

[`IShapeStyle`](IShapeStyle.md)

The computed style object for the current shape state, with state-specific overrides merged in as necessary.

#### Defined in

[shapes/IShape.ts:96](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L96)

## Methods

### addObserver()

> **addObserver**(`observer`): `void`

Adds an observer function that will be called when the shape undergoes changes.

#### Parameters

• **observer**

A callback function to be invoked when the shape's state changes.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L23)

***

### hide()

> **hide**(): `void`

Hides the shape, preventing it from being rendered on the canvas.
The shape will still exist and retain its properties, but it will not
appear during rendering until `show()` is called.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:44](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L44)

***

### isDraggable()

> **isDraggable**(): `boolean`

Checks whether the shape is draggable or not.

#### Returns

`boolean`

Returns true if the shape is draggable.
         Returns false if the shape is not draggable.

#### Defined in

[shapes/IShape.ts:60](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L60)

***

### isMouseOver()

> **isMouseOver**(`mousePosition`): `boolean`

Determines if the mouse is currently over the shape.

#### Parameters

• **mousePosition**: [`Point`](../classes/Point.md)

The current mouse position.

#### Returns

`boolean`

True if the mouse is over the shape, false otherwise.

#### Defined in

[shapes/IShape.ts:68](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L68)

***

### isVisible()

> **isVisible**(): `boolean`

Checks whether the shape is currently visible.

#### Returns

`boolean`

Returns true if the shape is visible and will be rendered on the canvas.
         Returns false if the shape is hidden and will not be rendered.

#### Defined in

[shapes/IShape.ts:52](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L52)

***

### onDrag()

> **onDrag**(`delta`): `void`

Handles the drag operation by applying the given delta to the current position.

#### Parameters

• **delta**: [`Point`](../classes/Point.md)

The change in position represented as a `Point`.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:75](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L75)

***

### removeObserver()

> **removeObserver**(`observer`): `void`

Removes an observer function that was previously added.

#### Parameters

• **observer**

The observer callback function to be removed.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:30](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L30)

***

### render()

> **render**(`context`): `void`

Renders the shape to a given canvas context.

#### Parameters

• **context**: `CanvasRenderingContext2D`

The 2D rendering context of the canvas where the shape will be drawn.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:16](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L16)

***

### show()

> **show**(): `void`

Makes the shape visible, allowing it to be rendered on the canvas.
If the shape was previously hidden, calling this method will make it appear
during the next rendering cycle.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:37](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L37)
