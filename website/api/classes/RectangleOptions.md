Options for configuring the behavior of a rectangle shape.

## Implements

- [`IRectangleOptions`](../interfaces/IRectangleOptions.md)

## Constructors

### new RectangleOptions()

> **new RectangleOptions**(`options`): [`RectangleOptions`](RectangleOptions.md)

Creates a new instance of RectangleOptions.

#### Parameters

• **options**: `Partial`\<[`IRectangleOptions`](../interfaces/IRectangleOptions.md)\> = `{}`

The partial options provided by the user.

#### Returns

[`RectangleOptions`](RectangleOptions.md)

#### Defined in

[options/RectangleOptions.ts:43](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L43)

## Properties

### centered

> **centered**: `boolean`

If true, the rectangle will be centered at the provided position.
If false or undefined, the rectangle will be positioned from the top-left corner.

#### Implementation of

[`IRectangleOptions`](../interfaces/IRectangleOptions.md).[`centered`](../interfaces/IRectangleOptions.md#centered)

#### Defined in

[options/RectangleOptions.ts:28](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L28)

***

### draggable

> **draggable**: `boolean`

Determines if the shape can be dragged by mouse.

#### Implementation of

[`IRectangleOptions`](../interfaces/IRectangleOptions.md).[`draggable`](../interfaces/IRectangleOptions.md#draggable)

#### Defined in

[options/RectangleOptions.ts:17](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L17)

***

### selectable

> **selectable**: `boolean`

Determines if the shape can be selected.

#### Implementation of

[`IRectangleOptions`](../interfaces/IRectangleOptions.md).[`selectable`](../interfaces/IRectangleOptions.md#selectable)

#### Defined in

[options/RectangleOptions.ts:22](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L22)

***

### visible

> **visible**: `boolean`

Determines if the shape should be visible or not.

#### Implementation of

[`IRectangleOptions`](../interfaces/IRectangleOptions.md).[`visible`](../interfaces/IRectangleOptions.md#visible)

#### Defined in

[options/RectangleOptions.ts:12](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L12)

***

### DefaultOptions

> `readonly` `static` **DefaultOptions**: [`IRectangleOptions`](../interfaces/IRectangleOptions.md)

Default options for the rectangle.

#### Defined in

[options/RectangleOptions.ts:33](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L33)
