Class representing an angle, which can be defined in degrees or radians.
Provides functionality for normalization and angle adjustments.

## Implements

- [`ISerializable`](../interfaces/ISerializable.md)

## Constructors

### new Angle()

> **new Angle**(`degrees`, `normalized`): [`Angle`](Angle.md)

Constructs an Angle instance.

#### Parameters

• **degrees**: `number`

The initial angle in degrees.

• **normalized**: `boolean` = `false`

Whether the angle should be normalized to the range [0, 360).

#### Returns

[`Angle`](Angle.md)

#### Defined in

[types/Angle.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L20)

## Accessors

### degrees

> `get` **degrees**(): `number`

Gets the current angle in degrees.

> `set` **degrees**(`degrees`): `void`

Sets the angle in degrees, optionally normalizing it if required.

#### Parameters

• **degrees**: `number`

The new angle in degrees.

#### Returns

`number`

The angle in degrees.

#### Defined in

[types/Angle.ts:61](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L61)

***

### radians

> `get` **radians**(): `number`

Gets the current angle in radians.

> `set` **radians**(`radians`): `void`

Sets the angle in radians by converting it to degrees.

#### Parameters

• **radians**: `number`

The new angle in radians.

#### Returns

`number`

The angle in radians.

#### Defined in

[types/Angle.ts:69](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L69)

## Methods

### adjustBy()

> **adjustBy**(`degrees`): `void`

Adjusts the angle by a given number of degrees.

#### Parameters

• **degrees**: `number`

The amount to adjust the angle by, in degrees.

#### Returns

`void`

#### Defined in

[types/Angle.ts:138](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L138)

***

### adjustByRadians()

> **adjustByRadians**(`radians`): `void`

Adjusts the angle by a given number of radians.

#### Parameters

• **radians**: `number`

The amount to adjust the angle by, in radians.

#### Returns

`void`

#### Defined in

[types/Angle.ts:146](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L146)

***

### getNormalized()

> **getNormalized**(): `number`

Gets the normalized value of the angle in degrees.

#### Returns

`number`

The normalized angle in degrees.

#### Defined in

[types/Angle.ts:130](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L130)

***

### isNormalized()

> **isNormalized**(): `boolean`

Checks if the angle is normalized.

#### Returns

`boolean`

True if the angle is normalized, false otherwise.

#### Defined in

[types/Angle.ts:122](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L122)

***

### normalize()

> **normalize**(): `void`

Normalizes the angle to the range [0, 360).

#### Returns

`void`

#### Defined in

[types/Angle.ts:113](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L113)

***

### toArray()

> **toArray**(): (`number` \| `boolean`)[]

Serializes the object’s properties into an array, consisting of
the degrees, radians, and the result of the `isNormalized()` method.

#### Returns

(`number` \| `boolean`)[]

An array containing the degrees as a number,
the radians as a number, and the result of `isNormalized()` as a boolean.

#### Implementation of

[`ISerializable`](../interfaces/ISerializable.md).[`toArray`](../interfaces/ISerializable.md#toarray)

#### Defined in

[types/Angle.ts:32](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L32)

***

### toJson()

> **toJson**(): `string`

Serializes the object’s properties into a JSON string. The JSON object contains
the degrees, radians, and the result of the `isNormalized()` method.

#### Returns

`string`

A JSON string representation of the object, including degrees,
radians, and whether it is normalized.

#### Implementation of

[`ISerializable`](../interfaces/ISerializable.md).[`toJson`](../interfaces/ISerializable.md#tojson)

#### Defined in

[types/Angle.ts:47](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L47)

***

### degreesToRadians()

> `static` **degreesToRadians**(`degrees`): `number`

Converts degrees to radians.

#### Parameters

• **degrees**: `number`

The angle in degrees.

#### Returns

`number`

The angle in radians.

#### Defined in

[types/Angle.ts:155](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L155)

***

### fromDegrees()

> `static` **fromDegrees**(`degrees`, `normalized`): [`Angle`](Angle.md)

Creates a new Angle instance from degrees.

#### Parameters

• **degrees**: `number`

The angle in degrees.

• **normalized**: `boolean` = `false`

Whether the angle should be normalized.

#### Returns

[`Angle`](Angle.md)

A new Angle instance.

#### Defined in

[types/Angle.ts:95](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L95)

***

### fromRadians()

> `static` **fromRadians**(`radians`, `normalized`): [`Angle`](Angle.md)

Creates a new Angle instance from radians.

#### Parameters

• **radians**: `number`

The angle in radians.

• **normalized**: `boolean` = `false`

Whether the angle should be normalized.

#### Returns

[`Angle`](Angle.md)

A new Angle instance.

#### Defined in

[types/Angle.ts:105](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L105)

***

### normalize()

> `static` **normalize**(`degrees`): `number`

Normalizes an angle to the range [0, 360).

#### Parameters

• **degrees**: `number`

The angle in degrees.

#### Returns

`number`

The normalized angle in degrees.

#### Defined in

[types/Angle.ts:173](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L173)

***

### radiansToDegrees()

> `static` **radiansToDegrees**(`radians`): `number`

Converts radians to degrees.

#### Parameters

• **radians**: `number`

The angle in radians.

#### Returns

`number`

The angle in degrees.

#### Defined in

[types/Angle.ts:164](https://github.com/avolutions/canvas-painter/blob/main/src/types/Angle.ts#L164)
