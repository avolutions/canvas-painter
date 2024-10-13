import { IShapeOptions } from "./IShapeOptions.js";

/**
 * Represents options for configuring a rectangle shape.
 */
export interface IRectangleOptions extends IShapeOptions {
  /**
   * If true, the rectangle will be centered at the provided position.
   * If false or undefined, the rectangle will be positioned from the top-left corner.
   */
  centered?: boolean;
}