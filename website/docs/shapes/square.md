---
sidebar_position: 2
---

# Square

The square is a specialized version of a rectangle in **CanvasPainter.js**. It inherits most of the behavior of rectangle but is simplified by ensuring that both the width and height are always the same. Instead of specifying separate width and height values, you can use the `size` property that applies equally to both dimensions.

## Usage

A new square shape is created using the `Square` constructor.

When creating a new `Square`, you only need to provide a `size`, along with the `x` and `y` position, and any optional rotation or style.
This replaces the need to separately define width and height, making it more convenient when working with shapes that are guaranteed to have equal dimensions.

```javascript
import { Square } from '@avolutions/canvas-painter';

const square = new Square(
  x,        // The x-coordinate of the square's position.
  y,        // The y-coordinate of the square's position.
  size,    // The size (width/height) of the square.
  rotation, // (optional) The initial rotation of the square in degrees clockwise.
  style,    // (optional) Style properties for this square.
  options   // (optional) Options for this square.
);
```

The detailed API documentation for `Square` can be found [here](../../api/classes/Square).

## Size Management

In addition to the constructor, the `Square` class also overrides certain methods and properties from `Rectangle` related to size.

### Properties

#### Width and height

In a square, you cannot independently set the `width` or `height`. Both setters are overridden to ensure that setting one of these properties will automatically set both dimensions to the same value. For example, setting the width will also set the height, and vice versa.

```javascript
square.width = 15; // Sets width and height to 15
square.height = 20; // Sets width and height to 20
```

#### Size

A new `size` property is introduced, which allows you to directly set and get the size of the square. This property internally updates both the `width` and `height` in the shape definition:

```javascript
square.size = 25; // Sets width and height to 25
```

### Methods

#### setSize()

Square overrides the `setSize()` method from rectangle to only accept a single size parameter. This method sets both the `width` and `height` to the given size, ensuring the square remains equal on all sides.

```javascript
square.setSize(30); // Sets width and height to 30
```

#### resize()

Square overrides the `resize()` method from rectangle to only accept a single size parameter. This method increases both the `width` and `height` by the given delta, ensuring the square remains equal on all sides.

```javascript
square.resize(35); // Increases width and height by 30
```

## Summary

Except for the previous described behavior, the square shape behaves exactly like a rectangle, inheriting the same methods, rotation handling, and style options. The only difference is the simplified handling of dimensions, making it ideal for use cases where you need perfect squares.