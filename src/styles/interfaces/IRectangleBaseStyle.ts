import { IShapeBaseStyle } from "./IShapeBaseStyle.js";

/**
 * Represents the base style options for a rectangle.
 */
export interface IRectangleBaseStyle extends IShapeBaseStyle {
  /**
   * The color of the border.
   */
  borderColor?: string;

  /**
   * The width of the border in pixels.
   */
  borderWidth?: number;

  /**
   * The fill color of the rectangle.
   */
  color?: string;
}