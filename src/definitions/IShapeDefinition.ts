import { ISerializable } from "../common/ISerializable.js";

/**
 * Interface for defining the basic structure of a shape.
 *
 * This interface can be extended by various shape definitions
 * (e.g., rectangles, circles) to ensure a consistent structure
 * across different shape types.
 *
 * @remarks
 * This is an empty object type and serves as a base or marker for shape definition types.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IShapeDefinition extends ISerializable {}
