- [Introduction](#introduction)
- [Usage](#usage)
- [Draw a basic rectangle](#draw-a-basic-rectangle)
  - [Example code:](#example-code)
  - [Rendered Output:](#rendered-output)
- [Draw a centered rectangle](#draw-a-centered-rectangle)
  - [Example Code:](#example-code-1)
  - [Rendered Output:](#rendered-output-1)
- [Draw a rotated rectangle](#draw-a-rotated-rectangle)
  - [Example Code:](#example-code-2)
  - [Rendered Output:](#rendered-output-2)
- [Modify a rectangle](#modify-a-rectangle)
  - [Example Code:](#example-code-3)
- [Styles](#styles)
- [Options](#options)

## Introduction

The rectangle is one of the most fundamental shapes in the **CanvasPainter** library. It can be drawn in different ways depending on the use case, such as using the top-left corner as a reference point or using the center. This chapter will guide you through setting up and drawing rectangles using **CanvasPainter**, showcasing different configurations and illustrating the rendered output.

## Usage

A new rectangle shape is created using the `Rectangle` constructor.

```typescript
import { Rectangle } from 'canvas-painter';

const rectangle = new Rectangle(
  x,        // The x-coordinate of the rectangle's position.
  y,        // The y-coordinate of the rectangle's position.
  width,    // The width of the rectangle.
  height,   // The height of the rectangle.
  rotation, // (optional) The initial rotation of the rectangle in degrees clockwise.
  style,    // (optional) Style properties for this rectangle.
  options   // (optional) Options for this rectangle.
);
```

The detailed API documentation for `Rectangle` can be found here: https://avolutions.github.io/canvas-painter/api/classes/Rectangle.html

## Draw a basic rectangle

The simplest use case is drawing a rectangle by specifying the `x`, `y`, `width` and `height`. By default `x` and `y` specify the top-left corner of the rectangle.

### Example code:

```typescript
import { Canvas, Rectangle } from 'canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height
const rectangle = new Rectangle(150, 75, 100, 50)

canvas.draw(rectangle);
```

### Rendered Output:
![Rectangle](./assets/images/rectangle/draw_basis_rectangle.png)

In this example we draw a rectangle with a size of 100 x 50 pixels where the top-left corner is at x = 150 and y = 75.

## Draw a centered rectangle

In some cases, you might want to center the rectangle on a specific point. The Rectangle class supports this by allowing the center to be passed instead of the top-left corner.

### Example Code:

```typescript
import { Canvas, Rectangle } from 'canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height, rotation, style, options
const rectangle = new Rectangle(150, 75, 100, 50, 0, null, { centered: true });

canvas.draw(rectangle);
```

### Rendered Output:
![Centered Rectangle](./assets/images/rectangle/draw_centered_rectangle.png)

In this example we draw a rectangle with a size of 100 x 50 pixels where the center is at `x` = 150 and `y` = 75 by setting the option `centered`.

## Draw a rotated rectangle

In some cases, you may need to draw rectangles at angles other than the default 0 degrees. This can easily be archived by setting the `rotation` via constructor. The `rotation` is defined as degrees in clockwise direction. To rotate counter clockwise just pass a negative value. If `centered` option is specified the rectangle is rotated around the center and not top-left corner.

### Example Code:

```typescript
import { Canvas, Rectangle } from 'canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height, rotation
const rectangle = new Rectangle(150, 30, 100, 50, 45);

canvas.draw(rectangle);
```

### Rendered Output:
![Centered Rectangle](./assets/images/rectangle/draw_centered_rectangle.png)

In this example, the rectangle is rotated 45 degrees clockwise around its top-left corner.

## Modify a rectangle

In this chapter, you'll learn how to update a rectangle's properties such as its `width`, `height`, `position`, `rotation` and `style` using the setters provided by **CanvasPainter**. Additionally, you'll explore how to use methods like `setSize()`, `resize()`, `move()`, and `rotate()` to dynamically update the rectangle's attributes.

There are two different ways to modify the rectangle definition:
1. Set the properties directly to a new value
2. Using helper methods to modify the properties by a given delta

### Example Code:

```typescript
import { Canvas, Rectangle } from 'canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height
const rectangle = new Rectangle(150, 100, 100, 50);

// Set new property values
rectangle.width = 50; // Set width to 50px
rectangle.height = 25; // Set height to 25px
rectangle.position = { x: 100, y: 50 } // Set x to 100 and y to 50
rectangle.position.x = 100; // Set x to 100
rectangle.position.y = 50; // Set y to 50
rectangle.rotation = 45; // Set rotation to 45 degrees clockwise
rectangle.style = { color: "red" } // Set color to "red"
rectangle.style.color = "red"; // Set color to "red"

// Using helper functions
rectangle.setSize(50, 25); // Set width to 50px and height to 25px
rectangle.resize(10, -15); // Increase the current width by 10px and decrease the current height by 15px
rectangle.move(-20, 25); // Changes the current x-position by -20 and the current y-position by 25
rectangle.rotate(20); // Increases the current rotation by 20 degrees
```

## Styles

## Options
