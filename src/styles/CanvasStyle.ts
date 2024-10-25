import { CanvasCursorStyle } from "./CanvasCursorStyle.js";
import { ICanvasStyle } from "./interfaces/ICanvasStyle.js";

/**
 * Class representing the style of a canvas.
 */
export class CanvasStyle implements ICanvasStyle {

  /**
   * Default color for canvas shapes.
   */
  public color!: string;

  /**
   * Cursor style configuration for different canvas interaction states.
   */
  public cursor!: CanvasCursorStyle;

  /**
   * Default style for the canvas.
   */
  public static readonly DefaultStyle: ICanvasStyle = {
    color: '#000000',
    cursor: CanvasCursorStyle.DefaultStyle,
  };

  /**
   * Creates a new instance of CanvasStyle.
   *
   * @param style - The partial style provided by the user.
   */
  constructor(style: Partial<ICanvasStyle> = {}) {
     // Handle partial CanvasCursorStyle
     const canvasCursorStyle = new CanvasCursorStyle(style.cursor || {});

    const styleWithDefaults = {
      ...CanvasStyle.DefaultStyle,
      ...style,
      cursor: canvasCursorStyle, // Ensure cursor is correctly merged
    };

    Object.assign(this, styleWithDefaults);
  }
}
