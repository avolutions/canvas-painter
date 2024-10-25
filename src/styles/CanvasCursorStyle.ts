import { Cursor } from "../types/Cursor.js";
import { ICanvasCursorStyle } from "./interfaces/ICanvasCursorStyle.js";

/**
 * Represents the cursor style configuration for a canvas, defining how the cursor appears in
 * different states such as default and pan (dragging) mode.
 */
export class CanvasCursorStyle implements ICanvasCursorStyle {
  /**
   * Cursor style in the default state.
   */
  public default!: Cursor;

  /**
   * Cursor style when panning is active on the canvas.
   */
  public panActive!: Cursor;

  /**
   * Default style for the canvas cursors.
   */
  public static readonly DefaultStyle: ICanvasCursorStyle = {
    default: Cursor.Default,
    panActive: Cursor.Grabbing
  };

  /**
   * Creates a new instance of CanvasCursorStyle.
   *
   * @param style - The partial style provided by the user.
   */
  constructor(style: Partial<ICanvasCursorStyle> = {}) {
    const styleWithDefaults = {
      ...CanvasCursorStyle.DefaultStyle,
      ...style
    };

    Object.assign(this, styleWithDefaults);
  }
}