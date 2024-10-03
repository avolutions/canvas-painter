import { Angle } from "../types/Angle.js";
import { Point } from "../types/Point.js";
import { RectangleDefinition } from "../definitions/RectangleDefinition.js";
import { Shape } from "./Shape.js";
import { RectangleStyle } from "../styles/RectangleStyle.js";
import { RectangleOptions } from "../options/RectangleOptions.js";

/**
 * Class representing a Rectangle, extending the Shape class with a RectangleDefinition.
 * Provides functionality for rendering, resizing, moving, and rotating the rectangle.
 */
export class Rectangle extends Shape<RectangleDefinition, RectangleStyle, RectangleOptions> {
  /**
   * Constructs a new Rectangle instance.
   *
   * @param {number} x - The x-coordinate of the rectangle's position.
   * @param {number} y - The y-coordinate of the rectangle's position.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @param {number} [rotation=0] - The initial rotation of the rectangle in degrees clockwise.
   */
  constructor(x: number, y: number, width: number, height: number, rotation: number = 0, style: RectangleStyle = {}, options: RectangleOptions = {}) {
    // Create a RectangleDefinition using the provided parameters
    const rectangleDefinition = new RectangleDefinition(new Point(x, y), width, height, new Angle(rotation));
    super(rectangleDefinition, style, options);
  }

  // Getters

  /**
   * Gets the width of the rectangle.
   * @returns {number} The width of the rectangle.
   */
  public get width(): number {
    return this._definition.width;
  }

  /**
   * Gets the height of the rectangle.
   * @returns {number} The height of the rectangle.
   */
  public get height(): number {
    return this._definition.height;
  }

  /**
   * Gets the position (Point) of the rectangle.
   * @returns {Point} The position of the rectangle.
   */
  public get position(): Point {
    return this._definition.position;
  }

  /**
   * Gets the angle of the rectangle.
   * @returns {Angle} The angle (rotation) of the rectangle.
   */
  public get angle(): Angle {
    return this._definition.angle;
  }

  public get rotation(): number {
    return this._definition.angle.degrees;
  }

  // Setters

  /**
   * Sets the width of the rectangle.
   * @param {number} width - The new width of the rectangle.
   */
  public set width(width: number) {
    this._definition.width = width;
  }

  /**
   * Sets the height of the rectangle.
   * @param {number} height - The new height of the rectangle.
   */
  public set height(height: number) {
    this._definition.height = height;
  }

  /**
   * Sets the position (Point) of the rectangle.
   * @param {Point} position - The new position of the rectangle.
   */
  public set position(position: Point) {
    this._definition.position = position;
  }

  /**
   * Sets the rotation of the rectangle.
   * @param {number} rotation - The new rotation of the rectangle.
   */
  public set rotation(rotation: number) {
    this._definition.angle.degrees = rotation;
  }

  /**
   * Updates the size of the rectangle by setting new width and height values.
   *
   * @param {number} width - The new width of the rectangle.
   * @param {number} height - The new height of the rectangle.
   */
  setSize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  /**
   * Resizes the rectangle by adjusting the current width and height by delta values.
   *
   * @param {number} [deltaWidth=0] - The change in width.
   * @param {number} [deltaHeight=0] - The change in height.
   */
  resize(deltaWidth: number = 0, deltaHeight: number = 0): void {
    this.width += deltaWidth;
    this.height += deltaHeight;
  }

  /**
   * Moves the rectangle by adjusting the current position by delta values.
   *
   * @param {number} [deltaX=0] - The change in the x-coordinate.
   * @param {number} [deltaY=0] - The change in the y-coordinate.
   */
  move(deltaX: number = 0, deltaY: number = 0): void {
    const x = this.position.x + deltaX;
    const y = this.position.y + deltaY;

    this.position = { x: x, y: y };
  }

  /**
   * Rotates the rectangle by adjusting its current angle.
   *
   * @param {number} deltaRotation - The amount to adjust the rectangle's rotation, in degrees.
   */
  rotate(deltaRotation: number): void {
    this.angle.adjustBy(deltaRotation);
  }

  private getTopLeftPosition(): Point {
    if(this.options.centered) {
      return new Point(
        this._definition.position.x - this._definition.width / 2,
        this._definition.position.y - this._definition.height / 2
      );
    }

    return this._definition.position;
  }

  /**
   * Renders the rectangle on the canvas using the provided 2D rendering context.
   *
   * The rectangle will be rendered with its current position, size, and rotation.
   *
   * @param {CanvasRenderingContext2D} context - The 2D rendering context of the canvas where the rectangle will be drawn.
   */
  render(context: CanvasRenderingContext2D): void {
    context.save(); // Save the current canvas state

    // Set rectangle specific styles
    context.fillStyle = this.style.color ?? context.fillStyle;

    let topLeft = this.getTopLeftPosition();

    // Rotate
    if(this.angle.degrees !== 0) {
      // Translate to the rectangle's position and apply rotation
      context.translate(this._definition.position.x, this._definition.position.y);
      context.rotate(this._definition.angle.radians);

      // Translate back if centered
      if(this.options.centered) {
        context.translate(-this._definition.width / 2, -this._definition.height / 2);
      }

      // Because we are in translated context
      topLeft = { x: 0, y: 0 };
    }

    context.fillRect(
      topLeft.x,
      topLeft.y,
      this._definition.width,
      this._definition.height
    );

    // Draw border for rect if style is set
    if (this.style.border) {
      context.lineWidth = this.style.border.width ?? context.lineWidth;
      context.strokeStyle = this.style.border.color ?? context.strokeStyle;

      context.strokeRect(
        topLeft.x,
        topLeft.y,
        this._definition.width,
        this._definition.height
      );
    }

    context.restore(); // Restore the canvas state to before the transformations
  }
}
