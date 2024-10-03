import { IShapeDefinition } from "../definitions/IShapeDefinition.js";
import { IShapeOptions } from "../options/IShapeOptions.js";
import { IShapeStyle } from "../styles/IShapeStyle.js";
import { IShape } from "./IShape.js";

/**
 * Abstract class representing a generic shape with observer functionality.
 *
 * @template TDefinition - The type of shape definition implementing IShapeDefinition.
 */
export abstract class Shape<
  TDefinition extends IShapeDefinition,
  TStyle extends IShapeStyle,
  TOptions extends IShapeOptions
> implements IShape {
  /** The shape definition, proxied to trigger observer notifications on change. */
  protected _definition: TDefinition;

  protected _style: TStyle;

  protected _options: TOptions;

  /** List of observer functions to be notified on shape changes. */
  protected observers: (() => void)[] = [];

  /**
   * Abstract method to render the shape on the canvas.
   *
   * @param {CanvasRenderingContext2D} context - The 2D rendering context for the canvas.
   */
  public abstract render(context: CanvasRenderingContext2D): void;

  /**
   * Constructs a Shape instance and wraps the definition in a Proxy to handle change notifications.
   *
   * @param {TDefinition} definition - The shape definition instance to be wrapped in a Proxy.
   */
  constructor(definition: TDefinition, style?: TStyle, options?: TOptions) {
    this._definition = this._createProxy(definition);
    this._style = this._createProxy(style || {});
    this._options = this._createProxy(options || {});
  }

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
   * Adds an observer function that will be called when the shape's state changes.
   *
   * @param {() => void} observer - The observer callback function.
   */
  public addObserver(observer: () => void): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  public removeObserver(observer: () => void): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Notifies all registered observers of a change in the shape's state.
   * This method is triggered when a property of the shape definition is changed.
   *
   * @private
   */
  private notifyObservers() {
    this.observers.forEach(observer => observer());
  }

  public get style(): TStyle {
    return this._style;
  }

  public set style(style: TStyle) {
    Object.assign(this._style, style);
  }

  public get options(): TOptions {
    return this._options;
  }

  public set options(options: TOptions) {
    Object.assign(this._options, options);
  }
}
