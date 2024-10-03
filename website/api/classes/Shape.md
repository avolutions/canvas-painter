Abstract class representing a generic shape with observer functionality.

## Extended by

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

[shapes/Shape.ts:44](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L44)

## Properties

### \_definition

> `protected` **\_definition**: `TDefinition`

The shape definition, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:19](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L19)

***

### \_options

> `protected` **\_options**: `TOptions`

The options for configuring the shape, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:25](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L25)

***

### \_style

> `protected` **\_style**: `TStyle`

The style settings for the shape, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:22](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L22)

***

### observers

> `protected` **observers**: () => `void`[] = `[]`

List of observer functions to be notified on shape changes.

#### Defined in

[shapes/Shape.ts:28](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L28)

## Accessors

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

#### Defined in

[shapes/Shape.ts:145](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L145)

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

#### Defined in

[shapes/Shape.ts:127](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L127)

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

[shapes/Shape.ts:94](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L94)

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

[shapes/Shape.ts:105](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L105)

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

[shapes/Shape.ts:35](https://github.com/avolutions/canvas-painter/blob/00d8db8e44b2cee6c012969de9dc3ff816a38d9e/src/shapes/Shape.ts#L35)
