/**
 * Interface that defines the structure for serializable objects.
 * Classes implementing this interface should provide functionality
 * to serialize their properties into an array and a JSON string.
 */
export interface ISerializable {
  /**
   * Serializes the object’s properties into an array.
   *
   * @returns {Array<any>} An array representation of the object's properties.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toArray(): Array<any>;

  /**
   * Serializes the object’s properties into a JSON string.
   *
   * @returns {string} A JSON string representation of the object.
   */
  toJson(): string;
}
