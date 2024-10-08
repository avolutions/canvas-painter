import { Angle } from '../../src/types/Angle'

describe('Angle class', () => {

  test('should correctly assign values through the constructor without optional parameters', () => {
    const angle = new Angle(90);

    expect(angle.degrees).toBe(90);
    expect(angle.isNormalized()).toBe(false);
  });

  test('should correctly assign values through the constructor with optional parameters', () => {
    const angle = new Angle(90, true);

    expect(angle.degrees).toBe(90);
    expect(angle.isNormalized()).toBe(true);
  });

  test('should correctly create angle using fromDegrees without optional parameters', () => {
    const angle = Angle.fromDegrees(90);

    expect(angle.degrees).toBe(90);
    expect(angle.isNormalized()).toBe(false);
  });

  test('should correctly create angle using fromDegrees with optional parameters', () => {
    const angle = Angle.fromDegrees(725.73, true);

    expect(angle.degrees).toBeCloseTo(5.73);
    expect(angle.isNormalized()).toBe(true);
  });

  test('should correctly create angle using fromRadians without optional parameters', () => {
    const angle = Angle.fromRadians(2.5);

    expect(angle.degrees).toBe(143.2394487827058);
    expect(angle.isNormalized()).toBe(false);
  });

  test('should correctly create angle using fromRadians with optional parameters', () => {
    const angle = Angle.fromRadians(-1.3, true);

    expect(angle.degrees).toBe(285.515486632993);
    expect(angle.isNormalized()).toBe(true);
  });

  test('should serialize into an array', () => {
    const angle = new Angle(5);
    const result = angle.toArray();

    expect(result).toEqual([5, 5 * Math.PI / 180, false]);
  });

  test('should serialize into json', () => {
    const angle = new Angle(-90, true);
    const result = angle.toJson();

    const expectedResult = {
      degrees: 270,
      radians: 270 * Math.PI / 180,
      isNormalized: true
    }

    expect(result).toEqual(JSON.stringify(expectedResult));
  });

  test('should correctly convert between degrees and radians', () => {
    expect(Angle.degreesToRadians(90)).toBe(1.5707963267948966);
    expect(Angle.radiansToDegrees(3)).toBe(171.88733853924697);
  });

  test('should correctly set degrees and radians', () => {
    const degreeAngle = new Angle(90);
    expect(degreeAngle.degrees).toBe(90);
    expect(degreeAngle.radians).toBe(1.5707963267948966);

    degreeAngle.degrees = 180;
    expect(degreeAngle.degrees).toBe(180);
    expect(degreeAngle.radians).toBe(3.141592653589793);

    const radianAngle = Angle.fromRadians(12);
    expect(radianAngle.radians).toBe(12);
    expect(radianAngle.degrees).toBe(687.5493541569879);

    radianAngle.radians = 16;
    expect(radianAngle.radians).toBe(16);
    expect(radianAngle.degrees).toBe(916.7324722093172);
  });

  test('should correctly normalize degrees', () => {
    expect(Angle.normalize(0)).toBe(0);
    expect(Angle.normalize(90)).toBe(90);
    expect(Angle.normalize(360)).toBe(0);
    expect(Angle.normalize(361)).toBe(1);
    expect(Angle.normalize(-1)).toBe(359);
    expect(Angle.normalize(945)).toBe(225);
    expect(Angle.normalize(-568)).toBe(152);
  });

  test('should correctly get normalized degrees', () => {
    expect(Angle.fromDegrees(0).getNormalized()).toBe(0);
    expect(Angle.fromDegrees(90).getNormalized()).toBe(90);
    expect(Angle.fromDegrees(360).getNormalized()).toBe(0);
    expect(Angle.fromDegrees(361).getNormalized()).toBe(1);
    expect(Angle.fromDegrees(-1).getNormalized()).toBe(359);
    expect(Angle.fromDegrees(945).getNormalized()).toBe(225);
    expect(Angle.fromDegrees(-568).getNormalized()).toBe(152);
  });

  test('should correctly normalize angle', () => {
    const angle = Angle.fromDegrees(945);
    expect(angle.degrees).toBe(945);

    angle.normalize();

    expect(angle.degrees).toBe(225);
  });

  test('should adjust angle correctly by degrees', () => {
    const angle = new Angle(90);

    angle.adjustBy(0);
    expect(angle.degrees).toBe(90);

    angle.adjustBy(30);
    expect(angle.degrees).toBe(120);

    angle.adjustBy(-180);
    expect(angle.degrees).toBe(-60);
  });

  test('should adjust normalized angle correctly by degrees', () => {
    const angle = new Angle(300, true);

    angle.adjustBy(0);
    expect(angle.degrees).toBe(300);

    angle.adjustBy(61);
    expect(angle.degrees).toBe(1);

    angle.adjustBy(-380);
    expect(angle.degrees).toBe(341);
  });

  test('should adjust angle correctly by radians', () => {
    const angle = new Angle(90);

    angle.adjustByRadians(0);
    expect(angle.degrees).toBe(90);

    angle.adjustByRadians(1);
    expect(angle.degrees).toBe(147.29577951308232);

    angle.adjustByRadians(-2);
    expect(angle.degrees).toBe(32.70422048691768);
  });

  test('should adjust angle correctly by radians', () => {
    const angle = new Angle(300, true);

    angle.adjustByRadians(0);
    expect(angle.degrees).toBe(300);

    angle.adjustByRadians(1.5);
    expect(angle.degrees).toBe(25.943669269623513);

    angle.adjustByRadians(-2);
    expect(angle.degrees).toBe(271.35211024345887);
  });
});
