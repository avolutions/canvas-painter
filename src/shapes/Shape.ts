import { IHandle } from "../common/IHandle.js";
import { ISerializable } from "../common/ISerializable.js";
import { ShapeState } from "../common/ShapeState.js";
import { IShapeDefinition } from "../definitions/IShapeDefinition.js";
import { IShapeOptions } from "../options/interfaces/IShapeOptions.js";
import { IShapeStyle } from "../styles/interfaces/IShapeStyle.js";
import { Point } from "../types/Point.js";
import { IShape } from "./IShape.js";

/**
 * Abstract class representing a generic shape with observer functionality.
 *
 * @typeParam TDefinition - The type of shape definition implementing IShapeDefinition.
 * @typeParam TStyle - The type of shape style implementing IShapeStyle.
 * @typeParam TOptions - The type of shape options implementing IShapeOptions.
 */
export abstract class Shape<
  TDefinition extends IShapeDefinition,
  TStyle extends IShapeStyle,
  TOptions extends IShapeOptions
> implements IShape, ISerializable {
  /** The shape definition, proxied to trigger observer notifications on change. */
  protected _definition: TDefinition;

  /** The style settings for the shape, proxied to trigger observer notifications on change. */
  protected _style: TStyle;

  /** The options for configuring the shape, proxied to trigger observer notifications on change. */
  protected _options: TOptions;

  /** The current state of the shape, representing its visual or interactive status. */
  protected _state: ShapeState = ShapeState.Default;

  /** Indicates whether the shape is currently selected. */
  protected _selected: boolean = false;

  /** List of observer functions to be notified on shape changes. */
  protected observers: (() => void)[] = [];

  protected handles: Map<string, IHandle> = new Map();

  /**
   * Abstract method to render the shape on the canvas.
   *
   * @param context - The 2D rendering context for the canvas.
   */
  public abstract render(context: CanvasRenderingContext2D): void;

  /**
   * Constructs a Shape instance and wraps the definition, style, and options in a Proxy to handle change notifications.
   *
   * @param definition - The shape definition instance to be wrapped in a Proxy.
   * @param style - Optional style settings for the shape.
   * @param options - Optional configuration options for the shape.
   */
  constructor(definition: TDefinition, style?: TStyle, options?: TOptions) {
    this._definition = this._createProxy(definition);
    this._style = this._createProxy(style); // Default to an empty object if no style is provided
    this._options = this._createProxy(options); // Default to an empty object if no options are provided
  }

  /**
   * Creates a proxy for the given object to track changes and notify observers.
   *
   * @param obj - The object to be proxied.
   * @returns A proxied object that triggers observer notifications on change.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _createProxy(obj: any): any {
    if (typeof obj === 'object' && obj !== null) {
      // Recursively apply proxy to all nested objects
      Object.keys(obj).forEach(key => {
        obj[key] = this._createProxy(obj[key]);
      });

      return new Proxy(obj, {
        set: (target, prop, value) => {
          const oldValue = target[prop];
          // Only notify if the value actually changes
          if (oldValue !== value) {
            target[prop] = value;
            this.notifyObservers();
            return true;
          }
          return true;
        },
        get: (target, prop) => {
          const value = target[prop];
          // Ensure nested properties are also proxied
          if (typeof value === 'object' && value !== null) {
            return this._createProxy(value);  // Return the proxy for nested objects
          }
          return value;
        }
      });
    }
    return obj;  // If it's not an object, just return the value as is
  }

  /**
   * Converts the shape's definition to an array.
   *
   * @returns An array representation of the shape's definition.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public toArray(): Array<any> {
    return this._definition.toArray();
  }

  /**
   * Converts the shape's definition to a JSON string.
   *
   * @returns A JSON string  representation of the shape's definition.
   */
  public toJson(): string {
    return this._definition.toJson();
  }

  /**
   * Makes the shape visible, allowing it to be rendered on the canvas.
   * If the shape was previously hidden, calling this method will make it appear
   * during the next rendering cycle.
   */
  public show(): void {
    this._options.visible = true;
  }

  /**
   * Hides the shape, preventing it from being rendered on the canvas.
   * The shape will still exist and retain its properties, but it will not
   * appear during rendering until `show()` is called.
   */
  public hide(): void {
    this._options.visible = false;
  }

  /**
   * Checks whether the shape is currently visible.
   *
   * @returns Returns true if the shape is visible and will be rendered on the canvas.
   *          Returns false if the shape is hidden and will not be rendered.
   */
  public isVisible(): boolean {
    return !!this._options.visible;
  }

  /**
   * Selects the shape, if it is selectable and not already selected.
   * If the shape is selected successfully, observers are notified of the change.
   */
  public select(): void {
    if (this.isSelectable() && !this.isSelected()) {
      this._selected = true;
      this.notifyObservers();
    }
  }

  /**
   * Deselects the shape, if it is currently selected.
   * If the shape is deselected successfully, observers are notified of the change.
   */
  public deselect(): void {
    if (this.isSelected()) {
      this._selected = false;
      this.notifyObservers();
    }
  }

  /**
   * Checks whether the shape is currently selected.
   *
   * @returns `true` if the shape is selected; otherwise, `false`.
   */
  public isSelected(): boolean {
    return this._selected;
  }

  /**
   * Determines whether the shape can be selected.
   *
   * @returns `true` if the shape is selectable; otherwise, `false`.
   */
  public isSelectable(): boolean {
    return !!this._options.selectable;
  }

  /**
   * Checks whether the shape is draggable or not.
   *
   * @returns Returns true if the shape is draggable.
   *          Returns false if the shape is not draggable.
   */
  public isDraggable(): boolean {
    return !!this._options.draggable;
  }

  /**
   * Determines if the mouse is currently over the shape.
   *
   * @param mousePosition - The current mouse position.
   * @returns True if the mouse is over the shape, false otherwise.
   */
  public abstract isMouseOver(mousePosition: Point): boolean;

  /**
   * Handles the drag operation by applying the given delta to the current position.
   *
   * @param delta - The change in position represented as a `Point`.
   */
  public abstract onDrag(delta: Point): void;

  /**
   * Adds an observer function that will be called when the shape's state changes.
   *
   * @param observer - The observer callback function.
   */
  public addObserver(observer: () => void): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  /**
   * Removes a previously added observer function.
   *
   * @param observer - The observer callback function to be removed.
   */
  public removeObserver(observer: () => void): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Notifies all registered observers of a change in the shape's state.
   * This method is triggered when a property of the shape definition, style, or options is changed.
   */
  private notifyObservers() {
    this.observers.forEach(observer => observer());
  }

  /**
   * Gets the style settings of the shape.
   *
   * @returns The current style settings.
   */
  public get style(): TStyle {
    return this._style;
  }

  /**
   * Updates the style settings of the shape and notifies observers.
   *
   * @param style - The new style settings to apply.
   */
  public set style(style: TStyle) {
    Object.assign(this._style, style);
  }

  /**
   * Gets the configuration options of the shape.
   *
   * @returns The current options.
   */
  public get options(): TOptions {
    return this._options;
  }

  /**
   * Updates the configuration options of the shape and notifies observers.
   *
   * @param options - The new options to apply.
   */
  public set options(options: TOptions) {
    Object.assign(this._options, options);
  }

  /**
   * Gets the current state of the shape.
   *
   * @returns The current state of the shape.
   */
  public get state(): ShapeState {
    return this._state;
  }

  /**
   * Sets a new state for the shape.
   *
   * @param state - The new state to assign to the shape.
   */
  public set state(state: ShapeState) {
    // Update state if not already in this state and notify observers to apply state styles
    if (state !== this._state) {
      this._state = state;
      this.notifyObservers();
    }
  }

  /**
   * Retrieves the effective style of the shape based on its current state.
   *
   * @returns The computed style object for the current shape state, with state-specific overrides merged in as necessary.
   */
  public get stateStyle(): TStyle {
    // Start with a shallow copy of the default style, excluding state-specific keys
    const baseStyle = { ...this._style };

    // Remove state-specific keys from the base style object
    Object.values(ShapeState).forEach((state) => {
      delete baseStyle[state as keyof typeof baseStyle];
    });

    // If we are in a non-default state, apply the state-specific overrides
    if (this._state !== ShapeState.Default) {
      const stateOverrides = this._style[this._state] as Partial<TStyle> | undefined;

      if (stateOverrides) {
        // Merge the overrides into the base style to apply state-specific values
        for (const key in stateOverrides) {
          if (stateOverrides[key] !== undefined) {
            baseStyle[key as keyof TStyle] = stateOverrides[key]!;
          }
        }
      }
    }

    // Return a new Proxy to handle both single property access and full object access
    return new Proxy(baseStyle, {
      get: (target, prop) => {
        // Directly return properties on baseStyle for single property access
        return prop in target ? target[prop as keyof TStyle] : undefined;
      },
    });
  }

  /**
   * Determines if the current state style includes a visible border.
   *
   * @returns `true` if `borderColor` and `borderWidth` are defined and indicate a visible border; otherwise, `false`.
   */
  protected hasBorder(): boolean {
    return (
      this.stateStyle &&
      'borderColor' in this.stateStyle &&
      'borderWidth' in this.stateStyle &&
      typeof this.stateStyle.borderColor === 'string' &&
      typeof this.stateStyle.borderWidth === 'number' &&
      this.stateStyle.borderColor !== '' &&
      this.stateStyle.borderWidth > 0
    );
  }
}
