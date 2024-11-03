import { BorderStyle } from "./BorderStyle.js";
import { IRectangleBaseStyle } from "./interfaces/IRectangleBaseStyle.js";
import { IRectangleStyle } from "./interfaces/IRectangleStyle.js";
import { ShapeStyle } from "./ShapeStyle.js";

/**
 * Represents the style options for a rectangle.
 */
export class RectangleStyle extends ShapeStyle<IRectangleBaseStyle> implements IRectangleStyle {
  /**
   * The fill color of the rectangle.
   */
  public color!: string;

  /**
  *  The border style of the rectangle.
  */
  public border!: BorderStyle;

  /**
   * Default style for the rectangle.
   */
  public static readonly DefaultStyle: IRectangleStyle = {
    color: '#000000',
    border: BorderStyle.DefaultStyle
  };

  /**
   * Creates a new instance of RectangleStyle.
   *
   * @param style - The partial style provided by the user.
   */
  constructor(style: Partial<IRectangleStyle> = {}) {
    super();

    // Handle partial BorderStyle
    const borderStyle = new BorderStyle(style.border || {});

    const styleWithDefaults = {
      ...RectangleStyle.DefaultStyle,
      ...style,
      border: borderStyle, // Ensure border is correctly merged
    };

    Object.assign(this, styleWithDefaults);
  }
}
