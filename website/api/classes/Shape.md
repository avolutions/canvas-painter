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

[shapes/Shape.ts:45](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L45)

## Properties

### \_definition

> `protected` **\_definition**: `TDefinition`

The shape definition, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L20)

***

### \_options

> `protected` **\_options**: `TOptions`

The options for configuring the shape, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:26](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L26)

***

### \_style

> `protected` **\_style**: `TStyle`

The style settings for the shape, proxied to trigger observer notifications on change.

#### Defined in

[shapes/Shape.ts:23](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L23)

***

### observers

> `protected` **observers**: () => `void`[] = `[]`

List of observer functions to be notified on shape changes.

#### Defined in

[shapes/Shape.ts:29](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L29)

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

[shapes/Shape.ts:165](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L165)

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

[shapes/Shape.ts:147](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L147)

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

[shapes/Shape.ts:114](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L114)

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

[shapes/Shape.ts:125](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L125)

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

[shapes/Shape.ts:36](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L36)

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

[shapes/Shape.ts:96](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L96)

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

[shapes/Shape.ts:105](https://github.com/avolutions/canvas-painter/blob/main/src/shapes/Shape.ts#L105)
