Options for configuring the pan behavior of a canvas.

## Implements

- [`IPanOptions`](../interfaces/IPanOptions.md)

## Constructors

### new PanOptions()

> **new PanOptions**(`options`): [`PanOptions`](PanOptions.md)

Creates a new instance of PanOptions.

#### Parameters

• **options**: `Partial`\<[`IPanOptions`](../interfaces/IPanOptions.md)\> = `{}`

The partial options provided by the user.

#### Returns

[`PanOptions`](PanOptions.md)

#### Defined in

[options/PanOptions.ts:31](https://github.com/avolutions/canvas-painter/blob/main/src/options/PanOptions.ts#L31)

## Properties

### mouseButtons

> **mouseButtons**: [`MouseButton`](../enumerations/MouseButton.md)[]

List of mouse buttons that are used for panning.

#### Implementation of

[`IPanOptions`](../interfaces/IPanOptions.md).[`mouseButtons`](../interfaces/IPanOptions.md#mousebuttons)

#### Defined in

[options/PanOptions.ts:11](https://github.com/avolutions/canvas-painter/blob/main/src/options/PanOptions.ts#L11)

***

### useMouse

> **useMouse**: `boolean`

Whether panning with the mouse is enabled.

#### Implementation of

[`IPanOptions`](../interfaces/IPanOptions.md).[`useMouse`](../interfaces/IPanOptions.md#usemouse)

#### Defined in

[options/PanOptions.ts:16](https://github.com/avolutions/canvas-painter/blob/main/src/options/PanOptions.ts#L16)

***

### DefaultOptions

> `readonly` `static` **DefaultOptions**: [`IPanOptions`](../interfaces/IPanOptions.md)

Default pan options.

#### Defined in

[options/PanOptions.ts:21](https://github.com/avolutions/canvas-painter/blob/main/src/options/PanOptions.ts#L21)
