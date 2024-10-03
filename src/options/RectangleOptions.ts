import { IShapeOptions } from "./IShapeOptions.js";

export class RectangleOptions implements IShapeOptions {
  constructor(public centered?: boolean) {}
}