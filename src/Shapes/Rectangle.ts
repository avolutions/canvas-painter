import { Angle } from "../Types/Angle.js";
import { Point } from "../Types/Point.js";
import { RectangleDefinition } from "../ShapeDefinitions/RectangleDefinition.js";
import { Shape } from "./Shape.js";

export class Rectangle extends Shape<RectangleDefinition> {

  constructor(x: number, y: number, width: number, height: number, rotation: number = 0) {
    const rectangleDefinition = new RectangleDefinition( { x: x, y: y }, width, height, Angle.fromDegrees(rotation) );
    super(rectangleDefinition);
  }

  // Getter
  public get width(): number {
    return this._definition.width;
  }

  public get height(): number {
    return this._definition.height;
  }

  public get position(): Point {
    return this._definition.position;
  }

  public get angle(): Angle {
    return this._definition.angle;
  }

  // Setter
  public set width(width: number) {
    this._definition.width = width;
  }

  public set height(height: number) {
    this._definition.height = height;
  }

  public set position(position: Point) {
    this._definition.position = position;
  }

  public set angle(angle: Angle) {
    this._definition.angle = angle;
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
    this._definition.position.x += deltaX;
    this._definition.position.y += deltaY;
  }

  rotate(deltaRotation: number): void {
    this.angle.adjustBy(deltaRotation);
  }

  render(context: CanvasRenderingContext2D): void {

    context.save();

    context.translate(this.position.x, this.position.y);
    context.rotate(this.angle.radians);
    context.translate(-this.position.x, -this.position.y);

    context.fillRect(
      this._definition.position.x,
      this._definition.position.y,
      this._definition.width,
      this._definition.height
    );

    context.restore();
  }
}