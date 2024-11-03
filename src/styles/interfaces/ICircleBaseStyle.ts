import { IBorderStyle } from "./IBorderStyle.js";
import { IShapeBaseStyle } from "./IShapeBaseStyle.js";

/**
 * Represents the base style options for a circle.
 */
export interface ICircleBaseStyle extends IShapeBaseStyle {
  /**
   * The fill color of the circle.
   */
  color?: string;

  /**
   *  The border style of the circle.
   */
  border?: IBorderStyle;
}