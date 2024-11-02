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
   * Determines if the border is visible based on its color and width.
   * A border is considered present if the color is non-empty and the width is greater than 0.
   *
   * @returns `true` if the border has a color and a positive width, `false` otherwise.
   */
  public hasBorder(): boolean {
    return this.color !== '' && this.width > 0;
  }

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
