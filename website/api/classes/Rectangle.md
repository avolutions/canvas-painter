Class representing a Rectangle, extending the Shape class with a RectangleDefinition.
Provides functionality for rendering, resizing, moving, and rotating the rectangle.

## Extends

- [`Shape`](Shape.md)\<[`RectangleDefinition`](RectangleDefinition.md), [`RectangleStyle`](RectangleStyle.md), [`RectangleOptions`](RectangleOptions.md)\>

## Extended by

- [`Square`](Square.md)

## Constructors

### new Rectangle()

> **new Rectangle**(`x`, `y`, `width`, `height`, `rotation`, `style`?, `options`?): [`Rectangle`](Rectangle.md)

Constructs a new Rectangle instance.

#### Parameters

• **x**: `number`

The x-coordinate of the rectangle's position.

• **y**: `number`

The y-coordinate of the rectangle's position.

• **width**: `number`

The width of the rectangle.

• **height**: `number`

The height of the rectangle.

• **rotation**: `number` = `0`

The initial rotation of the rectangle in degrees clockwise.

• **style?**: [`IRectangleStyle`](../interfaces/IRectangleStyle.md)

The style options for the rectangle.

• **options?**: [`IRectangleOptions`](../interfaces/IRectangleOptions.md)

The configuration options for the rectangle.

#### Returns

[`Rectangle`](Rectangle.md)

#### Overrides

[`Shape`](Shape.md).[`constructor`](Shape.md#constructors)

#### Defined in

[shapes/Rectangle.ts:26](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L26)

## Properties

### \_definition

> `protected` **\_definition**: [`RectangleDefinition`](RectangleDefinition.md)

The shape definition, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_definition`](Shape.md#_definition)

#### Defined in

[shapes/Shape.ts:22](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L22)

***

### \_options

> `protected` **\_options**: [`RectangleOptions`](RectangleOptions.md)

The options for configuring the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_options`](Shape.md#_options)

#### Defined in

[shapes/Shape.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L28)

***

### \_state

> `protected` **\_state**: [`ShapeState`](../enumerations/ShapeState.md) = `ShapeState.Default`

The current state of the shape, representing its visual or interactive status.

#### Inherited from

[`Shape`](Shape.md).[`_state`](Shape.md#_state)

#### Defined in

[shapes/Shape.ts:31](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L31)

***

### \_style

> `protected` **\_style**: [`RectangleStyle`](RectangleStyle.md)

The style settings for the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_style`](Shape.md#_style)

#### Defined in

[shapes/Shape.ts:25](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L25)

***

### observers

> `protected` **observers**: () => `void`[] = `[]`

List of observer functions to be notified on shape changes.

#### Inherited from

[`Shape`](Shape.md).[`observers`](Shape.md#observers)

#### Defined in

[shapes/Shape.ts:34](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L34)

## Accessors

### angle

> `get` **angle**(): [`Angle`](Angle.md)

Gets the angle of the rectangle.

#### Returns

[`Angle`](Angle.md)

The angle (rotation) of the rectangle.

#### Defined in

[shapes/Rectangle.ts:70](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L70)

***

### height

> `get` **height**(): `number`

Gets the height of the rectangle.

> `set` **height**(`height`): `void`

Sets the height of the rectangle.

#### Parameters

• **height**: `number`

The new height of the rectangle.

#### Returns

`number`

The height of the rectangle.

#### Defined in

[shapes/Rectangle.ts:54](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L54)

***

### options

> `get` **options**(): `TOptions`

Gets the configuration options of the shape.

> `set` **options**(`options`): `void`

Updates the configuration options of the shape and notifies observers.

#### Parameters

• **options**: `TOptions`

The new options to apply.

#### Returns

`TOptions`

The current options.

#### Inherited from

[`Shape`](Shape.md).[`options`](Shape.md#options)

#### Defined in

[shapes/Shape.ts:203](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L203)

***

### position

> `get` **position**(): [`Point`](Point.md)

Gets the position (Point) of the rectangle.

> `set` **position**(`position`): `void`

Sets the position (Point) of the rectangle.

#### Parameters

• **position**: [`Point`](Point.md)

The new position of the rectangle.

#### Returns

[`Point`](Point.md)

The position of the rectangle.

#### Defined in

[shapes/Rectangle.ts:62](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L62)

***

### rotation

> `get` **rotation**(): `number`

Gets the rotation of the rectangle in degrees.

> `set` **rotation**(`rotation`): `void`

Sets the rotation of the rectangle.

#### Parameters

• **rotation**: `number`

The new rotation of the rectangle.

#### Returns

`number`

The rotation of the rectangle.

#### Defined in

[shapes/Rectangle.ts:78](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L78)

***

### state

> `get` **state**(): [`ShapeState`](../enumerations/ShapeState.md)

Gets the current state of the shape.

> `set` **state**(`state`): `void`

Sets a new state for the shape.

#### Parameters

• **state**: [`ShapeState`](../enumerations/ShapeState.md)

The new state to assign to the shape.

#### Returns

[`ShapeState`](../enumerations/ShapeState.md)

The current state of the shape.

#### Inherited from

[`Shape`](Shape.md).[`state`](Shape.md#state)

#### Defined in

[shapes/Shape.ts:221](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L221)

***

### stateStyle

> `get` **stateStyle**(): `TStyle`

Retrieves the effective style of the shape based on its current state.

#### Returns

`TStyle`

The computed style object for the current shape state, with state-specific overrides merged in as necessary.

#### Inherited from

[`Shape`](Shape.md).[`stateStyle`](Shape.md#statestyle)

#### Defined in

[shapes/Shape.ts:243](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L243)

***

### style

> `get` **style**(): `TStyle`

Gets the style settings of the shape.

> `set` **style**(`style`): `void`

Updates the style settings of the shape and notifies observers.

#### Parameters

• **style**: `TStyle`

The new style settings to apply.

#### Returns

`TStyle`

The current style settings.

#### Inherited from

[`Shape`](Shape.md).[`style`](Shape.md#style)

#### Defined in

[shapes/Shape.ts:185](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L185)

***

### width

> `get` **width**(): `number`

Gets the width of the rectangle.

> `set` **width**(`width`): `void`

Sets the width of the rectangle.

#### Parameters

• **width**: `number`

The new width of the rectangle.

#### Returns

`number`

The width of the rectangle.

#### Defined in

[shapes/Rectangle.ts:46](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L46)

## Methods

### addObserver()

> **addObserver**(`observer`): `void`

Adds an observer function that will be called when the shape's state changes.

#### Parameters

• **observer**

The observer callback function.

#### Returns

`void`

#### Inherited from

[`Shape`](Shape.md).[`addObserver`](Shape.md#addobserver)

#### Defined in

[shapes/Shape.ts:154](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L154)

***

### hasBorder()

> `protected` **hasBorder**(): `boolean`

Determines if the current state style includes a visible border.

#### Returns

`boolean`

`true` if `borderColor` and `borderWidth` are defined and indicate a visible border; otherwise, `false`.

#### Inherited from

[`Shape`](Shape.md).[`hasBorder`](Shape.md#hasborder)

#### Defined in

[shapes/Shape.ts:280](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L280)

***

### hide()

> **hide**(): `void`

Hides the shape, preventing it from being rendered on the canvas.
The shape will still exist and retain its properties, but it will not
appear during rendering until `show()` is called.

#### Returns

`void`

#### Inherited from

[`Shape`](Shape.md).[`hide`](Shape.md#hide)

#### Defined in

[shapes/Shape.ts:127](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L127)

***

### isMouseOver()

> **isMouseOver**(`mousePosition`): `boolean`

Determines if the mouse is currently over the shape.

#### Parameters

• **mousePosition**: [`Point`](Point.md)

The current mouse position.

#### Returns

`boolean`

True if the mouse is over the shape, false otherwise.

#### Overrides

[`Shape`](Shape.md).[`isMouseOver`](Shape.md#ismouseover)

#### Defined in

[shapes/Rectangle.ts:233](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L233)

***

### isVisible()

> **isVisible**(): `boolean`

Checks whether the shape is currently visible.

#### Returns

`boolean`

Returns true if the shape is visible and will be rendered on the canvas.
         Returns false if the shape is hidden and will not be rendered.

#### Inherited from

[`Shape`](Shape.md).[`isVisible`](Shape.md#isvisible)

#### Defined in

[shapes/Shape.ts:137](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L137)

***

### move()

> **move**(`deltaX`, `deltaY`): `void`

Moves the rectangle by adjusting the current position by delta values.

#### Parameters

• **deltaX**: `number` = `0`

The change in the x-coordinate.

• **deltaY**: `number` = `0`

The change in the y-coordinate.

#### Returns

`void`

#### Defined in

[shapes/Rectangle.ts:144](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L144)

***

### removeObserver()

> **removeObserver**(`observer`): `void`

Removes a previously added observer function.

#### Parameters

• **observer**

The observer callback function to be removed.

#### Returns

`void`

#### Inherited from

[`Shape`](Shape.md).[`removeObserver`](Shape.md#removeobserver)

#### Defined in

[shapes/Shape.ts:165](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L165)

***

### render()

> **render**(`context`): `void`

Renders the rectangle on the canvas using the provided 2D rendering context.

The rectangle will be rendered with its current position, size, and rotation.

#### Parameters

• **context**: `CanvasRenderingContext2D`

The 2D rendering context of the canvas where the rectangle will be drawn.

#### Returns

`void`

#### Overrides

[`Shape`](Shape.md).[`render`](Shape.md#render)

#### Defined in

[shapes/Rectangle.ts:180](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L180)

***

### resize()

> **resize**(`deltaWidth`, `deltaHeight`): `void`

Resizes the rectangle by adjusting the current width and height by delta values.

#### Parameters

• **deltaWidth**: `number` = `0`

The change in width.

• **deltaHeight**: `number` = `0`

The change in height.

#### Returns

`void`

#### Defined in

[shapes/Rectangle.ts:133](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L133)

***

### rotate()

> **rotate**(`deltaRotation`): `void`

Rotates the rectangle by adjusting its current angle.

#### Parameters

• **deltaRotation**: `number`

The amount to adjust the rectangle's rotation, in degrees.

#### Returns

`void`

#### Defined in

[shapes/Rectangle.ts:153](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L153)

***

### setSize()

> **setSize**(`width`, `height`): `void`

Updates the size of the rectangle by setting new width and height values.

#### Parameters

• **width**: `number`

The new width of the rectangle.

• **height**: `number`

The new height of the rectangle.

#### Returns

`void`

#### Defined in

[shapes/Rectangle.ts:122](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L122)

***

### show()

> **show**(): `void`

Makes the shape visible, allowing it to be rendered on the canvas.
If the shape was previously hidden, calling this method will make it appear
during the next rendering cycle.

#### Returns

`void`

#### Inherited from

[`Shape`](Shape.md).[`show`](Shape.md#show)

#### Defined in

[shapes/Shape.ts:118](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L118)

***

### toArray()

> **toArray**(): `any`[]

Converts the shape's definition to an array.

#### Returns

`any`[]

An array representation of the shape's definition.

#### Inherited from

[`Shape`](Shape.md).[`toArray`](Shape.md#toarray)

#### Defined in

[shapes/Shape.ts:100](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L100)

***

### toJson()

> **toJson**(): `string`

Converts the shape's definition to a JSON string.

#### Returns

`string`

A JSON string  representation of the shape's definition.

#### Inherited from

[`Shape`](Shape.md).[`toJson`](Shape.md#tojson)

#### Defined in

[shapes/Shape.ts:109](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L109)
