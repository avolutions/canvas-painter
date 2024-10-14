import { ICanvasOptions } from "./interfaces/ICanvasOptions.js";
import { IPanOptions } from "./interfaces/IPanOptions.js";
import { PanOptions } from "./PanOptions.js";
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
   * Whether panning is enabled on the canvas.
   */
  public pannable!: boolean;

  /**
   * The options for configuring the pan behavior of the canvas.
   */
  public pan!: IPanOptions;

  /**
   * Default canvas options.
   */
  public static readonly DefaultOptions: ICanvasOptions = {
    width: 300,
    height: 150,
    zoomable: false,
    pannable: false,
    zoom: ZoomOptions.DefaultOptions,
    pan: PanOptions.DefaultOptions
  };

  /**
   * Creates a new instance of CanvasOptions.
   *
   * @param options The partial options provided by the user.
   */
  constructor(options: Partial<ICanvasOptions> = {}) {
    // Handle partial ZoomOptions
    const zoomOptions = new ZoomOptions(options.zoom || {});

    // Handle partial PanOptions
    const panOptions = new PanOptions(options.pan || {});

    // Create the merged options
    const optionsWithDefaults = {
      ...CanvasOptions.DefaultOptions,
      ...options,
      zoom: zoomOptions, // Ensure zoom is correctly merged
      pan: panOptions, // Ensure pan is correctly merged
    };

    Object.assign(this, optionsWithDefaults);
  }
}
