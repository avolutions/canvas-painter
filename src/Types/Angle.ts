export class Angle {
  private _degrees!: number;
  private _normalized: boolean;

  constructor(degrees: number, normalized: boolean = false) {
    this._normalized = normalized;
    this.degrees = degrees;
  }

  get degrees(): number {
    return this._degrees;
  }

  get radians(): number {
    return Angle.degreesToRadians(this.degrees);
  }

  set degrees(degrees: number) {
    this._degrees = this.isNormalized() ? Angle.normalize(degrees) : degrees;
  }

  set radians(radians: number) {
    this.degrees = Angle.radiansToDegrees(radians);
  }

  static fromDegrees(degrees: number, normalized: boolean = false): Angle {
    return new Angle(degrees, normalized);
  }

  static fromRadians(radians: number, normalized: boolean = false): Angle {
    const degrees = Angle.radiansToDegrees(radians);
    return new Angle(degrees, normalized);
  }

  normalize(): void {
    this._normalized = true;
    this.degrees = this._degrees;
  }

  isNormalized(): boolean {
    return this._normalized;
  }

  getNormalized(): number {
    return Angle.normalize(this._degrees);
  }

  adjustBy(degrees: number): void {
    this.degrees += degrees;
  }

  adjustByRadians(radians: number): void {
    this.radians += radians;
  }

  static degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  static radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }

  static normalize(degrees: number): number {
    let normalized = degrees % 360;
    if (normalized < 0) {
      normalized += 360;
    }
    return normalized;
  }
}
