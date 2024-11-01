import { IShapeStyle } from "./IShapeStyle.js";

/**
 * Represents the style options for a line.
 */
export interface ILineStyle extends IShapeStyle {
  /**
   * The color of the line stroke.
   */
  color?: string;

  /**
   * The width of the line stroke.
   */
  width?: number;
}