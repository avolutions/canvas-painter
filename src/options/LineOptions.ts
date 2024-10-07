import { ShapeOptions } from "./ShapeOptions.js";

/**
 * Options for configuring the behavior of a line shape.
 */
export class LineOptions extends ShapeOptions {
  /**
   * Default options for the line.
   */
  public static readonly DefaultOptions: LineOptions = {
    ...ShapeOptions.DefaultOptions,
  };
}