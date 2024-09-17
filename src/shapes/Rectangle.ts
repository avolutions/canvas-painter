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
export class Rectangle extends Shape<RectangleDefinition> {

  protected _options: RectangleOptions;

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
    const rectangleDefinition = new RectangleDefinition(new Point(x, y), width, height, Angle.fromDegrees(rotation), style);
    super(rectangleDefinition);
    this._options = options;
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

  public get style(): RectangleStyle {
    return this._definition.style;
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
   * Sets the angle (rotation) of the rectangle.
   * @param {Angle} angle - The new angle of the rectangle.
   */
  public set angle(angle: Angle) {
    this._definition.angle = angle;
  }

  public set style(style: RectangleStyle) {
    this._definition.style = style;
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
    this.position.x += deltaX;
    this.position.y += deltaY;
  }

  /**
   * Rotates the rectangle by adjusting its current angle.
   *
   * @param {number} deltaRotation - The amount to adjust the rectangle's rotation, in degrees.
   */
  rotate(deltaRotation: number): void {
    this.angle.adjustBy(deltaRotation);
  }

  private getRenderDefinition(): RectangleDefinition {
    const renderDefinition = this._definition;

    if(this._options.centered) {
      // Translate definition to center
      renderDefinition.position.x = renderDefinition.position.x - renderDefinition.width / 2;
      renderDefinition.position.y = renderDefinition.position.y - renderDefinition.height / 2;
    }

    return renderDefinition;
  }

  /**
   * Renders the rectangle on the canvas using the provided 2D rendering context.
   *
   * The rectangle will be rendered with its current position, size, and rotation.
   *
   * @param {CanvasRenderingContext2D} context - The 2D rendering context of the canvas where the rectangle will be drawn.
   */
  render(context: CanvasRenderingContext2D): void {
    const definition = this.getRenderDefinition();

    context.save(); // Save the current canvas state

    // Rotate
    // TODO centered rectangle
    if(this.angle.degrees != 0) {
      // Translate to the rectangle's position and apply rotation
      context.translate(definition.position.x, definition.position.y);
      context.rotate(definition.angle.radians);
      context.translate(-definition.position.x, -definition.position.y);
    }

    context.fillRect(
      definition.position.x,
      definition.position.y,
      definition.width,
      definition.height
    );

    context.restore(); // Restore the canvas state to before the transformations
  }
}
