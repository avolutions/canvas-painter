import { ShapeOptions } from "./ShapeOptions.js";

/**
 * Options for configuring the behavior of a circle shape.
 */
export class CircleOptions extends ShapeOptions {
  /**
   * Default options for the circle.
   */
  public static readonly DefaultOptions: CircleOptions = {
    ...ShapeOptions.DefaultOptions,
  };
}