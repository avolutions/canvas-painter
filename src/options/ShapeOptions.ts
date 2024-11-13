import { IShapeOptions } from "./interfaces/IShapeOptions.js";

/**
 * Base options for configuring the behavior of all shapes.
 */
export class ShapeOptions implements IShapeOptions {
  /**
   * Determines if the shape should be visible or not.
   */
  public visible!: boolean;

  /**
   * Determines if the shape can be dragged by mouse.
   */
  public draggable!: boolean;

  /**
   * Default options for shapes.
   */
  public static readonly DefaultOptions: ShapeOptions = {
    visible: true,
    draggable: true
  };
}