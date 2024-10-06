import { ISerializable } from "./ISerializable.js";

/**
 * A base class that implements ISerializable, providing functionality to serialize
 * an object's properties to an array or a JSON string, including nested objects
 * that implement the ISerializable interface.
 */
export class Serializable implements ISerializable {
  /**
   * Converts the object's properties to an array. If any of the properties
   * are objects that implement ISerializable, their `toArray` method is called.
   *
   * @returns {Array<any>} An array representation of the object's properties.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public toArray(): Array<any> {
    return Object.values(this).map(value => {
      if (value && typeof value.toArray === 'function') {
        return value.toArray(); // Call toArray for nested objects
      }
      return value; // Simple values
    });
  }

  /**
   * Converts the object to a JSON string. If any of the properties
   * are objects that implement ISerializable, their `toJson` method is called.
   *
   * @returns {string} A JSON string representation of the object.
   */
  public toJson(): string {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jsonObject: any = {};
    Object.entries(this).forEach(([key, value]) => {
      if (value && typeof value.toJson === 'function') {
        jsonObject[key] = JSON.parse(value.toJson()); // Call toJson for nested objects
      } else {
        jsonObject[key] = value; // Simple values
      }
    });
    return JSON.stringify(jsonObject);
  }
}