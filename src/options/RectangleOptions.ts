import { ShapeOptions } from "./ShapeOptions.js";

/**
 * Options for configuring the behavior of a rectangle shape.
 */
export class RectangleOptions extends ShapeOptions {
  /**
   * Default options for the rectangle.
   */
  public static readonly DefaultOptions: RectangleOptions = {
    ...ShapeOptions.DefaultOptions,
    centered: false,
  };

  /**
   * Creates a new instance of RectangleOptions.
   *
   * @param centered - If true, the rectangle will be centered at the provided position.
   *                   If false or undefined, the rectangle will be positioned from the top-left corner.
   */
  constructor(
    public centered?: boolean
  ) {
    super();
  }
}
