import { IShapeBaseStyle } from "./IShapeBaseStyle.js";

/**
 * Interface representing the style properties for a shape.
 */
export interface IShapeStyle {
  /**
   * Hover style for the shape.
   *
   * When the shape is in the hover state, the properties defined in this style
   * override the default style properties.
   */
  hover?: IShapeBaseStyle;
}
