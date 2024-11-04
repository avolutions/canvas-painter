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
   * The color of the border.
   */
  public borderColor!: string;

  /**
   * The width of the border in pixels.
   */
  public borderWidth!: number;

  /**
   * Default style for the rectangle.
   */
  public static readonly DefaultStyle: IRectangleStyle = {
    color: '#000000',
    borderColor: '',
    borderWidth: 0
  };

  /**
   * Creates a new instance of RectangleStyle.
   *
   * @param style - The partial style provided by the user.
   */
  constructor(style: Partial<IRectangleStyle> = {}) {
    super();

    const styleWithDefaults = {
      ...RectangleStyle.DefaultStyle,
      ...style
    };

    Object.assign(this, styleWithDefaults);
  }
}
