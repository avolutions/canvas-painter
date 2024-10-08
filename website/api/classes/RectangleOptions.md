Options for configuring the behavior of a rectangle shape.

## Extends

- [`ShapeOptions`](ShapeOptions.md)

## Constructors

### new RectangleOptions()

> **new RectangleOptions**(`centered`?): [`RectangleOptions`](RectangleOptions.md)

Creates a new instance of RectangleOptions.

#### Parameters

• **centered?**: `boolean`

If true, the rectangle will be centered at the provided position.
                  If false or undefined, the rectangle will be positioned from the top-left corner.

#### Returns

[`RectangleOptions`](RectangleOptions.md)

#### Overrides

[`ShapeOptions`](ShapeOptions.md).[`constructor`](ShapeOptions.md#constructors)

#### Defined in

[options/RectangleOptions.ts:21](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L21)

## Properties

### centered?

> `optional` **centered**: `boolean`

If true, the rectangle will be centered at the provided position.
                  If false or undefined, the rectangle will be positioned from the top-left corner.

#### Defined in

[options/RectangleOptions.ts:22](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L22)

***

### visible?

> `optional` **visible**: `boolean`

If true, the shape will be visible.
                 If false or undefined, the shape will be hidden.

#### Inherited from

[`ShapeOptions`](ShapeOptions.md).[`visible`](ShapeOptions.md#visible)

#### Defined in

[options/ShapeOptions.ts:21](https://github.com/avolutions/canvas-painter/blob/main/src/options/ShapeOptions.ts#L21)

***

### DefaultOptions

> `readonly` `static` **DefaultOptions**: [`RectangleOptions`](RectangleOptions.md)

Default options for the rectangle.

#### Overrides

[`ShapeOptions`](ShapeOptions.md).[`DefaultOptions`](ShapeOptions.md#defaultoptions)

#### Defined in

[options/RectangleOptions.ts:10](https://github.com/avolutions/canvas-painter/blob/main/src/options/RectangleOptions.ts#L10)
