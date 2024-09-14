export interface IShape {
  render(context: CanvasRenderingContext2D): void;
  addObserver(observer: () => void): void;
}