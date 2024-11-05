import { Cursor } from "../types/Cursor.js";
import { IShapeBaseStyle } from "./interfaces/IShapeBaseStyle.js";
import { IShapeStyle } from "./interfaces/IShapeStyle.js";

/**
 * Represents the style for a shape, including optional state-specific styles.
 */
export class ShapeStyle<TStyle extends IShapeBaseStyle> implements IShapeStyle {
  /**
   * Specifies the cursor style for the shape.
   */
  public cursor!: Cursor;

  /**
   * Hover style for the shape.
   *
   * When the shape is in the hover state, the properties defined in this style
   * override the default style properties.
   */
  public hover?: TStyle;
}
