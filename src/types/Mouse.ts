import { Point } from "./Point.js";

/**
 * A utility class for handling mouse-related events.
 */
export class Mouse {

  /**
   * Returns the position of the mouse pointer relative to the target element
   * when a mouse event occurs.
   *
   * @param event - The mouse event containing information about the mouse pointer position.
   * @returns A `Point` object representing the position of the mouse pointer,
   * where the `x` coordinate is the `offsetX` and the `y` coordinate is the `offsetY` from the event.
   */
  public static getEventPosition(event: MouseEvent): Point {
    return new Point(event.offsetX, event.offsetY);
  }
}