import { IShapeDefinition } from "../definitions/IShapeDefinition.js";
import { IShape } from "./IShape.js";

export abstract class Shape<T extends IShapeDefinition> implements IShape {
  protected _definition: T;
  protected observers: (() => void)[] = [];

  public abstract render(context: CanvasRenderingContext2D): void;

  constructor(definition: T) {
     // Proxy to automatically notify observers on any property change
     this._definition = new Proxy(definition, {
      set: (obj, prop, value) => {
        if (obj[prop as keyof T] !== value) {
          obj[prop as keyof T] = value;
          this.notifyObservers();  // Automatically notify on any property change
        }
        return true;
      },
    });
  }

  // Add an observer
  addObserver(observer: () => void): void {
    this.observers.push(observer);
  }

  // Notify all observers of a change
  private notifyObservers() {
    this.observers.forEach(observer => observer());
  }
}