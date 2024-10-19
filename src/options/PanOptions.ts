import { MouseButton } from "../types/MouseButton.js";
import { IPanOptions } from "./interfaces/IPanOptions.js";

/**
 * Options for configuring the pan behavior of a canvas.
 */
export class PanOptions implements IPanOptions {
  /**
   * List of mouse buttons that are used for panning.
   */
  public mouseButtons!: MouseButton[];

  /**
   * Whether panning with the mouse is enabled.
   */
  public useMouse!: boolean;

  /**
   * Default pan options.
   */
  public static readonly DefaultOptions: IPanOptions = {
    useMouse: true,
    mouseButtons: [ MouseButton.Left ]
  };

  /**
   * Creates a new instance of PanOptions.
   *
   * @param options - The partial options provided by the user.
   */
  constructor(options: Partial<IPanOptions> = {}) {
    const optionsWithDefaults = {
      ...PanOptions.DefaultOptions,
      ...options
    };

    Object.assign(this, optionsWithDefaults);
  }
}