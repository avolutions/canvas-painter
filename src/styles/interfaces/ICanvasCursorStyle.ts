import { Cursor } from "../../types/Cursor.js";

/**
 * Represents the cursor style configuration for a canvas, defining how the cursor appears in
 * different states such as default and pan (dragging) mode.
 */
export interface ICanvasCursorStyle {
  /**
   * Cursor style in the default state.
   */
  default?: Cursor;

  /**
   * Cursor style when panning is active on the canvas.
   */
  panActive?: Cursor;
}