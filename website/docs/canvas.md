---
sidebar_position: 4
---

# Canvas

The `Canvas` class in **CanvasPainter.js** simplifies working with an HTML5 canvas, making it easy to draw shapes, apply styles, and manage canvas updates. This guide will help you get started with the class and its functionality.

## Setup canvas

Make sure you installed **CanvasPainter.js** like described in [Installation](./installation.md).

Then ensure that you have a `<canvas>` element in your HTML with an id:

```html
<canvas id="myCanvas"></canvas>
```

After you've added the canvas element to your HTML, you can initialize the `Canvas` class using the `init()` method:

```js
import { Canvas } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
```

### With options

You can also initialize the canvas with options, by passing them as second parameter to the `init()` method:

```js
import { Canvas } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas', { width: 500 });
```

See [Options](#options) for a list of all available canvas options.

### With styles

Global canvas styles can be passed as third parameter to the `init()` method:

```js
import { Canvas } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas', {}, { color: 'red' });
```

See [Styles](#styles) for a list of all available canvas options.

### Set width and height

There are multiple ways to set the `width` and `height` of a canvas. They are listed from highest to lowest priority.

#### 1. Options

If you provide `width` or `height` in the canvas options, these values are used, no matter what is specified in the HTML canvas element or CSS.

```js
const canvas = Canvas.init('myCanvas', { width: 500, height: 250 });
```

#### 2. HTML attributes

If no `width` or `height` is provided through canvas options, the HTML attributes `width` and `height` of the canvas element are used.

```html
<canvas id="myCanvas" width="500" height="250">
```

#### 3. CSS

If no options or HTML attributes are provided for `width` or `height`, the canvas class will determine the [computed CSS style](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) of the canvas element and use this as `width` and `height`.

```html
<canvas id="myCanvas" style="width: 500px; height: 250px">
```

#### 4. Default options

If no options, HTML attributes or CSS provided to set the `width` or `height` of the canvas, we use the default values for `width` (300) and `height` (150) [options](#options).

```html
<canvas id="myCanvas">
```

```js
const canvas = Canvas.init('myCanvas');
```

## Using canvas

There are different ways to use the created `Canvas` object. The most basic way is to get the `Canvas.context` and use the official [JavaScript Canvas API](#using-the-javascript-canvas-api).

But **CanvasPainter.js** provides also a convenient way to work with basic shapes and render them onto a HTML5 canvas. The library supports two primary methods of rendering shapes to the canvas: manually or automatically. Depending on your use case, you can choose which method works best for your application.

## Draw shapes on canvas manually

In manual rendering, you control when and how the shapes are drawn onto the canvas. This gives you more flexibility to define the exact moments when the canvas should be updated. To manually render shapes, you use the `draw()` method to explicitly draw shapes whenever needed.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.draw(rectangle);
```

In this example, the rectangle shape is drawn immediately when `draw()` is called. This approach works well when you want precise control over when shapes are rendered, and is useful for scenarios like animations or interactions triggered by user input.

## Clear canvas manually

In **CanvasPainter.js**, clearing the canvas is a simple but important operation when you're working with dynamic drawings or when you need to reset the canvas to a blank state.

The `clear()` method allows you to remove everything currently drawn on the canvas, resetting it to a blank state.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.draw(rectangle);
canvas.clear(); // This will remove the rectangle from canvas
```

## Draw shapes automatically

Automatic rendering provides a more hands-off approach, where the canvas takes care of redrawing shapes whenever they change. With automatic rendering, you can "watch" a shape, and the canvas will automatically update whenever any of the shape’s properties change. This is particularly useful when you are frequently updating shape properties, such as when dragging shapes or resizing them.

### Watch shapes

To draw and update a shape automatically, you need to tell the canvas to "watch" it. This way, the canvas will redraw the shape whenever one of it's properties changed.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.watch(rectangle); // will draw rectangle immediately
```

When adding a shape via `watch()` method, the canvas will draw the shape immediately and remove all manually drew shapes. You can prevent to draw the shape instantly by passing `false` as second parameter to the watch method.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.watch(rectangle, false); // will not draw rectangle immediately
```

Whenever one of the shapes properties changes now, `Canvas` is aware of this and will redraw it.

```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle = new Rectangle(50, 50, 25, 75); // x, y, width, height

canvas.watch(rectangle); // will draw rectangle

canvas.width = 55; // this will redraw rectangle automatically
```

It is of course also possible to watch multiple shapes. Either you add them separately whenever you want or all together.
 ```js
import { Canvas, Rectangle } from '@avolutions/canvas-painter';

const canvas = Canvas.init('myCanvas');
const rectangle1 = new Rectangle(50, 50, 25, 75); // x, y, width, height
const rectangle2 = new Rectangle(100, 100, 25, 75); // x, y, width, height
const rectangle3 = new Rectangle(150, 150, 25, 75); // x, y, width, height

canvas.watch(rectangle1);
canvas.watch([rectangle2, rectangle3]);
```

In this example, `Canvas` watches all three rectangles and redraw as soon as one of them changes.

### Unwatch shapes

If you want `Canvas` to no longer watch a shape, you can just remove one or multiple shapes by using `unwatch()`.

```js
canvas.unwatch(rectangle1);
canvas.unwatch([rectangle2, rectangle3]);
```

This will cause an instant redraw of the canvas without the removed shapes. If you want to prevent a redraw when removing you can pass `false` as second parameter to `unwatch()`.

```js
canvas.unwatch(rectangle1, false);
canvas.unwatch([rectangle2, rectangle3], false);
```

### Force redraw of shapes

Normally you do not need to worry about the redraw of watched shapes. But it can be done manually anyway by calling `redraw()`.
This will clear the canvas and redraw all currently watched shapes.

```js
canvas.redraw();
```

## Options

The following table is showing all available canvas options and there default values if no value was provided explicit.

Option | Default | Explanation
--- | --- | ---
`height` | 150 | Sets the height of the HTML canvas element.
`width` | 300 | Sets the width of the HTML canvas element.

## Styles

The following table is showing all available canvas styles and there default values if no value was provided explicit.

Style | Default | Explanation
--- | --- | ---
`color` | '#000000' (black) | Sets the default fill color of all shapes on the canvas.

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