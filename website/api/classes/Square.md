Class representing a Square, extending the Rectangle class.
Provides functionality for rendering, resizing, moving, and rotating the square.

## Extends

- [`Rectangle`](Rectangle.md)

## Constructors

### new Square()

> **new Square**(`x`, `y`, `size`, `rotation`, `style`, `options`?): [`Square`](Square.md)

Constructs a new Square instance.

#### Parameters

• **x**: `number`

The x-coordinate of the square's position.

• **y**: `number`

The y-coordinate of the square's position.

• **size**: `number`

The size (width/height) of the square.

• **rotation**: `number` = `0`

The initial rotation of the square in degrees clockwise.

• **style**: [`RectangleStyle`](RectangleStyle.md) = `{}`

The style options for the square.

• **options?**: [`IRectangleOptions`](../interfaces/IRectangleOptions.md)

The configuration options for the square.

#### Returns

[`Square`](Square.md)

#### Overrides

[`Rectangle`](Rectangle.md).[`constructor`](Rectangle.md#constructors)

#### Defined in

[shapes/Square.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Square.ts#L20)

## Properties

### \_definition

> `protected` **\_definition**: [`RectangleDefinition`](RectangleDefinition.md)

The shape definition, proxied to trigger observer notifications on change.

#### Inherited from

[`Rectangle`](Rectangle.md).[`_definition`](Rectangle.md#_definition)

#### Defined in

[shapes/Shape.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L20)

***

### \_options

> `protected` **\_options**: [`RectangleOptions`](RectangleOptions.md)

The options for configuring the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Rectangle`](Rectangle.md).[`_options`](Rectangle.md#_options)

#### Defined in

[shapes/Shape.ts:26](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L26)

***

### \_style

> `protected` **\_style**: [`RectangleStyle`](RectangleStyle.md)

The style settings for the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Rectangle`](Rectangle.md).[`_style`](Rectangle.md#_style)

#### Defined in

[shapes/Shape.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L23)

***

### observers

> `protected` **observers**: () => `void`[] = `[]`

List of observer functions to be notified on shape changes.

#### Inherited from

[`Rectangle`](Rectangle.md).[`observers`](Rectangle.md#observers)

#### Defined in

[shapes/Shape.ts:29](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L29)

## Accessors

### angle

> `get` **angle**(): [`Angle`](Angle.md)

Gets the angle of the rectangle.

#### Returns

[`Angle`](Angle.md)

The angle (rotation) of the rectangle.

#### Inherited from

[`Rectangle`](Rectangle.md).[`angle`](Rectangle.md#angle)

#### Defined in

[shapes/Rectangle.ts:69](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L69)

***

### height

> `get` **height**(): `number`

Gets the height of the square.

> `set` **height**(`height`): `void`

Sets the height of the square and updates the width with same value.

#### Parameters

• **height**: `number`

The new height of the square.

#### Returns

`number`

The height of the square.

#### Overrides

[`Rectangle`](Rectangle.md).[`height`](Rectangle.md#height)

#### Defined in

[shapes/Square.ts:45](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Square.ts#L45)

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

[`Rectangle`](Rectangle.md).[`options`](Rectangle.md#options)

#### Defined in

[shapes/Shape.ts:190](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L190)

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

#### Inherited from

[`Rectangle`](Rectangle.md).[`position`](Rectangle.md#position)

#### Defined in

[shapes/Rectangle.ts:61](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L61)

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

#### Inherited from

[`Rectangle`](Rectangle.md).[`rotation`](Rectangle.md#rotation)

#### Defined in

[shapes/Rectangle.ts:77](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L77)

***

### size

> `get` **size**(): `number`

Gets the size (widht/height) of the square.

> `set` **size**(`size`): `void`

Sets the size (width/height) of the square.

#### Parameters

• **size**: `number`

The new size of the square.

#### Returns

`number`

The size of the square.

#### Defined in

[shapes/Square.ts:37](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Square.ts#L37)

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

[`Rectangle`](Rectangle.md).[`style`](Rectangle.md#style)

#### Defined in

[shapes/Shape.ts:172](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L172)

***

### width

> `get` **width**(): `number`

Gets the width of the square.

> `set` **width**(`width`): `void`

Sets the width of the square and updates the height with same value.

#### Parameters

• **width**: `number`

The new width of the square.

#### Returns

`number`

The width of the square.

#### Overrides

[`Rectangle`](Rectangle.md).[`width`](Rectangle.md#width)

#### Defined in

[shapes/Square.ts:53](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Square.ts#L53)

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

[`Rectangle`](Rectangle.md).[`addObserver`](Rectangle.md#addobserver)

#### Defined in

[shapes/Shape.ts:141](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L141)

***

### hide()

> **hide**(): `void`

Hides the shape, preventing it from being rendered on the canvas.
The shape will still exist and retain its properties, but it will not
appear during rendering until `show()` is called.

#### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`hide`](Rectangle.md#hide)

#### Defined in

[shapes/Shape.ts:122](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L122)

***

### isVisible()

> **isVisible**(): `boolean`

Checks whether the shape is currently visible.

#### Returns

`boolean`

Returns true if the shape is visible and will be rendered on the canvas.
         Returns false if the shape is hidden and will not be rendered.

#### Inherited from

[`Rectangle`](Rectangle.md).[`isVisible`](Rectangle.md#isvisible)

#### Defined in

[shapes/Shape.ts:132](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L132)

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

#### Inherited from

[`Rectangle`](Rectangle.md).[`move`](Rectangle.md#move)

#### Defined in

[shapes/Rectangle.ts:143](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L143)

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

[`Rectangle`](Rectangle.md).[`removeObserver`](Rectangle.md#removeobserver)

#### Defined in

[shapes/Shape.ts:152](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L152)

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

#### Inherited from

[`Rectangle`](Rectangle.md).[`render`](Rectangle.md#render)

#### Defined in

[shapes/Rectangle.ts:179](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L179)

***

### resize()

> **resize**(`deltaSize`): `void`

Resizes the rectangle by adjusting the current size, width and height by delta value.

#### Parameters

• **deltaSize**: `number`

The change in width.

#### Returns

`void`

#### Overrides

[`Rectangle`](Rectangle.md).[`resize`](Rectangle.md#resize)

#### Defined in

[shapes/Square.ts:101](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Square.ts#L101)

***

### rotate()

> **rotate**(`deltaRotation`): `void`

Rotates the rectangle by adjusting its current angle.

#### Parameters

• **deltaRotation**: `number`

The amount to adjust the rectangle's rotation, in degrees.

#### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`rotate`](Rectangle.md#rotate)

#### Defined in

[shapes/Rectangle.ts:152](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L152)

***

### setSize()

> **setSize**(`size`): `void`

Updates the size of the square by setting new width and height values.

#### Parameters

• **size**: `number`

The new width and height of the square.

#### Returns

`void`

#### Overrides

[`Rectangle`](Rectangle.md).[`setSize`](Rectangle.md#setsize)

#### Defined in

[shapes/Square.ts:91](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Square.ts#L91)

***

### show()

> **show**(): `void`

Makes the shape visible, allowing it to be rendered on the canvas.
If the shape was previously hidden, calling this method will make it appear
during the next rendering cycle.

#### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`show`](Rectangle.md#show)

#### Defined in

[shapes/Shape.ts:113](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L113)

***

### toArray()

> **toArray**(): `any`[]

Converts the shape's definition to an array.

#### Returns

`any`[]

An array representation of the shape's definition.

#### Inherited from

[`Rectangle`](Rectangle.md).[`toArray`](Rectangle.md#toarray)

#### Defined in

[shapes/Shape.ts:95](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L95)

***

### toJson()

> **toJson**(): `string`

Converts the shape's definition to a JSON string.

#### Returns

`string`

A JSON string  representation of the shape's definition.

#### Inherited from

[`Rectangle`](Rectangle.md).[`toJson`](Rectangle.md#tojson)

#### Defined in

[shapes/Shape.ts:104](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L104)
