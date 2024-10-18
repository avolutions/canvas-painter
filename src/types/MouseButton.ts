/**
 * Enum representing mouse buttons.
 *
 * Used to identify which mouse button was pressed during a mouse event.
 * The values correspond to the `MouseEvent.button` property.
 *
 * @enum {number}
 */
export enum MouseButton {
  /**
   * The left mouse button (usually the primary button).
   * Corresponds to `MouseEvent.button` value `0`.
   */
  Left = 0,

  /**
   * The middle mouse button (usually the scroll wheel button).
   * Corresponds to `MouseEvent.button` value `1`.
   */
  Middle = 1,

  /**
   * The right mouse button (usually the secondary button).
   * Corresponds to `MouseEvent.button` value `2`.
   */
  Right = 2,

  /**
   * The browser back button (if available).
   * Corresponds to `MouseEvent.button` value `3`.
   */
  Back = 3,

  /**
   * The browser forward button (if available).
   * Corresponds to `MouseEvent.button` value `4`.
   */
  Forward = 4
}
