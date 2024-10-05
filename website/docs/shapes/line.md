---
sidebar_position: 3
---

# Line

The `Line` shape in **CanvasPainter.js** allows you to create and render straight lines on a canvas. It is flexible in terms of how you can define it — either by passing `Point` objects for the start and end positions or by specifying the individual coordinates directly. The line can also be styled using the `LineStyle`, allowing you to control its appearance on the canvas.

## Usage

A new line shape is created using one of the `Line` constructors.

```js
import { Line } from '@avolutions/canvas-painter';

const line = new Line(
  start,    // A Point representing the start position of the line
  end,      // A Point representing the end position of the line
  style,    // (optional) Style properties for this line.
);
```

```js
import { Line } from '@avolutions/canvas-painter';

const line = new Line(
  startX,   // The X-coordinate of the starting point.
  startY,   // The Y-coordinate of the starting point.
  endX,     // The X-coordinate of the ending point.
  endY,     // The Y-coordinate of the ending point.
  style,    // (optional) Style properties for this line.
);
```

The detailed API documentation for `Line` can be found [here](../../api/classes/Line).

## Draw a line using points

To draw a basic line you just need to provide a start and an end point.

```js
import { Canvas, Line, Point } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');

// Define the start and end points of the line
const startPoint = new Point(10, 75);
const endPoint = new Point(290, 75);

// Create the line
const line = new Line(startPoint, endPoint);

canvas.draw(line);
```

**Rendered Output:**

![Line](./img/draw_line.png)

In this example we draw a line from start (75, 10) to end (75, 290) using the default style (width = 1, color = black).

## Draw a line using individual coordinates

You can also specify a line by providing individual coordinates (`x` and `y`) for both the start and end positions.

```js
import { Canvas, Line, Point } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');

// Create the same line using coordinates
const line = new Line(75, 10, 75, 290) // start.x, start.y, end.x, end.y

canvas.draw(line);
```

**Rendered Output:**

![Line](./img/draw_line.png)

This example will give you the exact same output as the example where we use points as start and end.

## Modify a line

In this chapter, you'll learn how to update a line's properties such as its `start`, `end` and `style` using the setters provided by **CanvasPainter**. Additionally, you'll explore how to use methods like `moveStart()` and `moveEnd()` to dynamically update the line's attributes.

There are two different ways to modify the line definition:
1. Set the properties directly to a new value
2. Using helper methods to modify the properties by a given delta

### Available properties

Property | Description | Example
--- | --- | ---
`start` | Sets the start position of the line. | `line.start = new Point(5, 10);`<br />`line.start.x = 5;`
`end` | Sets the end position of the line. | `line.end = new Point(5, 10);`<br />`line.end.x = 5;`
`style` | Sets the style attributes of the line. | `line.style = { color: "red" };`<br />`line.style.color = "red";`

### Available methods

Method | Description | Example
--- | --- | ---
`moveStart()` | Moves the line start by adjusting the current position by delta values. | `line.moveStart(5, -10);`
`moveEnd()` | Moves the line end by adjusting the current position by delta values. | `line.moveEnd(-2, 7.5);`

## Get properties of a line

In addition to manipulating a line's properties, **CanvasPainter** allows you to retrieve the current values of its attributes such as `start`, `end` and `style`.

```js
import { Canvas, Line } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height
const line = new Line(150, 100, 100, 50);

const start = line.start; // Get current start as Point(150, 100)
```

### Available properties

Property | Description | Example
--- | --- | ---
`start` | Gets an [Point](../../api/classes/Point) object representing the start position of the line. | `const start = line.start;`<br />`const x = start.x;`
`end` | Gets an [Point](../../api/classes/Point) object representing the end position of the line. | `const end = line.end;`<br />`const x = end.x;`
`style` | Gets a [LineStyle](../../api/classes/LineStyle) object representing the style of the line. | `const style = line.style;`<br />`const color = line.style.color;`

## Style

The following table is showing all available line styles and the default values if no value was provided explicit.

Style | Default | Explanation
--- | --- | ---
`color` | '#000000' (black) | Sets the color for the line.
`width` | 1.0 | Defines the width of the line.
