Interface representing a shape that can be rendered on a canvas.

This interface defines methods for rendering the shape on a canvas and managing observers.

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

[shapes/IShape.ts:19](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L19)

***

### hide()

> **hide**(): `void`

Hides the shape, preventing it from being rendered on the canvas.
The shape will still exist and retain its properties, but it will not
appear during rendering until `show()` is called.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:40](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L40)

***

### isVisible()

> **isVisible**(): `boolean`

Checks whether the shape is currently visible.

#### Returns

`boolean`

- Returns true if the shape is visible and will be rendered on the canvas.
                     Returns false if the shape is hidden and will not be rendered.

#### Defined in

[shapes/IShape.ts:48](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L48)

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

[shapes/IShape.ts:26](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L26)

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

[shapes/IShape.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L12)

***

### show()

> **show**(): `void`

Makes the shape visible, allowing it to be rendered on the canvas.
If the shape was previously hidden, calling this method will make it appear
during the next rendering cycle.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:33](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/IShape.ts#L33)
