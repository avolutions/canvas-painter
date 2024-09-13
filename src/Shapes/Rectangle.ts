import { Point } from "../Point.js";

export class Rectangle {
  private _width!: number;
  private _height!: number;
  private _position!: Point;
  private _rotation!: number;

  constructor(width: number, height: number, position: Point, rotation: number = 0) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.rotation = rotation;
  }

  // Getter
  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public get position(): Point {
    return this._position;
  }

  public get rotation(): number {
    return this._rotation;
  }

  // Setter
  public set width(width: number) {
    this._width = width;
  }

  public set height(height: number) {
    this._height = height;
  }

  public set position(position: Point) {
    this._position = position;
  }

  public set rotation(rotation: number) {
    this._rotation = rotation;
  }

  setSize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  resize(deltaWidth: number = 0, deltaHeight: number = 0): void {
    this.width += deltaWidth;
    this.height += deltaHeight;
  }

  move(deltaX: number = 0, deltaY: number = 0): void {
    this._position.x += deltaX;
    this._position.y += deltaY;
  }

  rotate(deltaRotation: number): void {
    this.rotation += deltaRotation;
  }
}