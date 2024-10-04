/**
 * Class representing the style of a canvas.
 */
export class CanvasStyle {
  /**
   * Default style for the canvas.
   */
  public static readonly DefaultStyle: CanvasStyle = {
    color: '#000000',
  };

  /**
   * Creates a new instance of CanvasStyle.
   *
   * @param color - The background color of the canvas. If undefined, a default color may be used.
   */
  constructor(
    public color?: string
  ) {}
}
