Class representing a circle definition.

## Extends

- [`ShapeDefinition`](ShapeDefinition.md)

## Constructors

### new CircleDefinition()

> **new CircleDefinition**(`center`, `radius`): [`CircleDefinition`](CircleDefinition.md)

Creates an instance of CircleDefinition.

#### Parameters

• **center**: [`Point`](Point.md)

The center point of the circle.

• **radius**: `number`

The radius of the circle.

#### Returns

[`CircleDefinition`](CircleDefinition.md)

#### Overrides

[`ShapeDefinition`](ShapeDefinition.md).[`constructor`](ShapeDefinition.md#constructors)

#### Defined in

[definitions/CircleDefinition.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/CircleDefinition.ts#L20)

## Properties

### center

> **center**: [`Point`](Point.md)

The center point of the circle.

#### Defined in

[definitions/CircleDefinition.ts:9](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/CircleDefinition.ts#L9)

## Accessors

### radius

> `get` **radius**(): `number`

Gets the radius of the definition.

> `set` **radius**(`radius`): `void`

Sets the radius of the definition.

#### Throws

Throws if negative radius is passed.

#### Parameters

• **radius**: `number`

The new radius of the definition.

#### Returns

`number`

The radius of the definition.

#### Defined in

[definitions/CircleDefinition.ts:35](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/CircleDefinition.ts#L35)

## Methods

### toArray()

> **toArray**(): `any`[]

Converts the object's properties to an array. If any of the properties
are objects that implement ISerializable, their `toArray` method is called.

#### Returns

`any`[]

An array representation of the object's properties.

#### Inherited from

[`ShapeDefinition`](ShapeDefinition.md).[`toArray`](ShapeDefinition.md#toarray)

#### Defined in

[common/Serializable.ts:16](https://github.com/avolutions/canvas-painter/blob/main/src/common/Serializable.ts#L16)

***

### toJson()

> **toJson**(): `string`

Converts the object to a JSON string. If any of the properties
are objects that implement ISerializable, their `toJson` method is called.
Underscores e.g. of private members are trimmed when setting the serialized name.

#### Returns

`string`

A JSON string representation of the object.

#### Inherited from

[`ShapeDefinition`](ShapeDefinition.md).[`toJson`](ShapeDefinition.md#tojson)

#### Defined in

[common/Serializable.ts:32](https://github.com/avolutions/canvas-painter/blob/main/src/common/Serializable.ts#L32)
