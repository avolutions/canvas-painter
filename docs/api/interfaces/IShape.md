<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Methods](#methods)
  - [addObserver()](#addobserver)
  - [render()](#render)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Interface representing a shape that can be rendered on a canvas.

This interface defines methods for rendering the shape on a canvas and managing observers.

## Methods

### addObserver()

> **addObserver**(`observer`): `void`

Adds an observer function that will be called when the shape undergoes changes.

#### Parameters

• **observer**

A callback function to be invoked when the shape's state changes.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:19](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/IShape.ts#L19)

***

### render()

> **render**(`context`): `void`

Renders the shape to a given canvas context.

#### Parameters

• **context**: `CanvasRenderingContext2D`

The 2D rendering context of the canvas where the shape will be drawn.

#### Returns

`void`

#### Defined in

[shapes/IShape.ts:12](https://github.com/avolutions/canvas-painter/blob/8662e7c583541591af74809f74056e5e590e4a38/src/shapes/IShape.ts#L12)
