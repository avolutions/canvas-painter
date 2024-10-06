import { ISerializable } from "../common/ISerializable.js";

/**
 * Class representing an angle, which can be defined in degrees or radians.
 * Provides functionality for normalization and angle adjustments.
 */
export class Angle implements ISerializable {
  /** The internal degrees value of the angle. */
  private _degrees!: number;

  /** Boolean flag indicating whether the angle should be normalized. */
  private _normalized: boolean;

  /**
   * Constructs an Angle instance.
   *
   * @param degrees - The initial angle in degrees.
   * @param normalized - Whether the angle should be normalized to the range [0, 360).
   */
  constructor(degrees: number, normalized: boolean = false) {
    this._normalized = normalized;
    this.degrees = degrees;
  }

  /**
   * Serializes the object’s properties into an array, consisting of
   * the degrees, radians, and the result of the `isNormalized()` method.
   *
   * @returns {Array<number | boolean>} An array containing the degrees as a number,
   * the radians as a number, and the result of `isNormalized()` as a boolean.
   */
  public toArray(): Array<number | boolean> {
    return [
      this.degrees,
      this.radians,
      this.isNormalized()
    ];
  }

  /**
   * Serializes the object’s properties into a JSON string. The JSON object contains
   * the degrees, radians, and the result of the `isNormalized()` method.
   *
   * @returns {string} A JSON string representation of the object, including degrees,
   * radians, and whether it is normalized.
   */
  public toJson(): string {
    const json = {
      "degrees": this.degrees,
      "radians": this.radians,
      "isNormalized": this.isNormalized()
    }

    return JSON.stringify(json);
  }

  /**
   * Gets the current angle in degrees.
   * @returns The angle in degrees.
   */
  public get degrees(): number {
    return this._degrees;
  }

  /**
   * Gets the current angle in radians.
   * @returns The angle in radians.
   */
  public get radians(): number {
    return Angle.degreesToRadians(this.degrees);
  }

  /**
   * Sets the angle in degrees, optionally normalizing it if required.
   * @param degrees - The new angle in degrees.
   */
  public set degrees(degrees: number) {
    this._degrees = this.isNormalized() ? Angle.normalize(degrees) : degrees;
  }

  /**
   * Sets the angle in radians by converting it to degrees.
   * @param radians - The new angle in radians.
   */
  public set radians(radians: number) {
    this.degrees = Angle.radiansToDegrees(radians);
  }

  /**
   * Creates a new Angle instance from degrees.
   * @param degrees - The angle in degrees.
   * @param normalized - Whether the angle should be normalized.
   * @returns A new Angle instance.
   */
  public static fromDegrees(degrees: number, normalized: boolean = false): Angle {
    return new Angle(degrees, normalized);
  }

  /**
   * Creates a new Angle instance from radians.
   * @param radians - The angle in radians.
   * @param normalized - Whether the angle should be normalized.
   * @returns A new Angle instance.
   */
  public static fromRadians(radians: number, normalized: boolean = false): Angle {
    const degrees = Angle.radiansToDegrees(radians);
    return new Angle(degrees, normalized);
  }

  /**
   * Normalizes the angle to the range [0, 360).
   */
  public normalize(): void {
    this._normalized = true;
    this.degrees = this._degrees; // Reapply normalization logic
  }

  /**
   * Checks if the angle is normalized.
   * @returns True if the angle is normalized, false otherwise.
   */
  public isNormalized(): boolean {
    return this._normalized;
  }

  /**
   * Gets the normalized value of the angle in degrees.
   * @returns The normalized angle in degrees.
   */
  public getNormalized(): number {
    return Angle.normalize(this._degrees);
  }

  /**
   * Adjusts the angle by a given number of degrees.
   * @param degrees - The amount to adjust the angle by, in degrees.
   */
  public adjustBy(degrees: number): void {
    this.degrees += degrees;
  }

  /**
   * Adjusts the angle by a given number of radians.
   * @param radians - The amount to adjust the angle by, in radians.
   */
  public adjustByRadians(radians: number): void {
    this.radians += radians;
  }

  /**
   * Converts degrees to radians.
   * @param degrees - The angle in degrees.
   * @returns The angle in radians.
   */
  public static degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  /**
   * Converts radians to degrees.
   * @param radians - The angle in radians.
   * @returns The angle in degrees.
   */
  public static radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }

  /**
   * Normalizes an angle to the range [0, 360).
   * @param degrees - The angle in degrees.
   * @returns The normalized angle in degrees.
   */
  public static normalize(degrees: number): number {
    let normalized = degrees % 360;
    if (normalized < 0) {
      normalized += 360;
    }
    return normalized;
  }
}
