---
sidebar_position: 1
---

# Point

The `Point` class represents a 2D point in a coordinate system with `x` and `y` coordinates. It provides a simple and efficient way to define positions or locations on the canvas. Points are fundamental when working with shapes, allowing you to specify where a shape starts, where it should be drawn, or how it should be transformed.

## Properties

- **x**: The `x`-coordinate of the point, representing its horizontal position on the canvas.
- **y**: The `y`-coordinate of the point, representing its vertical position on the canvas.

Both properties are accessible as numbers and can be modified directly.

## Example usage

Here is an example of how to create a `Point` and use it in **CanvasPainter.js**:

```js
import { Point } from '@avolutions/canvas-painter';

// Creating a point at coordinates (50, 100)
const point = new Point(50, 100);

console.log(`Point coordinates: (${point.x}, ${point.y})`);
// Output: Point coordinates: (50, 100)
```

Points are particularly useful when defining the position of shapes, calculating distances between elements, or working with transformations.

### Use cases

- **Shape Positioning**: Points can be used to specify the starting position of shapes like rectangles, circles, or lines.
- **Mouse Interaction**: Points can capture the coordinates of mouse events, such as when a user clicks or drags an element on the canvas.
- **Transformations**: Points are essential when applying transformations like translations or rotations, as they define how shapes move or rotate around a specific point.

In summary, the `Point` class provides a simple yet powerful way to work with coordinates in a 2D space, making it a key building block when using **CanvasPainter.js** for drawing and manipulating shapes.
