
import { IRectangleOptions } from "./interfaces/IRectangleOptions.js";
import { Options } from "./Options.js";
import { ShapeOptions } from "./ShapeOptions.js";

/**
 * Options for configuring the behavior of a rectangle shape.
 */
export class RectangleOptions extends Options<IRectangleOptions> implements IRectangleOptions {
  /**
   * Determines if the shape should be visible or not.
   */
  public visible!: boolean;

  /**
   * If true, the rectangle will be centered at the provided position.
   * If false or undefined, the rectangle will be positioned from the top-left corner.
   */
  public centered!: boolean;

  /**
   * Default options for the rectangle.
   */
  public static readonly DefaultOptions: IRectangleOptions = {
    ...ShapeOptions.DefaultOptions,
    centered: false
  };

  /**
   * Creates a new instance of RectangleOptions.
   *
   * @param options The partial options provided by the user.
   */
  constructor(options: Partial<IRectangleOptions> = {}) {
    super(options, RectangleOptions.DefaultOptions);
  }
}
