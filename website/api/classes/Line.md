Represents a line shape that extends the generic Shape class.
It uses LineDefinition for defining the start and end points,
LineStyle for styling, and LineOptions for additional options.

## Extends

- [`Shape`](Shape.md)\<[`LineDefinition`](LineDefinition.md), [`LineStyle`](LineStyle.md), [`LineOptions`](LineOptions.md)\>

## Constructors

### new Line()

> **new Line**(`start`, `end`, `style`?): [`Line`](Line.md)

Creates an instance of the `Line` class.

The `Line` can be created either by passing two `Point` objects representing the start and end of the line,
or by providing the individual coordinates for the start and end points.

#### Parameters

• **start**: [`Point`](Point.md)

The starting `Point` of the line.

• **end**: [`Point`](Point.md)

The ending `Point` of the line.

• **style?**: [`LineStyle`](LineStyle.md)

Optional. Defines the styling of the line.

#### Returns

[`Line`](Line.md)

#### Throws

Throws if invalid arguments are passed.

#### Overrides

[`Shape`](Shape.md).[`constructor`](Shape.md#constructors)

#### Defined in

[shapes/Line.ts:19](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Line.ts#L19)

### new Line()

> **new Line**(`startX`, `startY`, `endX`, `endY`, `style`?): [`Line`](Line.md)

Creates an instance of the `Line` class.

The `Line` can be created either by passing two `Point` objects representing the start and end of the line,
or by providing the individual coordinates for the start and end points.

#### Parameters

• **startX**: `number`

The X-coordinate of the starting point.

• **startY**: `number`

The Y-coordinate of the starting point.

• **endX**: `number`

The X-coordinate of the ending point.

• **endY**: `number`

The Y-coordinate of the ending point.

• **style?**: [`LineStyle`](LineStyle.md)

Optional. Defines the styling of the line.

#### Returns

[`Line`](Line.md)

#### Throws

Throws if invalid arguments are passed.

#### Overrides

`Shape<LineDefinition, LineStyle, LineOptions>.constructor`

#### Defined in

[shapes/Line.ts:29](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Line.ts#L29)

## Properties

### \_definition

> `protected` **\_definition**: [`LineDefinition`](LineDefinition.md)

The shape definition, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_definition`](Shape.md#_definition)

#### Defined in

[shapes/Shape.ts:19](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L19)

***

### \_options

> `protected` **\_options**: [`LineOptions`](LineOptions.md)

The options for configuring the shape, proxied to trigger observer notifications on change.

#### Inherited from

[`Shape`](Shape.md).[`_options`](Shape.md#_options)

#### Defined in

[shapes/Shape.ts:25](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L25)

***

### \_style

> `protected` **\_style**: [`LineStyle`](LineStyle.md)

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

### end

> `get` **end**(): [`Point`](Point.md)

Gets the ending point of the line.

> `set` **end**(`end`): `void`

Sets the ending point of the line.

#### Parameters

• **end**: [`Point`](Point.md)

The new ending point of the line.

#### Returns

[`Point`](Point.md)

The ending point of the line.

#### Defined in

[shapes/Line.ts:83](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Line.ts#L83)

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

### start

> `get` **start**(): [`Point`](Point.md)

Gets the starting point of the line.

> `set` **start**(`start`): `void`

Sets the starting point of the line.

#### Parameters

• **start**: [`Point`](Point.md)

The new starting point of the line.

#### Returns

[`Point`](Point.md)

The starting point of the line.

#### Defined in

[shapes/Line.ts:74](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Line.ts#L74)

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

### moveEnd()

> **moveEnd**(`deltaX`, `deltaY`): `void`

Moves the end point of the line by the specified deltas along the x and y axes.

#### Parameters

• **deltaX**: `number` = `0`

The amount to move the end point along the x-axis.

• **deltaY**: `number` = `0`

The amount to move the end point along the y-axis.

#### Returns

`void`

#### Defined in

[shapes/Line.ts:123](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Line.ts#L123)

***

### moveStart()

> **moveStart**(`deltaX`, `deltaY`): `void`

Moves the start point of the line by the specified deltas along the x and y axes.

#### Parameters

• **deltaX**: `number` = `0`

The amount to move the start point along the x-axis.

• **deltaY**: `number` = `0`

The amount to move the start point along the y-axis.

#### Returns

`void`

#### Defined in

[shapes/Line.ts:113](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Line.ts#L113)

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

Renders the line on a canvas context.

#### Parameters

• **context**: `CanvasRenderingContext2D`

The canvas rendering context to draw the line.

#### Returns

`void`

#### Overrides

[`Shape`](Shape.md).[`render`](Shape.md#render)

#### Defined in

[shapes/Line.ts:132](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Line.ts#L132)
