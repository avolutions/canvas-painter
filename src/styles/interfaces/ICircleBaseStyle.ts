import { IShapeBaseStyle } from "./IShapeBaseStyle.js";

/**
 * Represents the base style options for a circle.
 */
export interface ICircleBaseStyle extends IShapeBaseStyle {
  /**
   * The color of the border.
   */
  borderColor?: string;

  /**
   * The width of the border in pixels.
   */
  borderWidth?: number;

  /**
   * The fill color of the circle.
   */
  color?: string;
}