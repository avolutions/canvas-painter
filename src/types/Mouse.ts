import { Point } from "./Point.js";

/**
 * A utility class for handling mouse-related events.
 */
export class Mouse {

  /**
   * Gets the position of the mouse relative to the element that triggered the event.
   *
   * @param event - The MouseEvent object that contains the mouse event data.
   * @returns A Point object representing the X and Y coordinates relative to the event target.
   */
  public static getOffsetPosition(event: MouseEvent): Point {
    return new Point(event.offsetX, event.offsetY);
  }

  /**
   * Gets the position of the mouse relative to the viewport (visible area of the browser window).
   *
   * @param event - The MouseEvent object that contains the mouse event data.
   * @returns A Point object representing the X and Y coordinates relative to the viewport.
   */
  public static getClientPosition(event: MouseEvent): Point {
    return new Point(event.clientX, event.clientY);
  }

  /**
   * Gets the position of the mouse relative to the entire document, including the scroll position.
   *
   * @param event - The MouseEvent object that contains the mouse event data.
   * @returns A Point object representing the X and Y coordinates relative to the document.
   */
  public static getPagePosition(event: MouseEvent): Point {
    return new Point(event.pageX, event.pageY);
  }

  /**
   * Gets the position of the mouse relative to the entire screen (including monitor setup).
   *
   * @param event - The MouseEvent object that contains the mouse event data.
   * @returns A Point object representing the X and Y coordinates relative to the screen.
   */
  public static getScreenPosition(event: MouseEvent): Point {
    return new Point(event.screenX, event.screenY);
  }
}