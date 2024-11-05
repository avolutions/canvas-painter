import { Cursor } from "../types/Cursor.js";
import { ICircleBaseStyle } from "./interfaces/ICircleBaseStyle.js";
import { ICircleStyle } from "./interfaces/ICircleStyle.js";
import { ShapeStyle } from "./ShapeStyle.js";

/**
 * Represents the style options for a circle.
 */
export class CircleStyle extends ShapeStyle<ICircleBaseStyle> implements ICircleStyle {
  /**
   * The color of the border.
   */
  public borderColor!: string;

  /**
   * The width of the border in pixels.
   */
  public borderWidth!: number;

  /**
   * The fill color of the circle.
   */
  public color!: string;

  /**
   * Default style for the circle.
   */
  public static readonly DefaultStyle: ICircleStyle = {
    borderColor: '#000000',
    borderWidth: 0,
    color: '#000000',
    cursor: Cursor.Default
  };

  /**
   * Creates a new instance of CircleStyle.
   *
   * @param style - The partial style provided by the user.
   */
  constructor(style: Partial<ICircleStyle> = {}) {
    super();

    const styleWithDefaults = {
      ...CircleStyle.DefaultStyle,
      ...style
    };

    Object.assign(this, styleWithDefaults);
  }
}
