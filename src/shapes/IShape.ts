/**
 * Interface representing a shape that can be rendered on a canvas.
 *
 * This interface defines methods for rendering the shape on a canvas and managing observers.
 */
export interface IShape {
  /**
   * Renders the shape to a given canvas context.
   *
   * @param context - The 2D rendering context of the canvas where the shape will be drawn.
   */
  render(context: CanvasRenderingContext2D): void;

  /**
   * Adds an observer function that will be called when the shape undergoes changes.
   *
   * @param observer - A callback function to be invoked when the shape's state changes.
   */
  addObserver(observer: () => void): void;

  /**
   * Removes an observer function that was previously added.
   *
   * @param observer - The observer callback function to be removed.
   */
  removeObserver(observer: () => void): void;
}
