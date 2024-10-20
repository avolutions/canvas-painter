import { CanvasOptions } from "./options/CanvasOptions.js";
import { ICanvasOptions } from "./options/interfaces/ICanvasOptions.js";
import { IShape } from "./shapes/IShape.js";
import { CanvasStyle } from "./styles/CanvasStyle.js";
import { Mouse } from "./types/Mouse.js";
import { Point } from "./types/Point.js";

/**
 * Class representing a Canvas element that can manage and render shapes.
 */
export class Canvas {
  /** The HTML canvas element being managed. */
  private _canvas: HTMLCanvasElement;

  /** The 2D rendering context of the canvas. */
  private _context: CanvasRenderingContext2D;

  /** Configuration options for the canvas, including dimensions. */
  private _options: CanvasOptions;

  /** Styling options for the canvas, such as border color and width. */
  private _style: CanvasStyle;

  /** List of shapes being watched for changes and re-rendered. */
  private watchedShapes: IShape[] = [];

  /** Current zoom scale factor of the canvas. */
  private _zoomScale: number = 1.0;

  /** Current offset for panning, representing how much the canvas has been moved along the x and y axes. */
  private _panOffset: Point;

  /** Indicates whether panning is currently active. */
  private _isPanning: boolean = false;

  /** The starting point of the pan operation. This is the position where the user initiated the panning action. */
  private _panStart: Point;

  /**
   * Constructs a new Canvas instance.
   *
   * @param canvas - The HTML canvas element.
   * @param context - The 2D rendering context of the canvas.
   * @param options - Optional configuration options for the canvas.
   * @param style - Optional styling options for the canvas.
   */
  private constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    options?: ICanvasOptions,
    style?: CanvasStyle
  ) {
    this._canvas = canvas;
    this._context = context;

    // Merge default options with the provided options
    this._options = new CanvasOptions(options);

    // Set styles
    this._style = {
      ...CanvasStyle.DefaultStyle,
      ...style
    };

    // Determine width, set canvas width and update options with new value
    const width = this.getWidth(options);
    this._canvas.width = width;
    this._options.width = width;

    // Determine height, set canvas width and update options with new value
    const height = this.getHeight(options);
    this._canvas.height = height;
    this._options.height = height;

    this.setContextStyle(this._style);

    this._panOffset = new Point(0, 0);
    this._panStart = new Point(0, 0);

    this.addEventListener();
  }

  /**
   * Adds event listeners for zooming and panning.
   * Zooming is enabled when `zoomable` is `true` and `useWheel` is enabled in the options.
   * Panning is enabled when `pannable` is `true` and `useMouse` is enabled in the options.
   */
  private addEventListener(): void {
    // Add event listener for zooming
    if (this._options.zoomable && this._options.zoom.useWheel) {
      this._canvas.addEventListener('wheel', this.onWheel.bind(this));
    }

    // Add event listener for panning
    if (this._options.pannable && this._options.pan.useMouse) {
      this._canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
      this._canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
      this._canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
      // Handle the case when the mouse leaves the canvas during dragging
      this._canvas.addEventListener('mouseleave', this.onMouseUp.bind(this));
    }
  }

  /**
   * Handles the `wheel` event for zooming in or out.
   * When zooming, the current mouse position is used as the zoom center if panning is active.
   *
   * @param event - The wheel event that triggers the zoom action.
   */
  private onWheel(event: WheelEvent): void {
    event.preventDefault();

    // If pannable is active, we use current mouse position as zoom center
    let mousePosition;
    if (this._options.pannable) {
      mousePosition = Mouse.getOffsetPosition(event);
    }

    if (event.deltaY < 0) {
      this.zoomIn(mousePosition);
    } else {
      this.zoomOut(mousePosition);
    }
  }

  /**
   * Handles the `mousedown` event to start the panning action.
   * The panning will only start if the pressed mouse button is configured for panning.
   *
   * @param event - The mouse event that triggers the panning action.
   */
  private onMouseDown(event: MouseEvent): void {
    // If button is not configured for panning we do nothing
    if (!this._options.pan.mouseButtons?.includes(event.button)) {
      return;
    }

    // Get mouse position in canvas
    const mousePosition = Mouse.getOffsetPosition(event);

    // Start panning
    this._isPanning = true;
    this._panStart = new Point(
      mousePosition.x - this.panOffset.x,
      mousePosition.y - this.panOffset.y
    );
  }

  /**
   * Handles the `mousemove` event to update the panning offset.
   * This is triggered when the user drags the canvas while panning.
   *
   * @param event - The mouse event that triggers the pan movement.
   */
  private onMouseMove(event: MouseEvent): void {
    if (!this._isPanning) {
      return;
    }

    const mousePosition = Mouse.getOffsetPosition(event);

    this.panOffset = new Point(
      mousePosition.x - this._panStart.x,
      mousePosition.y - this._panStart.y
    );
  }

  /**
   * Handles the `mouseup` and `mouseleave` events to stop the panning action.
   * This is triggered when the user releases the mouse or when the mouse leaves the canvas.
   *
   * @param event - The mouse event that triggers the end of the panning action.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onMouseUp(event: MouseEvent): void {
    this._isPanning = false;
  }

  /**
   * Retrieves the height of the canvas element, prioritizing the provided options,
   * then the HTML canvas element's height attribute, followed by CSS height, and finally
   * falls back to the default height.
   *
   * @param options - Optional canvas options that may contain a height.
   * @returns The height value based on the order of priority described.
   */
  private getHeight(options: ICanvasOptions | undefined): number {
    // If height was provided as option
    if (options?.height) {
      return options.height;
    }

    // If height is specified as attribute of HTML canvas element
    const htmlHeight = this._canvas.getAttribute('height')
    if (htmlHeight) {
      return parseFloat(htmlHeight);
    }

    // If height is specified in any CSS of the element
    const cssHeight = this.getCssDimensions().height;
    if (cssHeight) {
      return cssHeight;
    }

    // Use default options as ultimate fallback
    return CanvasOptions.DefaultOptions.height as number;
  }

  /**
   * Retrieves the width of the canvas element, prioritizing the provided options,
   * then the HTML canvas element's width attribute, followed by CSS width, and finally
   * falls back to the default width.
   *
   * @param options - Optional canvas options that may contain a width.
   * @returns The width value based on the order of priority described.
   */
  private getWidth(options: ICanvasOptions | undefined): number {
    // If width was provided as option
    if (options?.width) {
      return options.width;
    }

    // If width is specified as attribute of HTML canvas element
    const htmlWidth = this._canvas.getAttribute('width')
    if (htmlWidth) {
      return parseFloat(htmlWidth);
    }

    // If width is specified in any CSS of the element
    const cssWidth = this.getCssDimensions().width;
    if (cssWidth) {
      return cssWidth;
    }

    // Use default options as ultimate fallback
    return CanvasOptions.DefaultOptions.width as number;
  }

  /**
   * Returns the center point of the canvas based on its width and height.
   *
   * @returns The center point of the canvas as a `Point` object.
   */
  public getCenter(): Point {
    const x = this._options.width / 2;
    const y = this._options.height / 2;

    return new Point(x, y);
  }

  /**
   * Retrieves the CSS width and height dimensions of the canvas element by
   * computing the styles applied to it. If the values are not present, it returns
   * undefined for both width and height.
   *
   * @returns An object containing the CSS width and height, if available.
   */
  private getCssDimensions(): { width?: number, height?: number } {
    const computedStyle = window.getComputedStyle(this._canvas);

    const width = computedStyle.width ? parseFloat(computedStyle.width) : undefined;
    const height = computedStyle.height ? parseFloat(computedStyle.height) : undefined;

    return {
      width: width,
      height: height,
    };
  }

  /**
   * Initializes a Canvas instance by retrieving the canvas element by ID and its context.
   *
   * @param id - The ID of the HTML canvas element.
   * @param options - Optional configuration options for the canvas.
   * @param style - Optional styling options for the canvas.
   *
   * @returns A new Canvas instance.
   *
   * @throws ReferenceError if the canvas element is not found.
   * @throws TypeError if the element is not a valid canvas or can't get 2d context.
   */
  public static init(id: string, options?: ICanvasOptions, style?: CanvasStyle): Canvas {
    const canvas = document.getElementById(id);
    if (!canvas) {
      throw new ReferenceError(`Element with id '${id}' not found`);
    }

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new TypeError(`Element with id '${id}' is not a canvas`);
    }

    const context = canvas.getContext('2d');
    if (!context) {
      throw new TypeError(`Failed to get '2d' context from canvas`);
    }

    return new Canvas(canvas, context, options, style);
  }

  /**
   * Sets the canvas rendering context's styles based on the provided CanvasStyle.
   *
   * @param style - The style settings to apply to the canvas context.
   */
  private setContextStyle(style: CanvasStyle): void {
    if (style.color) {
      this._context.fillStyle = style.color;
    }
  }

  /**
   * Registers a shape or an array of shapes to be watched for changes and renders them.
   *
   * @param shapeOrShapes - The shape(s) to watch and render on the canvas.
   * @param redraw - Whether to immediately redraw the canvas after registering the shape(s).
   */
  public watch(shapeOrShapes: IShape | IShape[], redraw: boolean = true): void {
    // If passed parameter was a single shape we convert it to array
    const shapes = Array.isArray(shapeOrShapes) ? shapeOrShapes : [shapeOrShapes];

    // Flag to track if at least one shape was added
    let shapeAdded = false;

    shapes.forEach((shape) => {
      if (!this.watchedShapes.includes(shape)) {
        // Add an observer to redraw the canvas when the shape changes
        shape.addObserver(this.observerRedraw);

        // Add to watched shapes
        this.watchedShapes.push(shape);

        shapeAdded = true;
      }
    });

    if (shapeAdded && redraw) {
      // Initial draw after at least one shape was added
      this.redraw();
    }
  }

  /**
   * Unregisters a shape or an array of shapes from being watched and re-renders the canvas.
   *
   * @param shapeOrShapes - The shape(s) to stop watching.
   * @param redraw - Whether to immediately redraw the canvas after unregistering the shape(s).
   */
  public unwatch(shapeOrShapes: IShape | IShape[], redraw: boolean = true): void {
    // If passed parameter was a single shape we convert it to array
    const shapes = Array.isArray(shapeOrShapes) ? shapeOrShapes : [shapeOrShapes];

    // Flag to track if at least one shape was removed
    let shapeRemoved = false;

    shapes.forEach((shape) => {
      const index = this.watchedShapes.indexOf(shape);
      if (index !== -1) {
        // Remove observer to not redraw anymore on changes of shape
        shape.removeObserver(this.observerRedraw);

        // Remove from watched shapes
        this.watchedShapes.splice(index, 1);

        shapeRemoved = true;
      }
    });

    if (shapeRemoved && redraw) {
      // Redraw canvas after at least one shape was removed
      this.redraw();
    }
  }

  /**
   * Gets the 2D rendering context of the canvas.
   *
   * @returns The 2D context of the canvas.
   */
  public get context(): CanvasRenderingContext2D {
    return this._context;
  }

  /**
   * Clears the canvas by removing all content.
   */
  public clear(): void {
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  /**
   * Observes changes in shapes and triggers the canvas redraw process.
   */
  private observerRedraw = (): void => {
    this.redraw();
  };

  /**
   * Clears the canvas and re-renders all watched and visible shapes.
   */
  public redraw(): void {
    this.clear();

     // Reset the transformation matrix to identity
    this._context.resetTransform();

    // Apply the new transformation
    this._context.transform(this.zoomScale, 0, 0, this.zoomScale, this._panOffset.x, this._panOffset.y);

    // Render each watched shape
    this.watchedShapes.forEach((shape) => this.draw(shape));
  }

  /**
   * Renders the specified shape on the canvas if shape is visible.
   *
   * @param shape - The shape to render.
   */
  public draw(shape: IShape): void {
    if (shape.isVisible()) {
      shape.render(this.context);
    }
  }

  /**
   * Zooms in on the canvas by increasing the zoom scale.
   * If a position is provided, the zoom will be centered around that point.
   * Otherwise, it defaults to zooming in on the center of the canvas.
   *
   * @param position - Optional position to center the zoom on.
   */
  public zoomIn(position?: Point): void {
    // Do nothing if canvas is not zoomable
    if (!this._options.zoomable) {
      return;
    }

    this.applyZoom(this._options.zoom.step, position);
  }

  /**
   * Zooms out on the canvas by decreasing the zoom scale.
   * If a position is provided, the zoom will be centered around that point.
   * Otherwise, it defaults to zooming out from the center of the canvas.
   *
   * @param position - Optional position to center the zoom on.
   */
  public zoomOut(position?: Point): void {
    // Do nothing if canvas is not zoomable
    if (!this._options.zoomable) {
      return;
    }

    this.applyZoom(-this._options.zoom.step, position);
  }

  /**
   * Applies the zoom step to the canvas. The zoom scale is adjusted by the
   * given `zoomStep`, and the pan offset is recalculated to keep the zoom
   * centered on the provided position (or the center of the canvas if no
   * position is provided).
   *
   * @param zoomStep - The zoom step to apply (positive to zoom in, negative to zoom out).
   * @param position - Optional position to center the zoom on.
   */
  private applyZoom(zoomStep: number = 0, position?: Point): void {
    // Do nothing if canvas is not zoomable
    if (!this._options.zoomable) {
      return;
    }

    // If no position was provided, zoom to center
    if (!position) {
      position = this.getCenter();
    }

    // Get mouse position in canvas space before zooming
    const x = (position.x - this._panOffset.x) / this.zoomScale;
    const y = (position.y - this._panOffset.y) / this.zoomScale;
    const canvasMouse = new Point(x, y);

    // Update the zoom scale
    const newZoomScale = this.zoomScale + zoomStep;

    // Calculate the new pan values to keep the zoom centered on the mouse position
    this._panOffset.x = position.x - canvasMouse.x * newZoomScale;
    this._panOffset.y = position.y - canvasMouse.y * newZoomScale;

    // Not using setter here to prevent loop
    this._zoomScale = newZoomScale;

    this.redraw();
  }

  /**
   * Resets the zoom scale to its default value (1).
   * If the canvas is both zoomable and pannable, it resets both zoom and pan.
   */
  public resetZoom(): void {
    // Do nothing if canvas is not zoomable
    if (!this._options.zoomable) {
      return;
    }

    if (this._options.pannable) {
      this.resetZoomPan();
      return;
    }

    this.zoomScale = 1;
  }

  /**
   * Resets the pan offset to its default value (0, 0).
   */
  public resetPan(): void {
    // Do nothing if canvas is not pannable
    if (!this._options.pannable) {
      return;
    }

    this.panOffset = new Point(0, 0);
  }

  /**
   * Resets both the zoom scale and pan offset to their default values (1 for zoom scale and (0, 0) for pan).
   */
  public resetZoomPan(): void {
    // Do nothing if canvas is not zoomable and pannable
    if (!this._options.zoomable || !this._options.pannable) {
      return;
    }

    this._panOffset = new Point(0, 0);
    this.zoomScale = 1;
  }

  /**
   * Gets the current zoom scale of the canvas.
   * A value of `1` represents 100% zoom. Values below `1` indicate zooming out,
   * and values above `1` indicate zooming in.
   *
   * @returns The current zoom scale.
   */
  public get zoomScale(): number {
    return this._zoomScale;
  }

  /**
   * Sets the zoom scale of the canvas and applies the zoom.
   *
   * @param value - The new zoom scale to set.
   */
  public set zoomScale(value: number) {
    // Do nothing if canvas is not zoomable
    if (!this._options.zoomable) {
      return;
    }

    this._zoomScale = value;
    this.applyZoom();
  }

  /**
   * Gets the current pan offset of the canvas.
   *
   * @returns The current pan offset as a `Point` object.
   */
  public get panOffset(): Point {
    return this._panOffset;
  }

  /**
   * Sets the pan offset of the canvas and triggers a redraw.
   *
   * @param value - The new pan offset to set.
   */
  public set panOffset(value: Point) {
    // Do nothing if canvas is not pannable
    if (!this._options.pannable) {
      return;
    }

    this._panOffset = value;
    this.redraw();
  }

}
