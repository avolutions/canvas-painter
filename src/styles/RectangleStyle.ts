import { BorderStyle } from "./BorderStyle.js";
import { IShapeStyle } from "./IShapeStyle.js";

export class RectangleStyle implements IShapeStyle {
  constructor(public color?: string, public border?: BorderStyle) {}
}