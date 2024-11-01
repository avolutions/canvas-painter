import { IShapeStyle } from "./IShapeStyle.js";
import { IBorderStyle } from "./IBorderStyle.js";

/**
 * Represents the style options for a rectangle.
 */
export interface IRectangleStyle extends IShapeStyle {
  /**
   * The fill color of the rectangle.
   */
  color?: string;

  /**
   *  The border style of the rectangle.
   */
  border?: IBorderStyle;
}