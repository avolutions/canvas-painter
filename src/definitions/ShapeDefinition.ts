import { Serializable } from "../common/Serializable.js";
import { IShapeDefinition } from "./IShapeDefinition.js";

/**
 * An abstract class that extends Serializable and implements the IShapeDefinition interface.
 * This class provides a base definition for shapes that can be serialized into
 * an array or JSON string.
 */
export abstract class ShapeDefinition extends Serializable implements IShapeDefinition {}