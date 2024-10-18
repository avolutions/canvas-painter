export function setupCanvas(): { canvasElement: HTMLCanvasElement, context: CanvasRenderingContext2D } {
  const canvasElement = document.createElement('canvas');

  const context = {
    canvas: canvasElement,
    clearRect: jest.fn(),
    resetTransform: jest.fn(),
    transform: jest.fn(),
    // Add any other needed CanvasRenderingContext2D methods here
  } as unknown as CanvasRenderingContext2D;

  // Mock getContext to return our mock context
  jest.spyOn(canvasElement, 'getContext').mockReturnValue(context);

  // Mock getElementById to return our canvas element
  jest.spyOn(document, 'getElementById').mockReturnValue(canvasElement);

  // Spy on context methods if needed
  jest.spyOn(context, 'clearRect');

  return { canvasElement, context };
}
