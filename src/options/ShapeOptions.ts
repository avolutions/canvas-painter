import { IShapeOptions } from "./IShapeOptions.js";

/**
 * Base options for configuring the behavior of all shapes.
 */
export class ShapeOptions implements IShapeOptions {
  /**
   * Default options for all shapes.
   */
  public static readonly DefaultOptions: ShapeOptions = {
    visible: true,
  };

  /**
   * Creates a new instance of ShapeOptions.
   *
   * @param visible - If true, the shape will be visible.
   *                  If false or undefined, the shape will be hidden.
   */
  constructor(
    public visible?: boolean
  ) {}
}