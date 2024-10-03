<p align="center"><img src="https://avolutions.github.io/canvas-painter/img/logo.png" width="100"></p>

<h1 align="center">CanvasPainter.js</h1>

<p align="center">
  <a href="https://github.com/avolutions/canvas-painter/actions"><img src="https://github.com/avolutions/canvas-painter/actions/workflows/tests.yml/badge.svg" alt="Tests"></a>
  <a href="https://www.npmjs.com/package/@avolutions/canvas-painter"><img src="https://img.shields.io/npm/dw/@avolutions%2Fcanvas-painter" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@avolutions/canvas-painter"><img src="https://img.shields.io/npm/v/@avolutions%2Fcanvas-painter" alt="Version"></a>
  <a href="https://github.com/avolutions/canvas-painter/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@avolutions%2Fcanvas-painter" alt="License"></a>
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
const { Canvas } = require('@avolutions/canvas-painter');
```

For **ES Modules**:
```js
import { Canvas } from '@avolutions/canvas-painter';
```

## Getting started

Getting started with **CanvasPainter.js** is simple. After setting up an HTML `<canvas>` element, you can initialize it with a single method call. From there, you can start adding shapes to the canvas, which will automatically render and update as their properties change or you render shapes manually.

### Initialize the canvas

First, ensure that you have a `<canvas>` element in your HTML with an id:

```html
<canvas id="myCanvas"></canvas>
```

After you've added the canvas element to your HTML, you can initialize it using the `init()` method:

```js
import { Canvas } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
```

### Create a shape

Next you create shapes and draw them on the canvas. You can either use the [built-in](https://avolutions.github.io/canvas-painter/docs/shapes) shapes or create your [own](https://avolutions.github.io/canvas-painter/docs/custom-shapes).

A shape is created by simple create a new object instance of it, e.g. `Rectangle`:
```js
import { Rectangle } from '@avolutions/canvas-painter';

const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height
```

### Draw shape manually

You can manually draw the rectangle to the canvas using `Canvas.draw()` method. This is useful when you only want to render the canvas once or on-demand.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.draw(rectangle);
```

### Watch shapes

A more advanced way to draw the shape is to let the canvas watch it and (re-)draws it every time the shape changes. This allows you to simply modify the shape object without caring about rerendering of the canvas. To do so, use the `Canvas.watch()` method.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.watch(rectangle); // this will draw the rectangle

rectangle.width = 100; // this will redraw the rectangle with the new width
```

### Using the JavaScript Canvas API

In addition to using **CanvasPainter.js** built-in drawing methods, you have full access to the official Canvas 2D API through `Canvas.context`. This allows you to use any method from the standard Canvas/Context API directly:

```js
import { Canvas } from '@avolutions/canvas-painter';

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