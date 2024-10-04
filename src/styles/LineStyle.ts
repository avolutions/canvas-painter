import { IShapeStyle } from "./IShapeStyle.js";

export class LineStyle implements IShapeStyle {

  constructor(
    public color?: string,
    public width?: number
  ) {}
}
