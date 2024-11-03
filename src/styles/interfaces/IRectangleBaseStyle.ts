import { IBorderStyle } from "./IBorderStyle.js";
import { IShapeBaseStyle } from "./IShapeBaseStyle.js";

/**
 * Represents the base style options for a rectangle.
 */
export interface IRectangleBaseStyle extends IShapeBaseStyle {
  /**
   * The fill color of the rectangle.
   */
  color?: string;

  /**
   *  The border style of the rectangle.
   */
  border?: IBorderStyle;
}