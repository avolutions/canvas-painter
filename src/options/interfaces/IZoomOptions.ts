/**
 * Represents options for configuring the zoom behavior.
 */
export interface IZoomOptions {
  /**
   * The step value for zoom increments.
   */
  step?: number;

  /**
   * Whether zooming with the mouse wheel is enabled.
   */
  useWheel?: boolean;
}
