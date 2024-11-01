import { ICanvasCursorStyle } from "./ICanvasCursorStyle.js";

/**
 * Represents the style of a canvas.
 */
export interface ICanvasStyle {
  /**
   * Default color for canvas shapes.
   */
  color?: string;

  /**
   * Cursor style configuration for different canvas interaction states.
   */
  cursor?: ICanvasCursorStyle;
}