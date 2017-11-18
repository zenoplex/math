// @flow
import * as angles from '../angles';

describe('toDegrees', () => {
  it('convert radians to degrees', () => {
    expect(angles.toDegrees(0)).toEqual(0);
    expect(angles.toDegrees(angles.toRadians(90))).toEqual(90);
    expect(angles.toDegrees(angles.toRadians(180))).toEqual(180);
    expect(angles.toDegrees(angles.toRadians(270))).toEqual(270);
    expect(angles.toDegrees(angles.toRadians(360))).toEqual(360);
    expect(angles.toDegrees(angles.toRadians(-90))).toEqual(-90);
    expect(angles.toDegrees(angles.toRadians(-180))).toEqual(-180);
    expect(angles.toDegrees(angles.toRadians(-270))).toEqual(-270);
    expect(angles.toDegrees(angles.toRadians(-360))).toEqual(-360);
  });
});

describe('toRadians', () => {
  it('convert degrees to radians', () => {
    expect(angles.toRadians(angles.toDegrees(90))).toEqual(90);
    expect(angles.toRadians(angles.toDegrees(180))).toEqual(180);
    expect(angles.toRadians(angles.toDegrees(270))).toEqual(270);
    expect(angles.toRadians(angles.toDegrees(360))).toEqual(360);
    expect(angles.toRadians(angles.toDegrees(-90))).toEqual(-90);
    expect(angles.toRadians(angles.toDegrees(-180))).toEqual(-180);
    expect(angles.toRadians(angles.toDegrees(-270))).toEqual(-270);
    expect(angles.toRadians(angles.toDegrees(-360))).toEqual(-360);
  });
});

describe('cos', () => {
  it('should equal float32 cosine', () => {
    for (let i = 0; i < 360; i += 1) {
      const rad = angles.toRadians(i);
      expect(angles.cos(rad)).toBeCloseTo(Math.cos(rad));
    }
  });
});
