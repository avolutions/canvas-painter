import { BorderStyle } from "./BorderStyle.js";
import { ICircleBaseStyle } from "./interfaces/ICircleBaseStyle.js";
import { ICircleStyle } from "./interfaces/ICircleStyle.js";
import { ShapeStyle } from "./ShapeStyle.js";

/**
 * Represents the style options for a circle.
 */
export class CircleStyle extends ShapeStyle<ICircleBaseStyle> implements ICircleStyle {
  /**
   * The fill color of the circle.
   */
  public color!: string;

  /**
  *  The border style of the circle.
  */
  public border!: BorderStyle;

  /**
   * Default style for the circle.
   */
  public static readonly DefaultStyle: ICircleStyle = {
    color: '#000000',
    border: BorderStyle.DefaultStyle
  };

  /**
   * Creates a new instance of CircleStyle.
   *
   * @param style - The partial style provided by the user.
   */
  constructor(style: Partial<ICircleStyle> = {}) {
    super();

    // Handle partial BorderStyle
    const borderStyle = new BorderStyle(style.border || {});

    const styleWithDefaults = {
      ...CircleStyle.DefaultStyle,
      ...style,
      border: borderStyle, // Ensure border is correctly merged
    };

    Object.assign(this, styleWithDefaults);
  }
}
