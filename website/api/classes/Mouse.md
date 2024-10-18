A utility class for handling mouse-related events.

## Constructors

### new Mouse()

> **new Mouse**(): [`Mouse`](Mouse.md)

#### Returns

[`Mouse`](Mouse.md)

## Methods

### getClientPosition()

> `static` **getClientPosition**(`event`): [`Point`](Point.md)

Gets the position of the mouse relative to the viewport (visible area of the browser window).

#### Parameters

• **event**: `MouseEvent`

The MouseEvent object that contains the mouse event data.

#### Returns

[`Point`](Point.md)

A Point object representing the X and Y coordinates relative to the viewport.

#### Defined in

[types/Mouse.ts:24](https://github.com/avolutions/canvas-painter/blob/main/src/types/Mouse.ts#L24)

***

### getOffsetPosition()

> `static` **getOffsetPosition**(`event`): [`Point`](Point.md)

Gets the position of the mouse relative to the element that triggered the event.

#### Parameters

• **event**: `MouseEvent`

The MouseEvent object that contains the mouse event data.

#### Returns

[`Point`](Point.md)

A Point object representing the X and Y coordinates relative to the event target.

#### Defined in

[types/Mouse.ts:14](https://github.com/avolutions/canvas-painter/blob/main/src/types/Mouse.ts#L14)

***

### getPagePosition()

> `static` **getPagePosition**(`event`): [`Point`](Point.md)

Gets the position of the mouse relative to the entire document, including the scroll position.

#### Parameters

• **event**: `MouseEvent`

The MouseEvent object that contains the mouse event data.

#### Returns

[`Point`](Point.md)

A Point object representing the X and Y coordinates relative to the document.

#### Defined in

[types/Mouse.ts:34](https://github.com/avolutions/canvas-painter/blob/main/src/types/Mouse.ts#L34)

***

### getScreenPosition()

> `static` **getScreenPosition**(`event`): [`Point`](Point.md)

Gets the position of the mouse relative to the entire screen (including monitor setup).

#### Parameters

• **event**: `MouseEvent`

The MouseEvent object that contains the mouse event data.

#### Returns

[`Point`](Point.md)

A Point object representing the X and Y coordinates relative to the screen.

#### Defined in

[types/Mouse.ts:44](https://github.com/avolutions/canvas-painter/blob/main/src/types/Mouse.ts#L44)
