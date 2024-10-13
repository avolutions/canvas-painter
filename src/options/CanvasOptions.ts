import { ICanvasOptions } from "./interfaces/ICanvasOptions.js";
import { ZoomOptions } from "./ZoomOptions.js";

/**
 * Options for configuring the behavior of a canvas.
 */
export class CanvasOptions implements ICanvasOptions {
  /**
   * The width of the canvas in pixels.
   */
  public width!: number;

  /**
   * The height of the canvas in pixels.
   */
  public height!: number;

  /**
   * Whether zooming is enabled on the canvas.
   */
  public zoomable!: boolean;

  /**
   * The options for configuring the zoom behavior of the canvas.
   */
  public zoom!: ZoomOptions;

  /**
   * Default canvas options.
   */
  public static readonly DefaultOptions: ICanvasOptions = {
    width: 300,
    height: 150,
    zoomable: false,
    zoom: ZoomOptions.DefaultOptions
  };

  /**
   * Creates a new instance of CanvasOptions.
   *
   * @param options The partial options provided by the user.
   */
  constructor(options: Partial<ICanvasOptions> = {}) {
    // Handle partial ZoomOptions
    const zoomOptions = new ZoomOptions(options.zoom || {});

    // Create the merged options
    const optionsWithDefaults = {
      ...CanvasOptions.DefaultOptions,
      ...options,
      zoom: zoomOptions, // Ensure zoom is correctly merged
    };

    Object.assign(this, optionsWithDefaults);
  }
}
