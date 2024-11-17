import { Cursor } from "../../types/Cursor.js";
import { IShapeBaseStyle } from "./IShapeBaseStyle.js";

/**
 * Interface representing the style properties for a shape.
 */
export interface IShapeStyle {
  /**
   * Specifies the cursor style for the shape.
   */
  cursor?: Cursor;

  /**
   * Hover style for the shape.
   *
   * When the shape is in the hover state, the properties defined in this style
   * override the default style properties.
   */
  hover?: IShapeBaseStyle;

  /**
   * Active style for the shape.
   *
   * When the shape is in the active state, the properties defined in this style
   * override the default style properties.
   */
  active?: IShapeBaseStyle;
}
