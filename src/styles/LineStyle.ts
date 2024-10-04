import { IShapeStyle } from "./IShapeStyle.js";

/**
 * Represents the style options for a line.
 */
export class LineStyle implements IShapeStyle {
  /**
   * Creates an instance of LineStyle.
   *
   * @param color - The color of the line stroke. Optional.
   * @param width - The width of the line stroke. Optional.
   */
  constructor(
    public color?: string,
    public width?: number
  ) {}
}
