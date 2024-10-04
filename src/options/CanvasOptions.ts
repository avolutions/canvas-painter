/**
 * Options for configuring the behavior of a canvas.
 */
export class CanvasOptions {
  /**
   * Default canvas options.
   */
  public static readonly DefaultOptions: CanvasOptions = {
    width: 300,
    height: 150,
  };

  /**
   * Creates a new instance of CanvasOptions.
   *
   * @param width - The width of the canvas in pixels. If undefined, a default value may be used.
   * @param height - The height of the canvas in pixels. If undefined, a default value may be used.
   */
  constructor(
    public width?: number, // Optional width in pixels.
    public height?: number // Optional height in pixels.
  ) {}
}
