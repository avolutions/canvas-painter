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

  private _zoomScale: number = 1.0;
  private _panOffset: Point;
  private isPanning: boolean = false;
  private panStart: Point;

  /**
   * Constructs a new Canvas instance.
   *
   * @param canvas - The HTML canvas element.
   * @param context - The 2D rendering context of the canvas.
   * @param options - Optional configuration options for the canvas.
   * @param style - Optional styling options for the canvas.
   * @private
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
    this.panStart = new Point(0, 0);

    this.addEventListener();
  }

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

  private onWheel(event: WheelEvent): void {
    event.preventDefault();

    // If pannable is active, we use current mouse position as zoom center
    let mousePosition;
    if (this._options.pannable) {
      mousePosition = Mouse.getEventOffsetPosition(event);
    }

    if (event.deltaY < 0) {
      this.zoomIn(mousePosition);
    } else {
      this.zoomOut(mousePosition);
    }
  }

  private onMouseDown(event: MouseEvent): void {
    this.isPanning = true;

    const mousePosition = Mouse.getEventOffsetPosition(event);

    this.panStart = new Point(
      mousePosition.x - this.panOffset.x,
      mousePosition.y - this.panOffset.y
    );
  }

  private onMouseMove(event: MouseEvent): void {
    if (!this.isPanning) {
      return;
    }

    const mousePosition = Mouse.getEventOffsetPosition(event);

    this.panOffset = new Point(
      mousePosition.x - this.panStart.x,
      mousePosition.y - this.panStart.y
    );
  }

  private onMouseUp(event: MouseEvent): void {
    this.isPanning = false;
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

  public getCenter(): Point {
    const x = this._options.width! / 2;
    const y = this._options.height! / 2;

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
   * @returns A new Canvas instance.
   * @throws {Error} If the canvas element is not found or is not a valid canvas.
   */
  public static init(id: string, options?: ICanvasOptions, style?: CanvasStyle): Canvas {
    const canvas = document.getElementById(id);
    if (!canvas) {
      throw new Error(`Element with id '${id}' not found`);
    }

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error(`Element with id '${id}' is not a canvas`);
    }

    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error(`Failed to get '2d' context from canvas`);
    }

    return new Canvas(canvas, context, options, style);
  }

  /**
   * Sets the canvas rendering context's styles based on the provided CanvasStyle.
   *
   * @param style - The style settings to apply to the canvas context.
   * @private
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
   *
   * @private
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

  public zoomIn(position?: Point): void {
    const zoomFactor = 1 + this._options.zoom.step;
    this.applyZoom(zoomFactor, position);
  }

  public zoomOut(position?: Point): void {
    const zoomFactor = 1 - this._options.zoom.step;
    this.applyZoom(zoomFactor, position);
  }

  private applyZoom(zoomFactor: number = 1, position?: Point) {
    // If not position was provided we zoom to center
    if (!position) {
      position = this.getCenter();
    }

    // Get mouse position in canvas space before zooming
    const x = ( position.x - this._panOffset.x ) / this.zoomScale;
    const y = ( position.y - this._panOffset.y ) / this.zoomScale;
    const canvasMouse = new Point(x, y);

    // Update the zoom scale
    const newZoomScale = this.zoomScale * zoomFactor;

    // Calculate the new pan values to keep the zoom centered on the mouse position
    this._panOffset.x = position.x - canvasMouse.x * newZoomScale;
    this._panOffset.y = position.y - canvasMouse.y * newZoomScale;

    // Not using setter here to prevent loop
    this._zoomScale = newZoomScale;

    this.redraw();
  }

  public resetZoom(): void {
    this.zoomScale = 1;
  }

  public resetPan(): void {
    this._panOffset = new Point(0, 0);
  }

  public resetZoomPan(): void {

  }

  public get zoomScale(): number {
    return this._zoomScale;
  }

  public set zoomScale(value: number) {
    this._zoomScale = value;
    this.applyZoom();
  }

  public get panOffset(): Point {
    return this._panOffset;
  }

  public set panOffset(value: Point) {
    this._panOffset = value;
    this.redraw();
  }
}
