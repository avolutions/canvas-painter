import { IShapeStyle } from "../IShapeStyle.js";
import { IBorderStyle } from "./IBorderStyle.js";

/**
 * Represents the style options for a circle.
 */
export interface ICircleStyle extends IShapeStyle {
  /**
   * The fill color of the circle.
   */
  color?: string;

  /**
   *  The border style of the circle.
   */
  border?: IBorderStyle;
}