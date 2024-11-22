Options for configuring the behavior of a line shape.

## Implements

- [`ILineOptions`](../interfaces/ILineOptions.md)

## Constructors

### new LineOptions()

> **new LineOptions**(`options`): [`LineOptions`](LineOptions.md)

Creates a new instance of LineOptions.

#### Parameters

• **options**: `Partial`\<[`ILineOptions`](../interfaces/ILineOptions.md)\> = `{}`

The partial options provided by the user.

#### Returns

[`LineOptions`](LineOptions.md)

#### Defined in

[options/LineOptions.ts:35](https://github.com/avolutions/canvas-painter/blob/main/src/options/LineOptions.ts#L35)

## Properties

### draggable

> **draggable**: `boolean`

Determines if the shape can be dragged by mouse.

#### Implementation of

[`ILineOptions`](../interfaces/ILineOptions.md).[`draggable`](../interfaces/ILineOptions.md#draggable)

#### Defined in

[options/LineOptions.ts:16](https://github.com/avolutions/canvas-painter/blob/main/src/options/LineOptions.ts#L16)

***

### selectable

> **selectable**: `boolean`

Determines if the shape can be selected.

#### Implementation of

[`ILineOptions`](../interfaces/ILineOptions.md).[`selectable`](../interfaces/ILineOptions.md#selectable)

#### Defined in

[options/LineOptions.ts:21](https://github.com/avolutions/canvas-painter/blob/main/src/options/LineOptions.ts#L21)

***

### visible

> **visible**: `boolean`

Determines if the shape should be visible or not.

#### Implementation of

[`ILineOptions`](../interfaces/ILineOptions.md).[`visible`](../interfaces/ILineOptions.md#visible)

#### Defined in

[options/LineOptions.ts:11](https://github.com/avolutions/canvas-painter/blob/main/src/options/LineOptions.ts#L11)

***

### DefaultOptions

> `readonly` `static` **DefaultOptions**: [`ILineOptions`](../interfaces/ILineOptions.md)

Default options for the line.

#### Defined in

[options/LineOptions.ts:26](https://github.com/avolutions/canvas-painter/blob/main/src/options/LineOptions.ts#L26)
