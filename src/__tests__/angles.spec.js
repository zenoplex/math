// @flow
import * as angles from '../angles';

describe('angles', () => {
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
    it('should approximately equal native cosine', () => {
      for (let i = 0; i < 360; i += 1) {
        const rad = angles.toRadians(i);
        expect(angles.cos(rad)).toBeCloseTo(Math.cos(rad), 1);
      }
    });
  });

  describe('sin', () => {
    it('should approximately equal native sine', () => {
      for (let i = 0; i < 360; i += 1) {
        const rad = angles.toRadians(i);
        expect(angles.sin(rad)).toBeCloseTo(Math.sin(rad), 1);
      }
    });
  });
});
