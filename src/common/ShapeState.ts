/**
 * Enum representing the possible states for a shape.
 *
 * These defines the different states a shape can be in,
 * allowing specific styles or behaviors to be applied.
 */
export enum ShapeState {
  /**
   * The default state of the shape, with no specific interaction.
   */
  Default = "default",

  /**
   * The hover state, applied when the mouse is over the shape.
   */
  Hover = "hover",

  /**
   * The active state, applied when the shape is currently being manipulated,
   * such as during dragging or resizing.
   */
  Active = "active",
}
