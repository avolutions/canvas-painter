import { ShapeState } from "../common/ShapeState.js";
import { Point } from "../types/Point.js";

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

  /**
   * Makes the shape visible, allowing it to be rendered on the canvas.
   * If the shape was previously hidden, calling this method will make it appear
   * during the next rendering cycle.
   */
  show(): void;

  /**
   * Hides the shape, preventing it from being rendered on the canvas.
   * The shape will still exist and retain its properties, but it will not
   * appear during rendering until `show()` is called.
   */
  hide(): void;

  /**
   * Checks whether the shape is currently visible.
   *
   * @returns Returns true if the shape is visible and will be rendered on the canvas.
   *          Returns false if the shape is hidden and will not be rendered.
   */
  isVisible(): boolean;

  /**
   * Gets the current state of the shape.
   *
   * @returns The current state of the shape.
   */
  get state(): ShapeState;

  /**
   * Sets a new state for the shape.
   *
   * @param state - The new state to assign to the shape.
   */
  set state(state: ShapeState);
}
