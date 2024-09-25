---
sidebar_position: 3
---

# Getting started

Getting started with **CanvasPainter.js** is simple. After setting up an HTML `<canvas>` element, you can initialize it with a single method call. From there, you can start adding shapes to the canvas, which will automatically render and update as their properties change or you render shapes manually.

## Initialize the canvas

First, ensure that you have a `<canvas>` element in your HTML with an id:

```html
<canvas id="myCanvas"></canvas>
```

After you've added the canvas element to your HTML, you can initialize it using the `init()` method:

```js
import { Canvas } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
```

## Create a shape

Next you create shapes and draw them on the canvas. You can either use the [built-in](TODO) shapes or create your [own](TODO).

A shape is created by simple create a new object instance of it, e.g. `Rectangle`:
```js
import { Rectangle } from '@avolutions/canvas-painter';

const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height
```

## Draw shape manually

You can manually draw the rectangle to the canvas using `Canvas.draw()` method. This is useful when you only want to render the canvas once or on-demand.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.draw(rectangle);
```

## Watch shapes

A more advanced way to draw the shape is to let the canvas watch it and (re-)draws it every time the shape changes. This allows you to simply modify the shape object without caring about rerendering of the canvas. To do so, use the `Canvas.watch()` method.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.watch(rectangle); // this will draw the rectangle

rectangle.width = 100; // this will redraw the rectangle with the new width
```

## Using the JavaScript Canvas API

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