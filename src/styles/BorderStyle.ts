import { IBorderStyle } from "./interfaces/IBorderStyle.js";

/**
 * Represents the style options for a border.
 */
export class BorderStyle implements IBorderStyle {
  /**
   * The color of the border.
   */
  public color!: string;

  /**
   * The width of the border in pixels.
   */
  public width!: number;

  /**
   * Default style for the border.
   */
  public static readonly DefaultStyle: IBorderStyle = {
    color: '',
    width: 0
  };

  /**
   * Creates a new instance of BorderStyle.
   *
   * @param style - The partial style provided by the user.
   */
  constructor(style: Partial<IBorderStyle> = {}) {
    const styleWithDefaults = {
      ...BorderStyle.DefaultStyle,
      ...style
    };

    Object.assign(this, styleWithDefaults);
  }
}
