Base options for configuring the behavior of all shapes.

## Extended by

- [`CircleOptions`](CircleOptions.md)
- [`LineOptions`](LineOptions.md)
- [`RectangleOptions`](RectangleOptions.md)

## Implements

- [`IShapeOptions`](../interfaces/IShapeOptions.md)

## Constructors

### new ShapeOptions()

> **new ShapeOptions**(`visible`?): [`ShapeOptions`](ShapeOptions.md)

Creates a new instance of ShapeOptions.

#### Parameters

• **visible?**: `boolean`

If true, the shape will be visible.
                 If false or undefined, the shape will be hidden.

#### Returns

[`ShapeOptions`](ShapeOptions.md)

#### Defined in

[options/ShapeOptions.ts:20](https://github.com/avolutions/canvas-painter/blob/main/src/options/ShapeOptions.ts#L20)

## Properties

### visible?

> `optional` **visible**: `boolean`

If true, the shape will be visible.
                 If false or undefined, the shape will be hidden.

#### Implementation of

[`IShapeOptions`](../interfaces/IShapeOptions.md).[`visible`](../interfaces/IShapeOptions.md#visible)

#### Defined in

[options/ShapeOptions.ts:21](https://github.com/avolutions/canvas-painter/blob/main/src/options/ShapeOptions.ts#L21)

***

### DefaultOptions

> `readonly` `static` **DefaultOptions**: [`ShapeOptions`](ShapeOptions.md)

Default options for all shapes.

#### Defined in

[options/ShapeOptions.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/options/ShapeOptions.ts#L10)
