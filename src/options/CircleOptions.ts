import { ICircleOptions } from "./interfaces/ICircleOptions.js";
import { ShapeOptions } from "./ShapeOptions.js";

/**
 * Options for configuring the behavior of a circle shape.
 */
export class CircleOptions implements ICircleOptions {
  /**
   * Determines if the shape should be visible or not.
   */
  public visible!: boolean;

  /**
   * Default options for the circle.
   */
  public static readonly DefaultOptions: ICircleOptions = {
    ...ShapeOptions.DefaultOptions,
  };

  /**
   * Creates a new instance of ICircleOptions.
   *
   * @param options - The partial options provided by the user.
   */
  constructor(options: Partial<ICircleOptions> = {}) {
    const optionsWithDefaults = {
      ...CircleOptions.DefaultOptions,
      ...options
    };

    Object.assign(this, optionsWithDefaults);
  }
}