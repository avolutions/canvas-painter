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

## Moving a Point

There are several methods available to move a point either horizontally, vertically, or in both directions.

The `move()` method allows you to move the point by specified amounts along both the x-axis and the y-axis. If no values are provided, the point remains in the same position.

```typescript
const point = new Point(5, 10);
point.move(2, 3); // Moves the point 2 units to the right and 3 units up

console.log(point.x); // Outputs: 7
console.log(point.y); // Outputs: 13
```

### Moving horizontally

The `moveX()` method allows you to move the point along the x-axis by a specified amount. The point’s y-coordinate remains unchanged.

```js
const point = new Point(5, 10);
point.moveX(3); // Same as point.move(3, 0);

console.log(point.x); // Outputs: 8
console.log(point.y); // Outputs: 10
```

### Moving vertically

The `moveY()` method allows you to move the point along the y-axis by a specified amount. The point’s x-coordinate remains unchanged.

```js
const point = new Point(5, 10);
point.moveY(-4); // Same as point.move(0, -4);

console.log(point.x); // Outputs: 5
console.log(point.y); // Outputs: 6
```

## Serialize point

When working with points in **CanvasPainter.js**, you might need to serialize them into different formats for various purposes, such as saving state, sending data to a server, or exporting canvas elements. The `Point` class provides two convenient methods for serializing its data: `toArray()` and `toJson()`.

### Serialize to array

The `toArray` method converts the point's `x` and `y` coordinates into an array. This can be useful when you need a lightweight representation of the point, or when you need to work with libraries or functions that expect data in array format.

```js
const point = new Point(50, 100);
point.toArray(); // [50, 100]
```

### Serialize to JSON

The `toJson` method converts the point into a JSON object, which is useful when you need a more descriptive format or when interacting with APIs or data formats that require JSON.

```js
const point = new Point(50, 100);
point.toJson(); // { x: 50, y: 100 }
```

## Use cases

- **Shape Positioning**: Points can be used to specify the starting position of shapes like rectangles, circles, or lines.
- **Mouse Interaction**: Points can capture the coordinates of mouse events, such as when a user clicks or drags an element on the canvas.
- **Transformations**: Points are essential when applying transformations like translations or rotations, as they define how shapes move or rotate around a specific point.

In summary, the `Point` class provides a simple yet powerful way to work with coordinates in a 2D space, making it a key building block when using **CanvasPainter.js** for drawing and manipulating shapes.
