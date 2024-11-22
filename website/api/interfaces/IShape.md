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

[shapes/IShape.ts:108](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L108)

***

### stateStyle

#### Get Signature

> **get** **stateStyle**(): [`IShapeStyle`](IShapeStyle.md)

Retrieves the effective style of the shape based on its current state.

##### Returns

[`IShapeStyle`](IShapeStyle.md)

The computed style object for the current shape state, with state-specific overrides merged in as necessary.

#### Defined in

[shapes/IShape.ts:122](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L122)

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

### deselect()

> **deselect**(): `void`

Deselects the shape, if it is currently selected.
If the shape is deselected successfully, observers are notified of the change.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:64](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L64)

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

[shapes/IShape.ts:86](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L86)

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

[shapes/IShape.ts:94](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L94)

***

### isSelectable()

> **isSelectable**(): `boolean`

Determines whether the shape can be selected.

#### Returns

`boolean`

`true` if the shape is selectable; otherwise, `false`.

#### Defined in

[shapes/IShape.ts:78](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L78)

***

### isSelected()

> **isSelected**(): `boolean`

Checks whether the shape is currently selected.

#### Returns

`boolean`

`true` if the shape is selected; otherwise, `false`.

#### Defined in

[shapes/IShape.ts:71](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L71)

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

[shapes/IShape.ts:101](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L101)

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

### select()

> **select**(): `void`

Selects the shape, if it is selectable and not already selected.
If the shape is selected successfully, observers are notified of the change.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:58](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L58)

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
