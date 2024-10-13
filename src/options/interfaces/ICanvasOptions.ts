import { IZoomOptions } from "./IZoomOptions.js";

/**
 * Represents options for configuring a canvas.
 */
export interface ICanvasOptions {
  /**
   * The width of the canvas in pixels.
   */
  width?: number;

  /**
   * The height of the canvas in pixels.
   */
  height?: number;

  /**
   * Whether zooming is enabled on the canvas.
   */
  zoomable?: boolean;

  /**
   * The options for configuring the zoom behavior of the canvas.
   */
  zoom?: IZoomOptions;
}
