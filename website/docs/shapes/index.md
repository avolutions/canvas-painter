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

The **Style** aspect of a shape controls its visual appearance - how the shape looks when rendered on the canvas. This can include properties such as:

- **Color**: The color that fills the interior of the shape.
- **Border**: The color and width of the shape's outline or border.
- ...

Style determines *how* the shape is presented, allowing you to adjust its appearance to match the desired visual outcome.

Each shape has its own `ShapeStyle` class that must be implement the `IShapeStyle` interface, ensuring consistency in style properties across different shapes.

### Options

The **Options** aspect provides additional configuration settings that define the behavior of the shape. These settings control how the shape interacts with the canvas or user input, making it more dynamic or responsive. Options might include:

- **Interactivity**: Whether the shape is draggable, clickable, or resizable.
- **Visibility**: Whether the shape is visible or hidden.
- ...

Options give you the flexibility to customize a shape's behavior and make it interactive in ways that suit your application.

Each shape has its own `ShapeOption` class that must be implement the `IShapeOption` interface.

## States

Each shape can exist in various states that represent different levels of interaction or modification. These states control both how the shape looks and how it behaves in response to user actions. By defining states, you can provide visual feedback to users, making your shapes more interactive and engaging.

A shape can have one of the following states:

State | Description
--- | ---
**Default** | The default state is the baseline appearance and behavior of a shape. This state applies when no specific interaction is occurring with the shape
**Hover** | The hover state is set when the mouse is moved over the shape. In this state, you can apply distinct styles to make the shape stand out, such as changing its color, adjusting its border, or highlighting it in some way. The hover state helps indicate that the shape is interactive, drawing attention to it when the user moves the cursor over the shape.
**Active** | The active state is set when the shape is being interacted with directly, such as being dragged. This state allows for specialized styles and behaviors to indicate that the shape is currently engaged in an action.

The current state of a shape can be access by using the `state` getter:

```js
const rectangle = new Rectangle(10, 10, 15, 15, 0);
const state = rectangle.state; // ShapeState.Default ("default")
```

The state of a shape can also be set manually using the `state` setter:

```js
const rectangle = new Rectangle(10, 10, 15, 15, 0);
rectangle.state = ShapeState.Hover;
```

The state is reset as soon as a user interaction (e.g. mouse over) occurs.

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

## Managing shape styles

The style of a shape defines how it is drawn, including properties like fill color, border style, or opacity. The `Shape` class provides a getter and setter for the style, allowing you to easily update the visual appearance of a shape.

```js
// Get the current style
const currentStyle = rectangle.style;

// Update the style
rectangle.style = { color: 'blue' };
rectangle.style.color = 'green';
```

When you update the style, it merges the new properties with the existing ones. This allows for incremental style updates without overwriting the entire style object.

### State styles

To provide a dynamic and interactive visual experience, shapes can be styled based on their current state. Managing these state styles efficiently allows for smooth transitions and a clear representation of interaction feedback on each shape.

#### Defining state specific styles

Each shape style allows you to define visual properties for various states, such as `default` or `hover`. By organizing styles in this way, you can customize a shape's appearance based on user interactions without redefining the entire style each time.

```js
{
  color: 'red',
  borderColor: 'green',
  hover: {
    color: 'blue'
  }
}
```

#### Resolving state specific styles

While the `style` getter will always return the complete style definition, there is a `stateStyle` getter that will return the style for the current state.

When a specific style property is defined for a state, it will override the default style only while the shape is in that state. This allows you to finely control the appearance of shapes, creating responsive and interactive designs. If a property is not defined for a given state, the shape will fall back to its default style for that property.

```js
const style = {
  color: 'red',
  borderColor: 'green',
  hover: {
    color: 'blue',
    borderWidth: 1
  }
}

const rectangle = new Rectangle(10, 10, 15, 15, 0, style);

// If rectangle is in state "default"
console.log(rectangle.stateStyle.color); // 'red'
console.log(rectangle.stateStyle.borderColor); // 'green'
console.log(rectangle.stateStyle.borderWidth); // 0

// If rectangle is in state "hover"
console.log(rectangle.stateStyle.color); // 'blue'
console.log(rectangle.stateStyle.borderColor); // 'green'
console.log(rectangle.stateStyle.borderWidth); // 1
```

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

## Interactivity

Shapes in **CanvasPainter.js** can support various forms of interactivity, allowing users to manipulate them directly through mouse or touch inputs. This chapter provides an overview of interactive features.

### Draggable

The draggable option determines whether a shape can be moved interactively using the mouse.

Enabling the `draggable` option allows a shape to be moved around the canvas effortlessly. By setting this option to `true` (default value), the shape responds to user interactions, such as clicking and dragging, updating its position in real-time as it is moved. This feature can transform static shapes into dynamic and engaging elements, perfect for applications like diagram editors, interactive games, or creative tools.

For instance, creating a draggable rectangle is as simple as passing the `draggable` option when defining the shape. Once added to the canvas, the rectangle can be clicked and dragged, giving users a hands-on experience. Visual feedback, such as applying the `active` state, ensures that users are aware the shape is in motion.

Disabling this feature is equally straightforward. By setting the `draggable` option to `false`, you can prevent the shape from being moved, making it a fixed element on the canvas. This flexibility allows you to decide which shapes remain static and which can be repositioned dynamically.

## Serialize shapes

In **CanvasPainter.js**, every shape can be serialized into different formats for storage, transmission, or integration with other systems. Each shape provides two key methods, `toArray()` and `toJson()`, which allow you to convert the shape’s definition into standard formats.

```js
const rectangle = new Rectangle(10, 10, 20, 20);

rectangle.toArray(); // [[x, y], width, height]
rectangle.toJson(); // { position: { x: 10, y: 10 }, width: 20, height: 20 }
```