/**
 * Class representing the border style of a shape.
 */
export class BorderStyle {
  /**
   * Creates a new instance of BorderStyle.
   *
   * @param color - The color of the border. If undefined, a default color may be used.
   * @param width - The width of the border in pixels. If undefined, a default width may be used.
   */
  constructor(
    public color?: string,
    public width?: number
  ) {}
}
