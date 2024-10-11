/**
 * Options for configuring the zoom behavior of a canvas.
 */
export class ZoomOptions {
  /**
   * Default zoom options.
   */
  public static readonly DefaultOptions: ZoomOptions = {
    step: 0.1,
    useWheel: true
  };

  /**
   * Creates a new instance of ZoomOptions.
   *
   * @param step - The zoom step increment or decrement.
   * @param useWheel - Determines whether zooming is controlled via the mouse wheel.
   */
  constructor(
    public step?: number,
    public useWheel?: boolean
  ) {}
}