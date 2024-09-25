<p align="center"><img src="https://avolutions.github.io/canvas-painter/img/logo.png" width="100"></p>

<h1 align="center">CanvasPainter.js</h1>

<p align="center">
  <a href="https://github.com/avolutions/canvas-painter/actions">
    <img src="https://github.com/avolutions/canvas-painter/actions/workflows/tests.yml/badge.svg" alt="Tests">
  </a>
  <a href="https://www.npmjs.com/package/@avolutions/canvas-painter">
    <img src="https://img.shields.io/npm/dw/@avolutions%2Fcanvas-painter" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/@avolutions/canvas-painter">
    <img src="https://img.shields.io/npm/v/@avolutions%2Fcanvas-painter" alt="Version">
  </a>
  <a href="https://github.com/avolutions/canvas-painter/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@avolutions%2Fcanvas-painter" alt="License">
  </a>
</p>

<p align="center">
  <a href="https://avolutions.github.io/canvas-painter">Website</a> |
  <a href="https://avolutions.github.io/canvas-painter/docs">User Guide</a> |
  <a href="https://avolutions.github.io/canvas-painter/api">API Documentation</a>
</p>

## About

**CanvasPainter.js** is a simple yet powerful JavaScript library for drawing basic shapes (rectangles, circles, etc.) on HTML5 Canvas with ease. Perfect for creating 2D graphics in your web projects.

The core idea behind **CanvasPainter.js** is to provide a simple way to work with shapes that are automatically rendered to the canvas. The package includes built-in shapes, such as rectangles and circles, that you can easily create and render. If a shape's properties (like position or size) change, the canvas is automatically updated without needing to manually call any `context.draw` methods. You can also create your own custom shapes or extending the default shapes functionality.

This approach simplifies drawing and keeps your code clean, but if you want full control or need advanced features, you can still access the standard Canvas 2D Context API through `Canvas.context` and use all of its methods directly.

## Installation

To install the **CanvasPainter.js** package, run the following command via [npm](https://npmjs.com/package/@avolutions/canvas-painter):

```bash
npm install @avolutions/canvas-painter
```

**CanvasPainter.js** is designed to be flexible and works with both CommonJS and ES Modules. You can include it in your project using either of these systems based on your environment.

For **CommonJS**:
```js
const { Color } = require('@avolutions/canvas-painter');
```

For **ES Modules**:
```js
import { Color } from '@avolutions/canvas-painter';
```

## Usage

Getting started with **CanvasPainter.js** is simple. After setting up an HTML `<canvas>` element, you can initialize it with a single method call. From there, you can start adding shapes to the canvas, which will automatically render and update as their properties change or you render shapes manually. Below are the steps to set up and use the package effectively.

### Initialize the canvas

First, ensure that you have a `<canvas>` element in your HTML with an id:

```html
<canvas id="myCanvas"></canvas>
```

After you've added the canvas element to your HTML, you can initialize it using the `init()` method:

```js
import { Color } from '@avolutions/colorado';

const canvas = Canvas.init('myCanvas');
```

### Drawing a shape manually

You can create a new shape, such as a rectangle, and draw it manually using the `Canvas.draw()` method. The shape will automatically render on the canvas.

```javascript
import { Canvas, Rectangle } from 'canvas-painter';

// Initialize the canvas
const canvas = Canvas.init('myCanvas');

// Create a rectangle (x, y, width, height)
const rect = new Rectangle(100, 100, 200, 150);

// Draw the rectangle on the canvas
canvas.draw(rect);
```

The `Canvas.draw()` method takes care of rendering the shape to the canvas. Any changes made to the rectangle's properties (like position, size, or color) will **not** have an effect to the shape on the canvas. You need to call `Canvas.draw(rect)` again to update the canvas.

### Automatically re-rendering a shape on property change

If you want a shape to automatically re-render every time one of its properties changes, you can add the shape to `Canvas.watch()`. Once added, any changes to the shape’s properties will be automatically reflected on the canvas without the need to manually call `Canvas.draw()`.

Here’s an example of how to watch a rectangle and ensure it updates automatically when modified:

```javascript
import { Canvas, Rectangle } from 'canvas-painter';

// Initialize the canvas
const canvas = Canvas.init('myCanvas');

// Create a rectangle (x, y, width, height)
const rect = new Rectangle(100, 100, 200, 150);

// Add the rectangle to Canvas.watch() to automatically rerender on property change
canvas.watch(rect);

// Change rectangle properties dynamically
rect.width = 250;  // The canvas will automatically update with the new width
```

By using `Canvas.watch(rect)`, you ensure that any updates to the rectangle’s properties (such as position, size, or color) are automatically applied to the canvas, without needing to call `Canvas.draw()` manually.

### Access the JavaScript Canvas API

In addition to using **CanvasPainter.js** built-in drawing methods, you have full access to the official Canvas 2D API through `Canvas.context`. This allows you to use any method from the standard Canvas/Context API directly:

```js
// Access the 2D rendering context
const canvas = Canvas.init('myCanvas');
const ctx = canvas.context;

// Use standard Canvas API methods
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.strokeRect(150, 150, 100, 100);

// Draw text
ctx.font = '20px Arial';
ctx.fillText('Hello, Canvas!', 200, 200);
```

You can explore the full Canvas API documentation [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D).

## License

This project is licensed under the **MIT License**. For more details, see the [LICENSE](https://github.com/avolutions/canvas-painter/blob/main/LICENSE) file included in the repository.