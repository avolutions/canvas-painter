import { LineOptions } from '../../src/options/LineOptions';

describe('LineOptions', () => {
  it('should create an instance of LineOptions', () => {
    const options = new LineOptions();

    expect(options).toBeInstanceOf(LineOptions);
  });
});