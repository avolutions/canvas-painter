Class representing an angle, which can be defined in degrees or radians.
Provides functionality for normalization and angle adjustments.

## Constructors

### new Angle()

> **new Angle**(`degrees`, `normalized`?): [`Angle`](Angle.md)

Constructs an Angle instance.

#### Parameters

• **degrees**: `number`

The initial angle in degrees.

• **normalized?**: `boolean` = `false`

Whether the angle should be normalized to the range [0, 360).

#### Returns

[`Angle`](Angle.md)

#### Defined in

[types/Angle.ts:18](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L18)

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

[types/Angle.ts:27](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L27)

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

[types/Angle.ts:35](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L35)

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

[types/Angle.ts:104](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L104)

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

[types/Angle.ts:112](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L112)

***

### getNormalized()

> **getNormalized**(): `number`

Gets the normalized value of the angle in degrees.

#### Returns

`number`

The normalized angle in degrees.

#### Defined in

[types/Angle.ts:96](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L96)

***

### isNormalized()

> **isNormalized**(): `boolean`

Checks if the angle is normalized.

#### Returns

`boolean`

True if the angle is normalized, false otherwise.

#### Defined in

[types/Angle.ts:88](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L88)

***

### normalize()

> **normalize**(): `void`

Normalizes the angle to the range [0, 360).

#### Returns

`void`

#### Defined in

[types/Angle.ts:79](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L79)

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

[types/Angle.ts:121](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L121)

***

### fromDegrees()

> `static` **fromDegrees**(`degrees`, `normalized`?): [`Angle`](Angle.md)

Creates a new Angle instance from degrees.

#### Parameters

• **degrees**: `number`

The angle in degrees.

• **normalized?**: `boolean` = `false`

Whether the angle should be normalized.

#### Returns

[`Angle`](Angle.md)

A new Angle instance.

#### Defined in

[types/Angle.ts:61](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L61)

***

### fromRadians()

> `static` **fromRadians**(`radians`, `normalized`?): [`Angle`](Angle.md)

Creates a new Angle instance from radians.

#### Parameters

• **radians**: `number`

The angle in radians.

• **normalized?**: `boolean` = `false`

Whether the angle should be normalized.

#### Returns

[`Angle`](Angle.md)

A new Angle instance.

#### Defined in

[types/Angle.ts:71](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L71)

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

[types/Angle.ts:139](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L139)

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

[types/Angle.ts:130](https://github.com/avolutions/canvas-painter/blob/56aac324567e77d4cae245ef30e1d3386af5f8f9/src/types/Angle.ts#L130)
