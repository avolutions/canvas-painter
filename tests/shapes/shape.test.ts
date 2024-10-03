import { MockShape, MockShapeOptions, MockShapeStyle } from "../mocks/MockShape";

describe('Shape class', () => {
  test("should set definition from constructor", () => {
    const shape = new MockShape(10);

    expect((shape as any)._definition.width).toBe(10);
  });

  test("should set empty style and options from constructor", () => {
    const shape = new MockShape(10, false);

    expect(shape.style).toEqual({});
    expect(shape.options).toEqual({});
  });

  test("should get style through getter", () => {
    const shape = new MockShape();

    expect(shape.style).toBeInstanceOf(MockShapeStyle);
    expect(shape.style.color).toBe('#000000');
  });

  test("should set style through setter", () => {
    const shape = new MockShape();

    shape.style = { color: 'red' };
    expect(shape.style.color).toBe('red');

    shape.style.color = 'yellow';
    expect(shape.style.color).toBe('yellow');
  });

  test("should get options through getter", () => {
    const shape = new MockShape();

    expect(shape.options).toBeInstanceOf(MockShapeOptions);
    expect(shape.options.isVisible).toBe(true);
  });

  test("should set options through setter", () => {
    const shape = new MockShape();

    shape.options = { isVisible: false };
    expect(shape.options.isVisible).toBe(false);

    shape.options.isVisible = true;
    expect(shape.options.isVisible).toBe(true);
  });

  test("should add and remove observer", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer);

    shape.removeObserver(observer);

    expect((shape as any).observers).toHaveLength(0);
  });

  test("should not add the same observer twice", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer);

    shape.addObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
  });

  test("should only remove given observer", () => {
    const observer = jest.fn();
    const observer1 = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);
    shape.addObserver(observer1);

    expect((shape as any).observers).toHaveLength(2);
    expect((shape as any).observers[0]).toBe(observer);
    expect((shape as any).observers[1]).toBe(observer1);

    shape.removeObserver(observer);

    expect((shape as any).observers).toHaveLength(1);
    expect((shape as any).observers[0]).toBe(observer1);
  });

  test("should not fail when removing a non added observer", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    expect(() => shape.removeObserver(observer)).not.toThrow();
  });

  test("should notify observer when definition changes", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);

    shape.width = 10;
    shape.name = 'foo';
    shape.isFoo = false;
    shape.list = [1,2,3];
    shape.position = { x: 10, y: 10 }
    shape.position.x = 25;

    expect(observer).toHaveBeenCalledTimes(6);
  });

  test("should notify observer when style changes", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);

    shape.style = { color: 'blue' }
    shape.style.color = 'green';

    expect(observer).toHaveBeenCalledTimes(2);
  });

  test("should notify observer when options changes", () => {
    const observer = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);

    shape.options = { isVisible: false }
    shape.options.isVisible = true;

    expect(observer).toHaveBeenCalledTimes(2);
  });

  test("should not notify observer when nothing changes", () => {
    const observer = jest.fn();
    const shape = new MockShape(10);

    shape.addObserver(observer);

    shape.width = 10;
    shape.style.color = '#000000';
    shape.options.isVisible = true;

    expect(observer).toHaveBeenCalledTimes(0);
  });

  test("should not notify removed observer when definition changes", () => {
    const observer = jest.fn();
    const observer1 = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);
    shape.addObserver(observer1);
    shape.removeObserver(observer);

    shape.width = 10;

    expect(observer).toHaveBeenCalledTimes(0);
    expect(observer1).toHaveBeenCalledTimes(1);
  });

  test("should not notify removed observer when style changes", () => {
    const observer = jest.fn();
    const observer1 = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);
    shape.addObserver(observer1);
    shape.removeObserver(observer);

    shape.style.color = 'green';

    expect(observer).toHaveBeenCalledTimes(0);
    expect(observer1).toHaveBeenCalledTimes(1);
  });

  test("should not notify removed observer when options changes", () => {
    const observer = jest.fn();
    const observer1 = jest.fn();
    const shape = new MockShape();

    shape.addObserver(observer);
    shape.addObserver(observer1);
    shape.removeObserver(observer);

    shape.options = { isVisible: false }

    expect(observer).toHaveBeenCalledTimes(0);
    expect(observer1).toHaveBeenCalledTimes(1);
  });
});