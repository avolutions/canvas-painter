import { ILineOptions } from "./interfaces/ILineOptions.js";
import { Options } from "./Options.js";
import { ShapeOptions } from "./ShapeOptions.js";

/**
 * Options for configuring the behavior of a line shape.
 */
export class LineOptions extends Options<ILineOptions> implements ILineOptions {
  /**
   * Determines if the shape should be visible or not.
   */
  public visible!: boolean;

  /**
   * Default options for the line.
   */
  public static readonly DefaultOptions: ILineOptions = {
    ...ShapeOptions.DefaultOptions,
  };

  /**
   * Creates a new instance of LineOptions.
   *
   * @param options The partial options provided by the user.
   */
  constructor(options: Partial<ILineOptions> = {}) {
    super(options, LineOptions.DefaultOptions);
  }
}