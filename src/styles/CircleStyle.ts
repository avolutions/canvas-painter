import { BorderStyle } from "./BorderStyle.js";
import { ICircleStyle } from "./interfaces/ICircleStyle.js";

/**
 * Represents the style options for a circle.
 */
export class CircleStyle implements ICircleStyle {
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
