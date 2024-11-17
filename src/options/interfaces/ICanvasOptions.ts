import { IPanOptions } from "./IPanOptions.js";
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
   * Determines whether interactivity is enabled for the canvas.
   */
  interactive?: boolean;

  /**
   * Whether zooming is enabled on the canvas.
   */
  zoomable?: boolean;

  /**
   * The options for configuring the zoom behavior of the canvas.
   */
  zoom?: IZoomOptions;

  /**
   * Whether panning is enabled on the canvas.
   */
  pannable?: boolean;

  /**
   * The options for configuring the pan behavior of the canvas.
   */
  pan?: IPanOptions;
}
