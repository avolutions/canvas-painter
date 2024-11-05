import { IShapeBaseStyle } from "../../src/styles/interfaces/IShapeBaseStyle";
import { IShapeStyle } from "../../src/styles/interfaces/IShapeStyle";
import { ShapeStyle } from "../../src/styles/ShapeStyle";

export interface IMockShapeBaseStyle extends IShapeBaseStyle {
  color?: string;
  borderColor?: string,
  borderWidth?: number
}

export interface IMockShapeStyle extends IMockShapeBaseStyle, IShapeStyle {

}

export class MockShapeStyle extends ShapeStyle<IMockShapeBaseStyle> implements IMockShapeStyle {
  public color!: string;

  public borderColor!: string;

  public borderWidth!: number;

  public static readonly DefaultStyle: IMockShapeStyle = {
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 0
  };

  constructor(style: Partial<IMockShapeStyle> = {}) {
    super();

    const styleWithDefaults = {
      ...MockShapeStyle.DefaultStyle,
      ...style
    };

    Object.assign(this, styleWithDefaults);
  }
}