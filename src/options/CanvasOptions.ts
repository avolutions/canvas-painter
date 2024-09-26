/**
 * Interface representing the options for configuring a canvas.
 *
 * This interface allows for optional configuration of the canvas width and height.
 */
export interface CanvasOptions {
  /**
   * Optional width of the canvas in pixels.
   * If not provided, the default width will be used.
   */
  width?: number;

  /**
   * Optional height of the canvas in pixels.
   * If not provided, the default height will be used.
   */
  height?: number;
}
