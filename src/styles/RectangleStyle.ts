import { BorderStyle } from "./BorderStyle.js";
import { IShapeStyle } from "./IShapeStyle.js";

/**
 * Class representing the style of a rectangle.
 */
export class RectangleStyle implements IShapeStyle {
  /**
   * Creates a new instance of RectangleStyle.
   *
   * @param color - The fill color of the rectangle. If undefined, a default color may be used.
   * @param border - The border style of the rectangle. If undefined, no border may be applied.
   */
  constructor(
    public color?: string,
    public border?: BorderStyle
  ) {}
}
