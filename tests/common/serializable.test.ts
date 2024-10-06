import { Serializable } from '../../src/common/Serializable';
import { Point } from '../../src/types/Point';

// Test class that extends Serializable
class TestClass extends Serializable {
  constructor(public name: string, public age: number, public isFoo: boolean | null, public hobbies: Array<any>, public point?: Point, private _isPrivate: boolean = true) {
    super();
  }
}

describe('Serializable Class', () => {
  test('toArray method should return an array of property values', () => {
    const obj = new TestClass('John Doe', 30, true, [ "Surfing", "Coding" ], new Point(47, 11));
    const result = obj.toArray();

    const expectedResult = [
      'John Doe',
      30,
      true,
      [
        "Surfing",
        "Coding"
      ],
      [
        47,
        11
      ],
      true
    ];

    expect(result).toEqual(expectedResult);
  });

  test('toJson method should return a JSON string of the object', () => {
    const obj = new TestClass('John Doe', 30, true, [ "Surfing", "Coding" ], new Point(47, 11));
    const result = obj.toJson();

    const expectedResult = {
      "name": "John Doe",
      "age": 30,
      "isFoo": true,
      "hobbies": [
        "Surfing",
        "Coding"
      ],
      "point": {
        "x": 47,
        "y": 11
      },
      "isPrivate": true
    };

    expect(result).toEqual(JSON.stringify(expectedResult));
  });

  test('toArray should work with empty values', () => {
    const obj = new TestClass('', 0, null, []);
    const result = obj.toArray();

    const expectedResult = [
      "",
      0,
      null,
      [],
      undefined,
      true
    ];

    expect(result).toEqual(expectedResult);
  });

  test('toJson should work with empty values', () => {
    const obj = new TestClass('', 0, null, []);
    const result = obj.toJson();

    const expectedResult = {
      "name": "",
      "age": 0,
      "isFoo": null,
      "hobbies": [],
      "point": undefined,
      "isPrivate": true
    };

    expect(result).toEqual(JSON.stringify(expectedResult));
  });

  test('toArray should work with additional properties', () => {
    const obj = new TestClass('John Doe', 30, true, [ "Surfing", "Coding" ], new Point(47, 11));
    (obj as any).extraProperty = 'extra';
    const result = obj.toJson();

    const expectedResult = {
      "name": "John Doe",
      "age": 30,
      "isFoo": true,
      "hobbies": [
        "Surfing",
        "Coding"
      ],
      "point": {
        "x": 47,
        "y": 11
      },
      "isPrivate": true,
      "extraProperty": "extra"
    };

    expect(result).toEqual(JSON.stringify(expectedResult));
  });

  test('toJson should work with additional properties', () => {
    const obj = new TestClass('John Doe', 30, true, [ "Surfing", "Coding" ], new Point(47, 11));
    (obj as any).extraProperty = 'extra';
    const result = obj.toJson();

    const expectedResult = {
      "name": "John Doe",
      "age": 30,
      "isFoo": true,
      "hobbies": [
        "Surfing",
        "Coding"
      ],
      "point": {
        "x": 47,
        "y": 11
      },
      "isPrivate": true,
      "extraProperty": "extra"
    };

    expect(result).toEqual(JSON.stringify(expectedResult));

  });
});
