Abstract class representing a generic shape with observer functionality.

## Extended by

- [`Circle`](Circle.md)
- [`Line`](Line.md)
- [`Rectangle`](Rectangle.md)

## Type Parameters

• **TDefinition** *extends* [`IShapeDefinition`](../interfaces/IShapeDefinition.md)

The type of shape definition implementing IShapeDefinition.

• **TStyle** *extends* [`IShapeStyle`](../interfaces/IShapeStyle.md)

The type of shape style implementing IShapeStyle.

• **TOptions** *extends* [`IShapeOptions`](../interfaces/IShapeOptions.md)

The type of shape options implementing IShapeOptions.

## Implements

- [`IShape`](../interfaces/IShape.md)
- [`ISerializable`](../interfaces/ISerializable.md)

## Constructors

### new Shape()

> **new Shape**\<`TDefinition`, `TStyle`, `TOptions`\>(`definition`, `style`?, `options`?): [`Shape`](Shape.md)\<`TDefinition`, `TStyle`, `TOptions`\>

Constructs a Shape instance and wraps the definition, style, and options in a Proxy to handle change notifications.

#### Parameters

• **definition**: `TDefinition`

The shape definition instance to be wrapped in a Proxy.

• **style?**: `TStyle`

Optional style settings for the shape.

• **options?**: `TOptions`

Optional configuration options for the shape.

#### Returns

[`Shape`](Shape.md)\<`TDefinition`, `TStyle`, `TOptions`\>

#### Defined in

[shapes/Shape.ts:50](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L50)

## Properties

### \_definition

> `protected` **\_definition**: `TDefinition`

The shape definition, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:22](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L22)

***

### \_options

> `protected` **\_options**: `TOptions`

The options for configuring the shape, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L28)

***

### \_state

> `protected` **\_state**: [`ShapeState`](../enumerations/ShapeState.md) = `ShapeState.Default`

The current state of the shape, representing its visual or interactive status.

#### Defined in

[shapes/Shape.ts:31](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L31)

***

### \_style

> `protected` **\_style**: `TStyle`

The style settings for the shape, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:25](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L25)

***

### observers

> `protected` **observers**: () => `void`[] = `[]`

List of observer functions to be notified on shape changes.

#### Defined in

[shapes/Shape.ts:34](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L34)

## Accessors

### options

#### Get Signature

> **get** **options**(): `TOptions`

Gets the configuration options of the shape.

##### Returns

`TOptions`

The current options.

#### Set Signature

> **set** **options**(`options`): `void`

Updates the configuration options of the shape and notifies observers.

##### Parameters

• **options**: `TOptions`

The new options to apply.

##### Returns

`void`

#### Defined in

[shapes/Shape.ts:220](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L220)

***

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

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`state`](../interfaces/IShape.md#state)

#### Defined in

[shapes/Shape.ts:238](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L238)

***

### stateStyle

#### Get Signature

> **get** **stateStyle**(): `TStyle`

Retrieves the effective style of the shape based on its current state.

##### Returns

`TStyle`

The computed style object for the current shape state, with state-specific overrides merged in as necessary.

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`stateStyle`](../interfaces/IShape.md#statestyle)

#### Defined in

[shapes/Shape.ts:260](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L260)

***

### style

#### Get Signature

> **get** **style**(): `TStyle`

Gets the style settings of the shape.

##### Returns

`TStyle`

The current style settings.

#### Set Signature

> **set** **style**(`style`): `void`

Updates the style settings of the shape and notifies observers.

##### Parameters

• **style**: `TStyle`

The new style settings to apply.

##### Returns

`void`

#### Defined in

[shapes/Shape.ts:202](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L202)

## Methods

### addObserver()

> **addObserver**(`observer`): `void`

Adds an observer function that will be called when the shape's state changes.

#### Parameters

• **observer**

The observer callback function.

#### Returns

`void`

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`addObserver`](../interfaces/IShape.md#addobserver)

#### Defined in

[shapes/Shape.ts:171](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L171)

***

### hasBorder()

> `protected` **hasBorder**(): `boolean`

Determines if the current state style includes a visible border.

#### Returns

`boolean`

`true` if `borderColor` and `borderWidth` are defined and indicate a visible border; otherwise, `false`.

#### Defined in

[shapes/Shape.ts:297](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L297)

***

### hide()

> **hide**(): `void`

Hides the shape, preventing it from being rendered on the canvas.
The shape will still exist and retain its properties, but it will not
appear during rendering until `show()` is called.

#### Returns

`void`

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`hide`](../interfaces/IShape.md#hide)

#### Defined in

[shapes/Shape.ts:127](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L127)

***

### isDraggable()

> **isDraggable**(): `boolean`

Checks whether the shape is draggable or not.

#### Returns

`boolean`

Returns true if the shape is draggable.
         Returns false if the shape is not draggable.

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`isDraggable`](../interfaces/IShape.md#isdraggable)

#### Defined in

[shapes/Shape.ts:147](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L147)

***

### isMouseOver()

> `abstract` **isMouseOver**(`mousePosition`): `boolean`

Determines if the mouse is currently over the shape.

#### Parameters

• **mousePosition**: [`Point`](Point.md)

The current mouse position.

#### Returns

`boolean`

True if the mouse is over the shape, false otherwise.

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`isMouseOver`](../interfaces/IShape.md#ismouseover)

#### Defined in

[shapes/Shape.ts:157](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L157)

***

### isVisible()

> **isVisible**(): `boolean`

Checks whether the shape is currently visible.

#### Returns

`boolean`

Returns true if the shape is visible and will be rendered on the canvas.
         Returns false if the shape is hidden and will not be rendered.

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`isVisible`](../interfaces/IShape.md#isvisible)

#### Defined in

[shapes/Shape.ts:137](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L137)

***

### onDrag()

> `abstract` **onDrag**(`delta`): `void`

Handles the drag operation by applying the given delta to the current position.

#### Parameters

• **delta**: [`Point`](Point.md)

The change in position represented as a `Point`.

#### Returns

`void`

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`onDrag`](../interfaces/IShape.md#ondrag)

#### Defined in

[shapes/Shape.ts:164](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L164)

***

### removeObserver()

> **removeObserver**(`observer`): `void`

Removes a previously added observer function.

#### Parameters

• **observer**

The observer callback function to be removed.

#### Returns

`void`

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`removeObserver`](../interfaces/IShape.md#removeobserver)

#### Defined in

[shapes/Shape.ts:182](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L182)

***

### render()

> `abstract` **render**(`context`): `void`

Abstract method to render the shape on the canvas.

#### Parameters

• **context**: `CanvasRenderingContext2D`

The 2D rendering context for the canvas.

#### Returns

`void`

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`render`](../interfaces/IShape.md#render)

#### Defined in

[shapes/Shape.ts:41](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L41)

***

### show()

> **show**(): `void`

Makes the shape visible, allowing it to be rendered on the canvas.
If the shape was previously hidden, calling this method will make it appear
during the next rendering cycle.

#### Returns

`void`

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`show`](../interfaces/IShape.md#show)

#### Defined in

[shapes/Shape.ts:118](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L118)

***

### toArray()

> **toArray**(): `any`[]

Converts the shape's definition to an array.

#### Returns

`any`[]

An array representation of the shape's definition.

#### Implementation of

[`ISerializable`](../interfaces/ISerializable.md).[`toArray`](../interfaces/ISerializable.md#toarray)

#### Defined in

[shapes/Shape.ts:100](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L100)

***

### toJson()

> **toJson**(): `string`

Converts the shape's definition to a JSON string.

#### Returns

`string`

A JSON string  representation of the shape's definition.

#### Implementation of

[`ISerializable`](../interfaces/ISerializable.md).[`toJson`](../interfaces/ISerializable.md#tojson)

#### Defined in

[shapes/Shape.ts:109](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L109)
