import { IRectangleOptions } from "../options/interfaces/IRectangleOptions.js";
import { IRectangleStyle } from "../styles/interfaces/IRectangleStyle.js";
import { Rectangle } from "./Rectangle.js";

/**
 * Class representing a Square, extending the Rectangle class.
 * Provides functionality for rendering, resizing, moving, and rotating the square.
 */
export class Square extends Rectangle {
  /**
   * Constructs a new Square instance.
   *
   * @param x - The x-coordinate of the square's position.
   * @param y - The y-coordinate of the square's position.
   * @param size - The size (width/height) of the square.
   * @param rotation - The initial rotation of the square in degrees clockwise.
   * @param style - The style options for the square.
   * @param options - The configuration options for the square.
   */
  constructor(
    x: number,
    y: number,
    size: number,
    rotation: number = 0,
    style?: IRectangleStyle,
    options?: IRectangleOptions
  ) {
    super(x, y, size, size, rotation, style, options);
  }

  // Getters

  /**
   * Gets the size (widht/height) of the square.
   * @returns The size of the square.
   */
  public get size(): number {
    return this._definition.width; // or height, both are the same
  }

  /**
   * Gets the height of the square.
   * @returns The height of the square.
   */
  public get height(): number {
    return this._definition.height;
  }

  /**
   * Gets the width of the square.
   * @returns The width of the square.
   */
  public get width(): number {
    return this._definition.width;
  }

  // Setters

  /**
   * Sets the size (width/height) of the square.
   * @param size - The new size of the square.
   */
  public set size(size: number) {
    this._definition.width = size;
    this._definition.height = size;
  }

  /**
   * Sets the height of the square and updates the width with same value.
   * @param height - The new height of the square.
   */
  public set height(height: number) {
    this._definition.height = height;
    this._definition.width = height; // Ensure the width matches the height
  }

  /**
   * Sets the width of the square and updates the height with same value.
   * @param width - The new width of the square.
   */
  public set width(width: number) {
    this._definition.width = width;
    this._definition.height = width; // Ensure the height matches the width
  }

  /**
   * Updates the size of the square by setting new width and height values.
   *
   * @param size - The new width and height of the square.
   */
  public setSize(size: number): void {
    this._definition.width = size;
    this._definition.height = size;
  }

  /**
   * Resizes the rectangle by adjusting the current size, width and height by delta value.
   *
   * @param deltaSize - The change in width.
   */
  public resize(deltaSize: number): void {
    this.size += deltaSize;
  }
}
