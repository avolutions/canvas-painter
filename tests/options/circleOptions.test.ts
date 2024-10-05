import { CircleOptions } from '../../src/options/CircleOptions';

describe('CircleOptions', () => {
  test('should create an instance of CircleOptions', () => {
    const options = new CircleOptions();

    expect(options).toBeInstanceOf(CircleOptions);
  });
});
