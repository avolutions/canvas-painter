import { BorderStyle } from "./BorderStyle.js";
import { IShapeStyle } from "./IShapeStyle.js";

/**
 * Class representing the style of a circle.
 */
export class CircleStyle implements IShapeStyle {
  /**
   * Creates a new instance of CircleStyle.
   *
   * @param color - The fill color of the circle. If undefined, a default color may be used.
   * @param border - The border style of the circle. If undefined, no border may be applied.
   */
  constructor(
    public color?: string,
    public border?: BorderStyle
  ) {}
}
