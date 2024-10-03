/**
 * Options for configuring the behavior of a canvas.
 */
export class CanvasOptions {
  /**
   * Creates a new instance of CanvasOptions.
   *
   * @param width - The width of the canvas in pixels. If undefined, a default value may be used.
   * @param height - The height of the canvas in pixels. If undefined, a default value may be used.
   */
  constructor(
    public width?: number,
    public height?: number
  ) {}
}
