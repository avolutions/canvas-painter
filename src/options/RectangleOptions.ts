import { IShapeOptions } from "./IShapeOptions";

export class RectangleOptions implements IShapeOptions {
  constructor(public centered?: boolean) {}
}