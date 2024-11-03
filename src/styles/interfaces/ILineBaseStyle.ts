import { IShapeBaseStyle } from "./IShapeBaseStyle.js";

/**
 * Represents the base style options for a line.
 */
export interface ILineBaseStyle extends IShapeBaseStyle {
  /**
   * The color of the line stroke.
   */
  color?: string;

  /**
   * The width of the line stroke.
   */
  width?: number;
}