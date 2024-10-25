/**
 * Enum representing possible CSS cursor values.
 */
export enum Cursor {
  /**
   * Indicates an alias or shortcut is to be created.
   */
  Alias = "alias",

  /**
   * Indicates that scrolling in any direction is possible.
   */
  AllScroll = "all-scroll",

  /**
   * The browser determines the cursor based on the context.
   */
  Auto = "auto",

  /**
   * An available cell (usually for table or spreadsheet navigation).
   */
  Cell = "cell",

  /**
   * Indicates that an edge is to be moved, changing the column width.
   */
  ColResize = "col-resize",

  /**
   * A context menu is available.
   */
  ContextMenu = "context-menu",

  /**
   * Indicates that something can be copied.
   */
  Copy = "copy",

  /**
   * The default cursor (usually an arrow).
   */
  Default = "default",

  /**
   * The east edge is to be moved.
   */
  EResize = "e-resize",

  /**
   * Both the east and west edges are to be moved.
   */
  EwResize = "ew-resize",

  /**
   * An item is being grabbed.
   */
  Grab = "grab",

  /**
   * An item is being grabbed and dragged.
   */
  Grabbing = "grabbing",

  /**
   * A help cursor, usually rendered as a question mark.
   */
  Help = "help",

  /**
   * Indicates that something is not allowed to be done.
   */
  NotAllowed = "not-allowed",

  /**
   * The item may not be dropped at the current location.
   */
  NoDrop = "no-drop",

  /**
   * No cursor is rendered.
   */
  None = "none",

  /**
   * The north edge is to be moved.
   */
  NResize = "n-resize",

  /**
   * The northeast edge is to be moved.
   */
  NeResize = "ne-resize",

  /**
   * Both the northeast and southwest edges are to be moved.
   */
  NeswResize = "nesw-resize",

  /**
   * The northwest edge is to be moved.
   */
  NwResize = "nw-resize",

  /**
   * Both the northwest and southeast edges are to be moved.
   */
  NwseResize = "nwse-resize",

  /**
   * Something is to be moved.
   */
  Move = "move",

  /**
   * The cursor is a pointer that indicates a link. Typically an image of a pointing hand.
   */
  Pointer = "pointer",

  /**
   * The south edge is to be moved.
   */
  SResize = "s-resize",

  /**
   * The southeast edge is to be moved.
   */
  SeResize = "se-resize",

  /**
   * The southwest edge is to be moved.
   */
  SwResize = "sw-resize",

  /**
   * Text can be selected (usually rendered as an I-bar).
   */
  Text = "text",

  /**
   * Indicates vertical-text, such as for Asian languages.
   */
  VerticalText = "vertical-text",

  /**
   * The program is busy (often rendered as a spinning wheel or hourglass).
   */
  Wait = "wait",

  /**
   * The west edge is to be moved.
   */
  WResize = "w-resize",

  /**
   * The cursor indicates that zooming in is possible.
   */
  ZoomIn = "zoom-in",

  /**
   * The cursor indicates that zooming out is possible.
   */
  ZoomOut = "zoom-out",
}