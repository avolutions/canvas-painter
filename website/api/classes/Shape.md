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

[shapes/Shape.ts:53](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L53)

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

### \_selected

> `protected` **\_selected**: `boolean` = `false`

Indicates whether the shape is currently selected.

#### Defined in

[shapes/Shape.ts:34](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L34)

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

[shapes/Shape.ts:37](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L37)

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

[shapes/Shape.ts:263](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L263)

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

[shapes/Shape.ts:281](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L281)

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

[shapes/Shape.ts:303](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L303)

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

[shapes/Shape.ts:245](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L245)

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

[shapes/Shape.ts:214](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L214)

***

### deselect()

> **deselect**(): `void`

Deselects the shape, if it is currently selected.
If the shape is deselected successfully, observers are notified of the change.

#### Returns

`void`

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`deselect`](../interfaces/IShape.md#deselect)

#### Defined in

[shapes/Shape.ts:159](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L159)

***

### hasBorder()

> `protected` **hasBorder**(): `boolean`

Determines if the current state style includes a visible border.

#### Returns

`boolean`

`true` if `borderColor` and `borderWidth` are defined and indicate a visible border; otherwise, `false`.

#### Defined in

[shapes/Shape.ts:340](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L340)

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

[shapes/Shape.ts:130](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L130)

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

[shapes/Shape.ts:190](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L190)

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

[shapes/Shape.ts:200](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L200)

***

### isSelectable()

> **isSelectable**(): `boolean`

Determines whether the shape can be selected.

#### Returns

`boolean`

`true` if the shape is selectable; otherwise, `false`.

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`isSelectable`](../interfaces/IShape.md#isselectable)

#### Defined in

[shapes/Shape.ts:180](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L180)

***

### isSelected()

> **isSelected**(): `boolean`

Checks whether the shape is currently selected.

#### Returns

`boolean`

`true` if the shape is selected; otherwise, `false`.

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`isSelected`](../interfaces/IShape.md#isselected)

#### Defined in

[shapes/Shape.ts:171](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L171)

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

[shapes/Shape.ts:140](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L140)

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

[shapes/Shape.ts:207](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L207)

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

[shapes/Shape.ts:225](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L225)

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

[shapes/Shape.ts:44](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L44)

***

### select()

> **select**(): `void`

Selects the shape, if it is selectable and not already selected.
If the shape is selected successfully, observers are notified of the change.

#### Returns

`void`

#### Implementation of

[`IShape`](../interfaces/IShape.md).[`select`](../interfaces/IShape.md#select)

#### Defined in

[shapes/Shape.ts:148](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L148)

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

[shapes/Shape.ts:121](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L121)

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

[shapes/Shape.ts:103](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L103)

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

[shapes/Shape.ts:112](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L112)
