import { IShapeOptions } from "../../src/options/interfaces/IShapeOptions";
import { ShapeOptions } from "../../src/options/ShapeOptions";

export interface IMockShapeOptions extends IShapeOptions {
}

export class MockShapeOptions implements IMockShapeOptions {
  public static readonly DefaultOptions: IMockShapeOptions = {
    ...ShapeOptions.DefaultOptions,
  };

  constructor(options: Partial<IMockShapeOptions> = {}) {
    const optionsWithDefaults = {
      ...MockShapeOptions.DefaultOptions,
      ...options
    };

    Object.assign(this, optionsWithDefaults);
  }
}