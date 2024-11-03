import { ILineBaseStyle } from "./interfaces/ILineBaseStyle.js";
import { ILineStyle } from "./interfaces/ILineStyle.js";
import { ShapeStyle } from "./ShapeStyle.js";

/**
 * Represents the style options for a line.
 */
export class LineStyle extends ShapeStyle<ILineBaseStyle> implements ILineStyle {
  /**
   * The color of the line stroke.
   */
  public color!: string;

  /**
  * The width of the line stroke.
  */
  public width!: number;

  /**
   * Default style for the line.
   */
  public static readonly DefaultStyle: ILineStyle = {
    color: '#000000',
    width: 1
  };

  /**
   * Creates a new instance of LineStyle.
   *
   * @param style - The partial style provided by the user.
   */
  constructor(style: Partial<ILineStyle> = {}) {
    super();

    const styleWithDefaults = {
      ...LineStyle.DefaultStyle,
      ...style
    };

    Object.assign(this, styleWithDefaults);
  }
}
