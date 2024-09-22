import { IShapeDefinition } from "../definitions/IShapeDefinition.js";
import { IShape } from "./IShape.js";

/**
 * Abstract class representing a generic shape with observer functionality.
 *
 * @template T - The type of shape definition implementing IShapeDefinition.
 */
export abstract class Shape<T extends IShapeDefinition> implements IShape {
  /** The shape definition, proxied to trigger observer notifications on change. */
  protected _definition: T;

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
   * @param {T} definition - The shape definition instance to be wrapped in a Proxy.
   */
  constructor(definition: T) {
    // Proxy to automatically notify observers on any property change
    this._definition = new Proxy(definition, {
      set: (obj, prop, value) => {
        if (Reflect.get(obj, prop as keyof T) !== value) {
          Reflect.set(obj, prop, value);
          this.notifyObservers();  // Automatically notify on any property change
        }
        return true;
      }
    });
  }

  /**
   * Adds an observer function that will be called when the shape's state changes.
   *
   * @param {() => void} observer - The observer callback function.
   */
  addObserver(observer: () => void): void {
    if(!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  removeObserver(observer: () => void): void {
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
}
