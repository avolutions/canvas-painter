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

**Note**: [hidden shapes](./shapes/index.md#hide-a-shape) will not be drawing to canvas.

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

**Note**: [hidden shapes](./shapes/index.md#hide-a-shape) will not be drawing to canvas.

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

## Zooming and panning the Canvas

In **CanvasPainter.js**, zooming and panning allow you to navigate and interact with a large canvas by adjusting the view, making it easier to focus on specific parts of the canvas or visualize intricate details. These two features are essential in applications like drawing tools, image editors, and data visualizations where users may need to zoom in or out and move around the canvas.

### Enable zooming and panning

Zooming and panning functionality can be easily enabled through configuration options. By setting `zoomable` and `pannable` in the canvas options, you allow users to zoom in and out and/or pan across the canvas.

```js
const canvas = Canvas.init('myCanvas', { zoomable: true, pannable: true} );
```

In this example, both zooming and panning are enabled by configuring the canvas options.

### Default zoom and pan behavior

In **CanvasPainter.js**, zooming and panning are designed to work out-of-the-box when the `zoomable` and `pannable` options are enabled. By default, the library uses the mouse wheel for zooming and drag & drop with left mouse button for panning, providing an intuitive and interactive user experience.

#### Default zoom behavior

When `zoomable` is enabled, users can zoom in and out of the canvas using the mouse wheel. Scrolling the wheel up (away from you) zooms in, making the elements on the canvas appear larger, while scrolling the wheel down (toward you) zooms out, making the elements smaller.

If canvas is also `pannable`, the zoom is centered around the current mouse position, meaning that when you zoom in or out, the canvas will scale with the pointer as the center of focus. if canvas is not `pannable`, the center for zooming is always the center of the canvas.

#### Default Pan Behavior

When `pannable` is enabled, users can pan the canvas by clicking and dragging it with left mouse button. This allows users to move the visible area of the canvas, which is particularly useful when zoomed in on a specific region and needing to navigate across the canvas.

The panning behavior is intuitive: click anywhere on the canvas, hold down the left mouse button, and move the mouse to drag the canvas view. This shifts the visible portion of the canvas in the direction you drag, making it easy to explore different areas when zoomed in.

### Configure zoom behavior

The `zoom` option allows you to customize how zooming behaves on the canvas. You can control two main properties:

- `step`: Defines the zoom factor. A larger step results in more dramatic zooming.
- `useWheel`: Enables or disables the ability to zoom using the mouse wheel.

```js
const options = {
  zoomable: true,
  zoom: {
    step: 0.05, // 5%
    useWheel: false // disable mouse wheel
  }
};

const canvas = Canvas.init('myCanvas', options );
```

The `zoom` options are only active when the `zoomable` option is set to `true`. This means that even if you configure these zoom options, they will have no effect unless zooming is explicitly enabled.

#### Zoom step

The `zoom.step` option in **CanvasPainter.js** controls how much the canvas zooms in or out with each zoom event when using the mouse wheel or programmatic zoom. It determines the scaling factor applied to the canvas, and the default value is set to `0.1`, which means a **10%** zoom change with each scroll.

### Configure pan behavior

The `pan` option allows you to customize how panning behaves on the canvas. You can control two main properties:

- `mouseButtons`: Defines one or more mouse buttons that are used to pan the canvas.
- `useMouse`: Enables or disables the ability to pan using the mouse.

```js
const options = {
  pannable: true,
  pan: {
    mouseButtons: [ MouseButton.left, MouseButton.right ], // allow panning by using left or right mouse button
    useMouse: false // disables mouse
  }
};

const canvas = Canvas.init('myCanvas', options );
```

### Programmatically control zoom and pan

In **CanvasPainter.js**, you can not only rely on user interactions for zooming and panning but also control these behaviors programmatically using specific methods and properties. This allows you to zoom in, zoom out, reset zoom or pan, and control the zoom scale and pan center through code, offering more flexibility for your application.

#### Zoom programmatically

You can zoom in and out using the `zoomIn()` and `zoomOut()` methods. These methods adjust the zoom level by a factor based on the `zoom.step` option. By default, the zoom step is set to `0.1` (10%), but you can adjust this value to control how much the canvas zooms in or out with each method call.

```js
// Zoom in 10% centered at a specific point
const zoomCenter = new Point(100, 150);
canvas.zoomIn(zoomCenter);

// Zoom out 10% centered at the canvas center (default)
canvas.zoomOut();
```

- **`zoomIn(position?: Point)`**: Zooms in on the canvas. If a position (`Point`) is provided, the zoom will be centered around that point; otherwise, it will default to the center of the canvas.
- **`zoomOut(position?: Point)`**: Similar to `zoomIn()`, but zooms out. It will also use the provided center point, or the canvas center if none is given.

#### Resetting zoom and pan

You can reset both the zoom level and the pan offset to their default states using the `resetZoom()`, `resetPan()` or `resetZoomPan()` methods. This is particularly useful when you need to return to the original view after zooming or panning around the canvas.

```js
// Reset the zoom to its default scale
canvas.resetZoom();

// Reset the pan offset to the default (centered)
canvas.resetPan();

// Resets the zoom scale and pan offset
canvas.resetZoomPan();
```

- **`resetZoom()`**: Resets the zoom level back to the default scale (1).
- **`resetPan()`**: Resets the pan offset to the default (center of canvas).
- **`resetZoomPan()`**: Resets the zoom level and the pan offset to the defaults.

#### Getting and setting zoom scale

The current zoom level can be accessed via the `zoomScale` getter, allowing you to retrieve the current scale factor. You can also set a new zoom level programmatically using the `zoomScale` setter.

```js
// Get the current zoom scale
const currentZoom = canvas.zoomScale;
console.log(currentZoom); // Output: Current zoom level

// Set a new zoom scale
canvas.zoomScale = 2;  // Set zoom scale to 200%
```

- **`zoomScale (getter)`**: Returns the current zoom level. A value of `1` means no zoom (100%), `0.5` means 50%, `2` means 200%, and so on.
- **`zoomScale (setter)`**: Allows you to set a new zoom scale programmatically. This directly adjusts the canvas zoom to the specified scale.

#### Getting and setting pan offset

The pan offset (the current offset of the canvas) can be accessed via the `panOffset` getter. You can also programmatically set a new pan offset using the `panOffset` setter to reposition the canvas. In addition, you can manipulate the pan offset incrementally using the `moveX()`, `moveY()`, or `move()` methods from the `Point` class to shift the pan offset smoothly.

```js
// Set a new pan offset
canvas.panOffset = { x: 200, y: 100 }; // Pan to the specified offset

// Move the pan offset 50 pixels to the right
canvas.panOffset.moveX(50);

// Move the pan offset 30 pixels down
canvas.panOffset.moveY(30);

// Move both horizontally and vertically at the same time
canvas.panOffset.move(-50, -30);

// Get the current pan offset
const panOffset = canvas.panOffset;
console.log(panOffset); // Output: { x: 200, y: 100 }
```

- **`panOffset (getter)`**: Returns the current pan offset as an `Point` object, representing the canvas offset from its default position.
- **`panOffset (setter)`**: Allows you to set a new pan offset programmatically. This adjusts the canvas to be panned to the specified position.

## Options

The following table is showing all available canvas options and there default values if no value was provided explicit.

Option | Type | Default | Explanation
--- | --- | --- | ---
`height` | number | 150 | Sets the height of the HTML canvas element.
`width` | number | 300 | Sets the width of the HTML canvas element.
`zoomable` | boolean | false | Allows the user to zoom the canvas.
`pannable` | boolean | false | Allows the user to pan the canvas.
`zoom.step` | number | 0.1 | The zoom factor that is applied with each zoom event, 0.1 means 10%.
`zoom.useWheel` | boolean | true | Enables (true) or disables (false) zooming with the mouse wheel.
`pan.mouseButtons` | Array&lt;[MouseButton](../api/enumerations/MouseButton)&gt; | [[MouseButton.Left](../api/enumerations/MouseButton#left)] | A list of mouse buttons that can be used for panning the canvas.
`pan.useMouse` | boolean | true | Enables (true) or disables (false) panning with the mouse.

## Styles

The following table is showing all available canvas styles and there default values if no value was provided explicit.

Style | Type | Default | Explanation
--- | --- | --- | ---
`color` | string | '#000000' (black) | Sets the default fill color of all shapes on the canvas.
`cursor.default` | [Cursor](../api/enumerations/Cursor) | [Cursor.Default](../api/enumerations/Cursor#default) | Defines the default cursor that is shown while hovering the canvas.
`cursor.panActive` | [Cursor](../api/enumerations/Cursor) | [Cursor.Grabbing](../api/enumerations/Cursor#grabbing) | Defines the cursor that is shown while panning the canvas.

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