---
sidebar_position: 5
---

# Shapes

Shapes are the foundation of any drawing or graphical operation on a canvas. They represent the geometric figures or forms that you can create, manipulate, and display. In **CanvasPainter.js**, shapes are essential building blocks used to define objects, from simple lines and rectangles to more complex polygons and circles.

## Shape class

In **CanvasPainter.js**, the `Shape` class provides a foundational structure for creating and manipulating shapes on the canvas. It serves as an abstract class that defines common properties and behaviors for all shapes, such as managing styles, options, and handling change notifications through observers.

The `Shape` class is designed to be extended by specific shape types (e.g., rectangles, circles), but the core functionality it provides is consistent across all shape types.

## Defining shapes

When working with shapes in **CanvasPainter.js**, each shape is composed of three fundamental aspects: **Definition**, **Style**, and **Options**. These aspects provide a structured way to describe the geometry, appearance, and behavior of shapes on the canvas. Understanding how these aspects work together will help you manage shapes more effectively and tailor them to your specific needs.

### Definition

The **Definition** of a shape refers to its geometric properties - such as its size and position - which determine how the shape is physically laid out on the canvas. These can include parameters like:

- **Position**: The coordinates (`x` and `y`) that define where the shape appears on the canvas.
- **Dimensions**: Properties like width, height, radius, or other size-related attributes that define the shape's physical size.
- ...

The definition of a shape describes its fundamental structure, telling the canvas *what* to draw and *where* to draw it.

Each shape has its own `ShapeDefinition` class that must be implement the `IShapeDefinition` interface.

### Style

The **Style** aspect of a shape controls its visual appearance—how the shape looks when rendered on the canvas. This can include properties such as:

- **Color**: The color that fills the interior of the shape.
- **Border**: The color and width of the shape's outline or border.
- ...

Style determines *how* the shape is presented, allowing you to adjust its appearance to match the desired visual outcome.

Each shape has its own `ShapeStyle` class that must be implement the `IShapeStyle` interface.

### Options

The **Options** aspect provides additional configuration settings that define the behavior of the shape. These settings control how the shape interacts with the canvas or user input, making it more dynamic or responsive. Options might include:

- **Interactivity**: Whether the shape is draggable, clickable, or resizable.
- **Visibility**: Whether the shape is visible or hidden.
- ...

Options give you the flexibility to customize a shape's behavior and make it interactive in ways that suit your application.

Each shape has its own `ShapeOption` class that must be implement the `IShapeOption` interface.

## Observers and reactivity

One of the key features of the `Shape` class is its built-in observer mechanism. Any changes made to the shape's definition, style, or options trigger notifications to all registered observers. This makes it easy to build interactive and dynamic canvas applications where changes in shapes automatically update the display or trigger other effects.

You can add or remove observers with the following methods:

- `addObserver()`: Adds an observer function that will be called when the shape’s state changes.
- `removeObserver()`: Removes a previously added observer.

```js
const rectangle = new Rectangle(0, 0, 0, 0);

// Register an observer to log changes
rectangle.addObserver(() => {
  console.log('Rectangle was updated!');
});

// Update the rectangle's width
rectangle.width = 10;
// Observer is notified and logs: "Rectangle was updated!"
```

This is exactly what happens if you add your shapes to `Canvas` by using the `watch()` method.

## Proxying and auto-updates

The definition, style, and options of a shape are automatically proxied. This means that any modifications to these properties are tracked, and observers are notified of the changes. The proxy mechanism works for nested properties as well, ensuring deep reactivity.

```js
rectangle.style.color = 'red'; // Changes the color of the style and triggers observers
```

## Managing shape sStyles

The style of a shape defines how it is drawn, including properties like fill color, border style, or opacity. The `Shape` class provides a getter and setter for the style, allowing you to easily update the visual appearance of a shape.

```js
// Get the current style
const currentStyle = rectangle.style;

// Update the style
rectangle.style = { color: 'blue' };
rectangle.style.color = 'green';
```

When you update the style, it merges the new properties with the existing ones. This allows for incremental style updates without overwriting the entire style object.

## Configuration options

Options provide additional flexibility in configuring a shape’s behavior. These options can control things like whether the shape is interactive, or it can store any custom behavior flags you want to attach to the shape. The `Shape` class provides a getter and setter for the options, allowing you to easily update it.

```js
// Get the current options
const currentOptions = rectangle.options;

// Update the options
rectangle.options = { visible: false };
rectangle.options.visible = true;
```

## Rendering shapes

Each shape must implement the `render` method, which defines how the shape is drawn on the canvas. The `render` method takes a `CanvasRenderingContext2D` as a parameter, which provides the drawing interface for the canvas.

Typically in this method, the shape is rendered by using official JavaScript Canvas 2D API methods, depending on the shapes definition, style and options.

When working with `Canvas` class, the `render()` method gets the context of the `Canvas` class. But it is also possible to use shapes without `Canvas` class and provide your own context.

## Show and hide shapes

In **CanvasPainter.js**, shapes can be dynamically shown or hidden on the canvas based on user interactions or other events. This is especially useful when creating interactive applications where certain elements need to be temporarily hidden or displayed, such as in games, dashboards, or drawing tools. The ability to control the visibility of shapes allows you to create more responsive and dynamic visual experiences.

By default each shape is visible. You can check the visibility of a shape by checking the `visible` option or just call `isVisible()`.

```js
const circle = new Circle(10, 10, 10);

// Get visibility by isVisible();
circle.isVisible(); // true

// Get visibility from options
circle.options.visible; // visible;
```

### Hide a shape

To hide a shape, you can either use the `options` property of the shape and set its `visible` option to `false` or call the `hide()` method of the shape. When a shape is hidden, it will not be rendered on the canvas, but it still exists in memory and can be shown again at any time. Also all changes on the shape still triggers an redraw of the canvas.

```js
// Creates a hidden circle
const circle = new Circle(10, 10, 10, { visible: false });

// Hide the circle by calling hide()
circle.hide();

// Hide the circle by setting the visible option
circle.options.visible = false;

// This will not draw the circle on the canvas
canvas.draw(circle);
```

### Show a shape

To show a hidden shape, simply set its `visible` option back to `true` or call `show()`. Once the visibility is restored, the shape will be rendered on the canvas during the next render cycle.

```js
// Show the circle by calling show()
circle.show();

// Show the circle by setting the visible option
circle.options.visible = true;

// This will draw the circle on the canvas
canvas.draw(circle);
```

## Serialize shapes

In **CanvasPainter.js**, every shape can be serialized into different formats for storage, transmission, or integration with other systems. Each shape provides two key methods, `toArray()` and `toJson()`, which allow you to convert the shape’s definition into standard formats.

```js
const rectangle = new Rectangle(10, 10, 20, 20);

rectangle.toArray(); // [[x, y], width, height]
rectangle.toJson(); // { position: { x: 10, y: 10 }, width: 20, height: 20 }
```