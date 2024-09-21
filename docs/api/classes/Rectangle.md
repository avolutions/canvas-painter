<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Extends](#extends)
- [Constructors](#constructors)
  - [new Rectangle()](#new-rectangle)
- [Properties](#properties)
  - [\_definition](#%5C_definition)
  - [\_options](#%5C_options)
  - [observers](#observers)
- [Accessors](#accessors)
  - [angle](#angle)
  - [height](#height)
  - [position](#position)
  - [rotation](#rotation)
  - [style](#style)
  - [width](#width)
- [Methods](#methods)
  - [addObserver()](#addobserver)
  - [move()](#move)
  - [render()](#render)
  - [resize()](#resize)
  - [rotate()](#rotate)
  - [setSize()](#setsize)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Class representing a Rectangle, extending the Shape class with a RectangleDefinition.
Provides functionality for rendering, resizing, moving, and rotating the rectangle.

## Extends

- `Shape`\<`RectangleDefinition`\>

## Constructors

### new Rectangle()

> **new Rectangle**(`x`, `y`, `width`, `height`, `rotation`?, `style`?, `options`?): [`Rectangle`](Rectangle.md)

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

• **rotation?**: `number` = `0`

The initial rotation of the rectangle in degrees clockwise.

• **style?**: [`RectangleStyle`](RectangleStyle.md) = `{}`

• **options?**: [`RectangleOptions`](../interfaces/RectangleOptions.md) = `{}`

#### Returns

[`Rectangle`](Rectangle.md)

#### Overrides

`Shape<RectangleDefinition>.constructor`

#### Defined in

[shapes/Rectangle.ts:25](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L25)

## Properties

### \_definition

> `protected` **\_definition**: `RectangleDefinition`

The shape definition, proxied to trigger observer notifications on change.

#### Inherited from

`Shape._definition`

#### Defined in

[shapes/Shape.ts:11](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Shape.ts#L11)

***

### \_options

> `protected` **\_options**: [`RectangleOptions`](../interfaces/RectangleOptions.md)

#### Defined in

[shapes/Rectangle.ts:14](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L14)

***

### observers

> `protected` **observers**: () => `void`[] = `[]`

List of observer functions to be notified on shape changes.

#### Inherited from

`Shape.observers`

#### Defined in

[shapes/Shape.ts:14](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Shape.ts#L14)

## Accessors

### angle

> `get` **angle**(): [`Angle`](Angle.md)

Gets the angle of the rectangle.

#### Returns

[`Angle`](Angle.md)

The angle (rotation) of the rectangle.

#### Defined in

[shapes/Rectangle.ts:62](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L62)

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

[shapes/Rectangle.ts:46](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L46)

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

[shapes/Rectangle.ts:54](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L54)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`rotation`): `void`

Sets the rotation of the rectangle.

#### Parameters

• **rotation**: `number`

The new rotation of the rectangle.

#### Returns

`number`

#### Defined in

[shapes/Rectangle.ts:66](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L66)

***

### style

> `get` **style**(): [`RectangleStyle`](RectangleStyle.md)

> `set` **style**(`style`): `void`

#### Parameters

• **style**: [`RectangleStyle`](RectangleStyle.md)

#### Returns

[`RectangleStyle`](RectangleStyle.md)

#### Defined in

[shapes/Rectangle.ts:70](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L70)

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

[shapes/Rectangle.ts:38](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L38)

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

`Shape.addObserver`

#### Defined in

[shapes/Shape.ts:46](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Shape.ts#L46)

***

### move()

> **move**(`deltaX`?, `deltaY`?): `void`

Moves the rectangle by adjusting the current position by delta values.

#### Parameters

• **deltaX?**: `number` = `0`

The change in the x-coordinate.

• **deltaY?**: `number` = `0`

The change in the y-coordinate.

#### Returns

`void`

#### Defined in

[shapes/Rectangle.ts:140](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L140)

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

`Shape.render`

#### Defined in

[shapes/Rectangle.ts:173](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L173)

***

### resize()

> **resize**(`deltaWidth`?, `deltaHeight`?): `void`

Resizes the rectangle by adjusting the current width and height by delta values.

#### Parameters

• **deltaWidth?**: `number` = `0`

The change in width.

• **deltaHeight?**: `number` = `0`

The change in height.

#### Returns

`void`

#### Defined in

[shapes/Rectangle.ts:129](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L129)

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

[shapes/Rectangle.ts:150](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L150)

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

[shapes/Rectangle.ts:118](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/Rectangle.ts#L118)
