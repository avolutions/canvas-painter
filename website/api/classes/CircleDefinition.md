Class representing a circle definition.

## Implements

- [`IShapeDefinition`](../interfaces/IShapeDefinition.md)

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

[definitions/CircleDefinition.ts:33](https://github.com/avolutions/canvas-painter/blob/main/src/definitions/CircleDefinition.ts#L33)
