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
   * The color of the border.
   */
  borderColor?: string;

  /**
   * The width of the border in pixels.
   */
  borderWidth?: number;
}