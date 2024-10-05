Class representing a Rectangle, extending the Shape class with a RectangleDefinition.
Provides functionality for rendering, resizing, moving, and rotating the rectangle.

## Extends

- [`Shape`](Shape.md)\<[`RectangleDefinition`](RectangleDefinition.md), [`RectangleStyle`](RectangleStyle.md), [`RectangleOptions`](RectangleOptions.md)\>

## Constructors

### new Rectangle()

> **new Rectangle**(`x`, `y`, `width`, `height`, `rotation`, `style`, `options`): [`Rectangle`](Rectangle.md)

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

• **style**: [`RectangleStyle`](RectangleStyle.md) = `{}`

The style options for the rectangle.

• **options**: [`RectangleOptions`](RectangleOptions.md) = `{}`

The configuration options for the rectangle.

#### Returns

[`Rectangle`](Rectangle.md)

#### Overrides

[`Shape`](Shape.md).[`constructor`](Shape.md#constructors)

#### Defined in

[shapes/Rectangle.ts:24](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L24)

## Properties

### \_definition

> `protected` **\_definition**: [`RectangleDefinition`](RectangleDefinition.md)

The shape definition, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_definition`](Shape.md#_definition)

#### Defined in

[shapes/Shape.ts:19](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L19)

***

### \_options

> `protected` **\_options**: [`RectangleOptions`](RectangleOptions.md)

The options for configuring the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_options`](Shape.md#_options)

#### Defined in

[shapes/Shape.ts:25](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L25)

***

### \_style

> `protected` **\_style**: [`RectangleStyle`](RectangleStyle.md)

The style settings for the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_style`](Shape.md#_style)

#### Defined in

[shapes/Shape.ts:22](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L22)

***

### observers

> `protected` **observers**: () => `void`[] = `[]`

List of observer functions to be notified on shape changes.

#### Inherited from

[`Shape`](Shape.md).[`observers`](Shape.md#observers)

#### Defined in

[shapes/Shape.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L28)

## Accessors

### angle

> `get` **angle**(): [`Angle`](Angle.md)

Gets the angle of the rectangle.

#### Returns

[`Angle`](Angle.md)

The angle (rotation) of the rectangle.

#### Defined in

[shapes/Rectangle.ts:75](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L75)

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

[shapes/Rectangle.ts:59](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L59)

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

[shapes/Shape.ts:145](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L145)

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

[shapes/Rectangle.ts:67](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L67)

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

[shapes/Rectangle.ts:83](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L83)

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

[shapes/Shape.ts:127](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L127)

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

[shapes/Rectangle.ts:51](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L51)

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

[shapes/Shape.ts:94](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L94)

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

[shapes/Rectangle.ts:149](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L149)

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

[shapes/Shape.ts:105](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L105)

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

[shapes/Rectangle.ts:185](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L185)

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

[shapes/Rectangle.ts:138](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L138)

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

[shapes/Rectangle.ts:158](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L158)

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

[shapes/Rectangle.ts:127](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Rectangle.ts#L127)
