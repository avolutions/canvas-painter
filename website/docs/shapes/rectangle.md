---
sidebar_position: 1
---

# Rectangle

The rectangle is one of the most fundamental shapes in the **CanvasPainter** library. It can be drawn in different ways depending on the use case, such as using the top-left corner as a reference point or using the center. This chapter will guide you through setting up and drawing rectangles using **CanvasPainter**, showcasing different configurations and illustrating the rendered output.

## Usage

A new rectangle shape is created using the `Rectangle` constructor.

```javascript
import { Rectangle } from '@avolutions/canvas-painter';

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

The detailed API documentation for `Rectangle` can be found [here](../../api/classes/Rectangle).

## Draw a basic rectangle

The simplest use case is drawing a rectangle by specifying the `x`, `y`, `width` and `height`. By default `x` and `y` specify the top-left corner of the rectangle.

```javascript
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height
const rectangle = new Rectangle(150, 75, 100, 50)

canvas.draw(rectangle);
```

**Rendered Output:**

![Rectangle](./img/draw_basis_rectangle.png)

In this example we draw a rectangle with a size of 100 x 50 pixels where the top-left corner is at _x = 150_ and _y = 75_.

## Draw a centered rectangle

In some cases, you might want to center the rectangle on a specific point. The Rectangle class supports this by allowing the center to be passed instead of the top-left corner.

```javascript
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height, rotation, style, options
const rectangle = new Rectangle(150, 75, 100, 50, 0, null, { centered: true });

canvas.draw(rectangle);
```

**Rendered Output:**

![Centered Rectangle](./img/draw_centered_rectangle.png)

In this example we draw a rectangle with a size of 100 x 50 pixels where the center is at _x = 150_ and _y = 75_ by setting the option `centered`.

## Draw a rotated rectangle

In some cases, you may need to draw rectangles at angles other than the default 0 degrees. This can easily be archived by setting the `rotation` via constructor. The `rotation` is defined as degrees in clockwise direction. To rotate counter clockwise just pass a negative value. If `centered` option is specified the rectangle is rotated around the center and not top-left corner.

```javascript
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height, rotation
const rectangle = new Rectangle(150, 30, 100, 50, 45);

canvas.draw(rectangle);
```

**Rendered Output:**

![Rotated Rectangle](./img/draw_rotated_rectangle.png)

In this example, the rectangle is rotated 45 degrees clockwise around its top-left corner.

## Modify a rectangle

In this chapter, you'll learn how to update a rectangle's properties such as its `width`, `height`, `position`, `rotation` and `style` using the setters provided by **CanvasPainter**. Additionally, you'll explore how to use methods like `setSize()`, `resize()`, `move()`, and `rotate()` to dynamically update the rectangle's attributes.

There are two different ways to modify the rectangle definition:
1. Set the properties directly to a new value
2. Using helper methods to modify the properties by a given delta

```javascript
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height
const rectangle = new Rectangle(150, 100, 100, 50);

// Properties
rectangle.width = 50; // Set width to 50px
rectangle.height = 25; // Set height to 25px

// Methods
rectangle.setSize(50, 25); // Set width to 50px and height to 25px
```

### Available properties

Property | Description | Example
--- | --- | ---
`width` | Sets the width of the rectangle. | `rectangle.width = 50;`
`height` | Sets the height of the rectangle. | `rectangle.height = 50;`
`position` | Sets the position (x and/or y) of the rectangle. | `rectangle.position = { x: 50, y: 50 };`<br />`rectangle.position.x = 50`
`rotation` | Sets the rotation of the rectangle in degrees clockwise. | `rectangle.rotation = 45;`
`style` | Sets the style attributes of the rectangle. | `rectangle.style = { color: "red" };`<br />`rectangle.style.color = "red";`
`options` | Sets the options attributes of the rectangle. | `rectangle.options = { centered: false };`<br />`rectangle.options.centered = false;`

### Available methods

Method | Description | Example
--- | --- | ---
`setSize()` | Updates the size of the rectangle by setting new width and height values. | `rectangle.setSize(50, 50);`
`resize()` | Resizes the rectangle by adjusting the current width and height by delta values. | `rectangle.resize(10, -5);`
`move()` | Moves the rectangle by adjusting the current position by delta values. | `rectangle.move(20, -10);`
`rotate()` | Rotates the rectangle by adjusting its current angle. |  `rectangle.rotate(45);`

## Get properties of a rectangle

In addition to manipulating a rectangle's properties, **CanvasPainter** allows you to retrieve the current values of its attributes such as `width`, `height`, `position`, `rotation` and `style`.

```javascript
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');

// x, y, width, height
const rectangle = new Rectangle(150, 100, 100, 50);

const width = rectangle.width; // Get current width: 150
```

### Available properties

Property | Description | Example
--- | --- | ---
`width` | Gets the width of the rectangle as number. | `const width = rectangle.width;`
`height` | Gets the height of the rectangle as number. | `const height = rectangle.height;`
`position` | Gets an [Point](../../api/classes/Point) object representing the position of the rectangle. | `const position = rectangle.position;`<br />`const x = position.x;`
`angle` | Gets an [Angle](../../api/classes/Angle) object representing the rotation angle of the rectangle. | `const angle = rectangle.angle;`<br />`const radians = angle.radians;`
`rotation` | Gets the rotation of the rectangle as number indication degrees in clockwise direction. | `const rotation = rectangle.rotation;`
`style` | Gets a [RectangleStyle](../../api/classes/RectangleStyle) object representing the style of the rectangle. | `const style = rectangle.style;`<br />`const color = rectangle.style.color;`
`options` | Gets a [RectangleOptions](../../api/classes/RectangleOptions) object representing the options of the rectangle. | `const options = rectangle.options;`<br />`const centered = rectangle.options.centered;`

## Serialize a rectangle

The `Rectangle` shape in **CanvasPainter.js** can be serialized into both array and JSON formats using the `toArray()` and `toJson()` methods. These methods allow you to easily convert the rectangle’s definition into standard formats for saving, exporting, or transmitting data.

### Serialize to array

The `toArray` method converts the rectangle's definition into an array. This can be useful when you need a lightweight representation of the point, or when you need to work with libraries or functions that expect data in array format.

```js
const rectangle = new Rectangle(10, 10, 20, 20);
rectangle.toArray();
```

This will give you an array in this format:

```js
[
  [x, y], // position
  width,  // width
  height  // height
]
```

### Serialize to JSON

The `toJson()` method for a rectangle returns a structured JSON string that includes the rectangle’s definition. This format is ideal for working with APIs or saving to structured data formats.

```js
const rectangle = new Rectangle(10, 10, 20, 20);
rectangle.toJson();
```

This will give you a JSON string in this format:

```js
{
  position: {
    x: number,
    y: number
  },
  width: number,
  height: number
}
```

## Style

The following table is showing all available rectangle styles and the default values if no value was provided explicit.

Style | Type | Default | Explanation
--- | --- | --- | ---
`color` | string | '#000000' (black) | Sets the default fill color for the rectangle.
`borderColor` | string | '#000000' | Defines the color of rectangles border. Border is only shown if `borderColor` and `borderWidth` is provided.
`borderWidth` | number | 0 | Defines the width of rectangles border. Border is only shown if `borderColor` and `borderWidth` is provided.

You can specify styles for different shape states by providing a unique set of properties under each state (e.g., hover, selected, active). Each state-specific style overrides the default only while the shape is in that state.

```js
{
  color: '#000000',
  borderColor: '#000000',
  borderWidth: 0,
  hover: {
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 0
  }
}
```

## Options

The following table is showing all available rectangle options and the default values if no value was provided explicit.

Option | Type | Default | Explanation
--- | --- | --- | ---
`centered` | boolean | false | If `true`, the rectangle will be centered at the provided position.<br />If `false` or `undefined`, the rectangle will be positioned from the top-left corner.
`visible` | boolean | true | If `true`, the rectangle will be visible.<br />If `false` or `undefined`, the rectangle will be hidden.

```js
{
  centered: false,
  visible: true
}
```