import { MouseButton } from "../../types/MouseButton.js";

/**
 * Represents options for configuring the pan behavior.
 */
export interface IPanOptions {
  /**
   * List of mouse buttons that are used for panning.
   */
  mouseButtons?: MouseButton[];

  /**
   * Whether panning with the mouse is enabled.
   */
  useMouse?: boolean;
}
