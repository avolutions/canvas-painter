Class representing a circle, extending the Shape class with a CircleDefinition.
Provides functionality for rendering, resizing and moving the circle.

## Extends

- [`Shape`](Shape.md)\<[`CircleDefinition`](CircleDefinition.md), [`CircleStyle`](CircleStyle.md), [`CircleOptions`](CircleOptions.md)\>

## Constructors

### new Circle()

> **new Circle**(`center`, `radius`, `style`?, `options`?): [`Circle`](Circle.md)

Creates an instance of the `Circle` class.

The `Circle` can be created either by passing a `Point` object representing the center,
or by providing the individual coordinates for the center.

#### Parameters

• **center**: [`Point`](Point.md)

The center `Point` of the circle.

• **radius**: `number`

The radius of the circle.

• **style?**: [`CircleStyle`](CircleStyle.md)

Defines the styling of the circle.

• **options?**: [`ICircleOptions`](../interfaces/ICircleOptions.md)

The configuration options for the circle.

#### Returns

[`Circle`](Circle.md)

#### Throws

[InvalidConstructorArgumentsError](InvalidConstructorArgumentsError.md) if invalid arguments are passed.

#### Overrides

[`Shape`](Shape.md).[`constructor`](Shape.md#constructors)

#### Defined in

[shapes/Circle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Circle.ts#L20)

### new Circle()

> **new Circle**(`centerX`, `centerY`, `radius`, `style`?, `options`?): [`Circle`](Circle.md)

Creates an instance of the `Circle` class.

The `Circle` can be created either by passing a `Point` object representing the center,
or by providing the individual coordinates for the center.

#### Parameters

• **centerX**: `number`

The X-coordinate of the starting point.

• **centerY**: `number`

The Y-coordinate of the starting point.

• **radius**: `number`

The radius of the circle.

• **style?**: [`CircleStyle`](CircleStyle.md)

Defines the styling of the circle.

• **options?**: [`ICircleOptions`](../interfaces/ICircleOptions.md)

The configuration options for the circle.

#### Returns

[`Circle`](Circle.md)

#### Throws

[InvalidConstructorArgumentsError](InvalidConstructorArgumentsError.md) if invalid arguments are passed.

#### Overrides

`Shape<CircleDefinition, CircleStyle, CircleOptions>.constructor`

#### Defined in

[shapes/Circle.ts:29](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Circle.ts#L29)

## Properties

### \_definition

> `protected` **\_definition**: [`CircleDefinition`](CircleDefinition.md)

The shape definition, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_definition`](Shape.md#_definition)

#### Defined in

[shapes/Shape.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L20)

***

### \_options

> `protected` **\_options**: [`CircleOptions`](CircleOptions.md)

The options for configuring the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_options`](Shape.md#_options)

#### Defined in

[shapes/Shape.ts:26](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L26)

***

### \_style

> `protected` **\_style**: [`CircleStyle`](CircleStyle.md)

The style settings for the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_style`](Shape.md#_style)

#### Defined in

[shapes/Shape.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L23)

***

### observers

> `protected` **observers**: () => `void`[] = `[]`

List of observer functions to be notified on shape changes.

#### Inherited from

[`Shape`](Shape.md).[`observers`](Shape.md#observers)

#### Defined in

[shapes/Shape.ts:29](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L29)

## Accessors

### center

> `get` **center**(): [`Point`](Point.md)

Gets the center point of the circle.

> `set` **center**(`center`): `void`

Sets the center point of the circle.

#### Parameters

• **center**: [`Point`](Point.md)

The new center point of the circle.

#### Returns

[`Point`](Point.md)

The center point of the circle.

#### Defined in

[shapes/Circle.ts:77](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Circle.ts#L77)

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

[shapes/Shape.ts:190](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L190)

***

### radius

> `get` **radius**(): `number`

Gets the radius of the circle.

> `set` **radius**(`radius`): `void`

Sets the radius of the circle.

#### Parameters

• **radius**: `number`

The new radius of the circle.

#### Returns

`number`

The radius of the circle.

#### Defined in

[shapes/Circle.ts:86](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Circle.ts#L86)

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

[shapes/Shape.ts:172](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L172)

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

[`Shape`](Shape.md).[`hide`](Shape.md#hide)

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

[`Shape`](Shape.md).[`isVisible`](Shape.md#isvisible)

#### Defined in

[shapes/Shape.ts:132](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L132)

***

### move()

> **move**(`deltaX`, `deltaY`): `void`

Moves the circle by adjusting the current center by delta values.

#### Parameters

• **deltaX**: `number` = `0`

The change in the x-coordinate.

• **deltaY**: `number` = `0`

The change in the y-coordinate.

#### Returns

`void`

#### Defined in

[shapes/Circle.ts:116](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Circle.ts#L116)

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

[shapes/Shape.ts:152](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L152)

***

### render()

> **render**(`context`): `void`

Renders the circle on the canvas using the provided 2D rendering context.

The circle will be rendered with its current position and radius size.

#### Parameters

• **context**: `CanvasRenderingContext2D`

The 2D rendering context of the canvas where the circle will be drawn.

#### Returns

`void`

#### Overrides

[`Shape`](Shape.md).[`render`](Shape.md#render)

#### Defined in

[shapes/Circle.ts:136](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Circle.ts#L136)

***

### resize()

> **resize**(`delta`): `void`

Resizes the circle by adjusting the current radius by delta values.

#### Parameters

• **delta**: `number`

The change of the radius.

#### Returns

`void`

#### Defined in

[shapes/Circle.ts:125](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Circle.ts#L125)

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

[shapes/Shape.ts:113](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L113)

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

[shapes/Shape.ts:95](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L95)

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

[shapes/Shape.ts:104](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L104)
