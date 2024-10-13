import { IZoomOptions } from "./interfaces/IZoomOptions.js";
import { Options } from "./Options.js";

/**
 * Options for configuring the zoom behavior of a canvas.
 */
export class ZoomOptions extends Options<IZoomOptions> implements IZoomOptions {
  /**
   * The step value for zoom increments.
   */
  public step!: number;

  /**
   * Whether zooming with the mouse wheel is enabled.
   */
  public useWheel!: boolean;

  /**
   * Default zoom options.
   */
  public static readonly DefaultOptions: IZoomOptions = {
    step: 0.1,
    useWheel: true
  };

  /**
   * Creates a new instance of ZoomOptions.
   *
   * @param options The partial options provided by the user.
   */
  constructor(options: Partial<IZoomOptions> = {}) {
    super(options, ZoomOptions.DefaultOptions);
  }
}