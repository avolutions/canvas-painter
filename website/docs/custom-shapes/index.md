---
sidebar_position: 6
---

# Custom shapes

## Customizing Shapes in CanvasPainter.js

**CanvasPainter.js** offers great flexibility when it comes to creating visual elements on your canvas. While the library comes with built-in shapes such as rectangles or circles, you are not limited to these. You have the freedom to either create entirely new shapes or extend existing ones to suit your needs.

### Creating New Shapes

If you need a shape that isn't available in the default set of **CanvasPainter.js** shapes, you can define your own by extending the `Shape` class. By doing so, you gain full control over how the shape is rendered on the canvas. You can override the `render` method and use the native Canvas API to draw any shape or figure you want. This allows you to build complex, custom graphics directly inside your canvas.

For example, you could define a shape like a `Cross` or more complex geometric figures that aren’t natively supported by the library. All you need is to implement the `render` method, where you draw your shape using canvas commands.

### Extending Existing Shapes

In addition to creating entirely new shapes, you can also extend the built-in shapes provided by **CanvasPainter.js**. If you want to modify the behavior of existing shapes like rectangles or circles or add additional functionality to them, extending is the way to go.

For example, you might want to create a custom rectangle that has rounded corners, or a circle that displays a gradient fill. By extending existing shapes, you avoid duplicating code and can focus on adding the custom functionality you need.

### Flexibility and Control

Whether you choose to create a new shape or extend an existing one, **CanvasPainter.js** provides a framework that gives you flexibility and control. You can combine different shapes, add transformations, or customize their behavior based on user interaction, making it easy to create dynamic and interactive graphics.

This section will guide you through the process of both creating new shapes and extending existing ones with practical examples, so you can quickly get started with building your own custom shapes.