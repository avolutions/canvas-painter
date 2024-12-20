import { Angle } from "../types/Angle.js";
import { Point } from "../types/Point.js";
import { RectangleDefinition } from "../definitions/RectangleDefinition.js";
import { Shape } from "./Shape.js";
import { RectangleStyle } from "../styles/RectangleStyle.js";
import { RectangleOptions } from "../options/RectangleOptions.js";
import { IRectangleOptions } from "../options/interfaces/IRectangleOptions.js";
import { IRectangleStyle } from "../styles/interfaces/IRectangleStyle.js";

/**
 * Class representing a Rectangle, extending the Shape class with a RectangleDefinition.
 * Provides functionality for rendering, resizing, moving, and rotating the rectangle.
 */
export class Rectangle extends Shape<RectangleDefinition, RectangleStyle, RectangleOptions> {
  /**
   * Constructs a new Rectangle instance.
   *
   * @param x - The x-coordinate of the rectangle's position.
   * @param y - The y-coordinate of the rectangle's position.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   * @param rotation - The initial rotation of the rectangle in degrees clockwise.
   * @param style - The style options for the rectangle.
   * @param options - The configuration options for the rectangle.
   */
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    rotation: number = 0,
    style?: IRectangleStyle,
    options?: IRectangleOptions
  ) {
    // Create a RectangleDefinition using the provided parameters
    const rectangleDefinition = new RectangleDefinition(new Point(x, y), width, height, new Angle(rotation));
    super(rectangleDefinition, new RectangleStyle(style), new RectangleOptions(options));
  }

  // Getters

  /**
   * Gets the width of the rectangle.
   * @returns The width of the rectangle.
   */
  public get width(): number {
    return this._definition.width;
  }

  /**
   * Gets the height of the rectangle.
   * @returns The height of the rectangle.
   */
  public get height(): number {
    return this._definition.height;
  }

  /**
   * Gets the position (Point) of the rectangle.
   * @returns The position of the rectangle.
   */
  public get position(): Point {
    return this._definition.position;
  }

  /**
   * Gets the angle of the rectangle.
   * @returns The angle (rotation) of the rectangle.
   */
  public get angle(): Angle {
    return this._definition.angle;
  }

  /**
   * Gets the rotation of the rectangle in degrees.
   * @returns The rotation of the rectangle.
   */
  public get rotation(): number {
    return this._definition.angle.degrees;
  }

  // Setters

  /**
   * Sets the width of the rectangle.
   * @param width - The new width of the rectangle.
   */
  public set width(width: number) {
    this._definition.width = width;
  }

  /**
   * Sets the height of the rectangle.
   * @param height - The new height of the rectangle.
   */
  public set height(height: number) {
    this._definition.height = height;
  }

  /**
   * Sets the position (Point) of the rectangle.
   * @param position - The new position of the rectangle.
   */
  public set position(position: Point) {
    this._definition.position = position;
  }

  /**
   * Sets the rotation of the rectangle.
   * @param rotation - The new rotation of the rectangle.
   */
  public set rotation(rotation: number) {
    this._definition.angle.degrees = rotation;
  }

  /**
   * Updates the size of the rectangle by setting new width and height values.
   *
   * @param width - The new width of the rectangle.
   * @param height - The new height of the rectangle.
   */
  public setSize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  /**
   * Resizes the rectangle by adjusting the current width and height by delta values.
   *
   * @param deltaWidth - The change in width.
   * @param deltaHeight - The change in height.
   */
  public resize(deltaWidth: number = 0, deltaHeight: number = 0): void {
    this.width += deltaWidth;
    this.height += deltaHeight;
  }

  /**
   * Moves the rectangle by adjusting the current position by delta values.
   *
   * @param deltaX - The change in the x-coordinate.
   * @param deltaY - The change in the y-coordinate.
   */
  public move(deltaX: number = 0, deltaY: number = 0): void {
    this.position.move(deltaX, deltaY);
  }

  /**
   * Rotates the rectangle by adjusting its current angle.
   *
   * @param deltaRotation - The amount to adjust the rectangle's rotation, in degrees.
   */
  public rotate(deltaRotation: number): void {
    this.angle.adjustBy(deltaRotation);
  }

  /**
   * Gets the top-left position of the rectangle.
   * If the rectangle is centered, it adjusts based on the width and height.
   * @returns The top-left position of the rectangle.
   */
  private getTopLeftPosition(): Point {
    if (this.options.centered) {
      return new Point(
        this._definition.position.x - this._definition.width / 2,
        this._definition.position.y - this._definition.height / 2
      );
    }

    return new Point(this._definition.position.x, this._definition.position.y);
  }

  /**
   * Renders the rectangle on the canvas using the provided 2D rendering context.
   *
   * The rectangle will be rendered with its current position, size, and rotation.
   *
   * @param context - The 2D rendering context of the canvas where the rectangle will be drawn.
   */
  public render(context: CanvasRenderingContext2D): void {
    context.save(); // Save the current canvas state

    // Set rectangle specific styles
    context.fillStyle = this.stateStyle.color;

    const topLeft = this.getTopLeftPosition();

    // Rotate
    if (this.angle.degrees !== 0) {
      // Translate to the rectangle's position and apply rotation
      context.translate(this._definition.position.x, this._definition.position.y);
      context.rotate(this._definition.angle.radians);

      // Translate back if centered
      if (this.options.centered) {
        context.translate(-this._definition.width / 2, -this._definition.height / 2);
      }

      // Because we are in translated context
      topLeft.x = 0;
      topLeft.y = 0;
    }

    context.fillRect(
      topLeft.x,
      topLeft.y,
      this._definition.width,
      this._definition.height
    );

    // Draw border for rectangle
    if (this.hasBorder()) {
      context.strokeStyle = this.stateStyle.borderColor;
      context.lineWidth = this.stateStyle.borderWidth;

      context.strokeRect(
        topLeft.x,
        topLeft.y,
        this._definition.width,
        this._definition.height
      );
    }

    context.restore(); // Restore the canvas state to before the transformations
  }

  /**
   * Determines if the mouse is currently over the shape.
   *
   * @param mousePosition - The current mouse position.
   * @returns True if the mouse is over the shape, false otherwise.
   */
  public isMouseOver(mousePosition: Point): boolean {
    // Translate the mouse position based on the rectangle's position
    const x = mousePosition.x - this._definition.position.x;
    const y = mousePosition.y - this._definition.position.y;

    // If the rectangle is rotated, apply the reverse rotation
    const angle = -this._definition.angle.radians;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    const rotatedX = x * cos - y * sin;
    const rotatedY = x * sin + y * cos;

    // If the rectangle is centered, adjust coordinates accordingly
    const offsetX = this.options.centered ? -this._definition.width / 2 : 0;
    const offsetY = this.options.centered ? -this._definition.height / 2 : 0;

    // Calculate half of the border width for both inward and outward bounds expansion
    const borderWidth = this.hasBorder() ? this.stateStyle.borderWidth / 2 : 0;

    // Check if the rotated mouse coordinates are within the rectangle's bounds,
    // taking into account half the border width on each side
    return (
      rotatedX >= offsetX - borderWidth &&
      rotatedX <= offsetX + this._definition.width + borderWidth &&
      rotatedY >= offsetY - borderWidth &&
      rotatedY <= offsetY + this._definition.height + borderWidth
    );
  }

  /**
   * Handles the drag operation by applying the given delta to the current position.
   *
   * @param delta - The change in position represented as a `Point`.
   */
  public onDrag(delta: Point): void {
    this.move(delta.x, delta.y);
  }
}
