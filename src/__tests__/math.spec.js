// @flow
import * as math from '../math';

describe('math', () => {
  describe('constrain', () => {
    it('should constrain within given params', () => {
      expect(math.constrain(0, 1)(0)).toEqual(0);
      expect(math.constrain(0, 1)(-0)).toEqual(0);
      expect(math.constrain(0, 1)(100)).toEqual(1);
      expect(math.constrain(0, 1)(0.5)).toEqual(0.5);
      expect(math.constrain(0, 1)(-1)).toEqual(0);
    });
  });

  describe('map', () => {
    it('should map numbers', () => {
      expect(math.map(0, 100, 0, 1)(0)).toEqual(0);
      expect(math.map(0, 100, 0, 1)(10)).toEqual(0.1);
      expect(math.map(0, 100, 0, 1)(20)).toEqual(0.2);
      expect(math.map(0, 100, 0, 1)(30)).toEqual(0.3);
      expect(math.map(0, 100, 0, 1)(40)).toEqual(0.4);
      expect(math.map(0, 100, 0, 1)(50)).toEqual(0.5);
      expect(math.map(0, 100, 0, 1)(60)).toEqual(0.6);
      expect(math.map(0, 100, 0, 1)(70)).toEqual(0.7);
      expect(math.map(0, 100, 0, 1)(80)).toEqual(0.8);
      expect(math.map(0, 100, 0, 1)(90)).toEqual(0.9);
      expect(math.map(0, 100, 0, 1)(100)).toEqual(1);
      expect(math.map(0, 100, 0, 1)(1000)).toEqual(10);
      expect(math.map(0, 100, 0, 1)(-1000)).toEqual(-10);
    });

    it('should map and constrain within', () => {
      expect(math.map(0, 100, 0, 1, true)(0)).toEqual(0);
      expect(math.map(0, 100, 0, 1, true)(10)).toEqual(0.1);
      expect(math.map(0, 100, 0, 1, true)(20)).toEqual(0.2);
      expect(math.map(0, 100, 0, 1, true)(30)).toEqual(0.3);
      expect(math.map(0, 100, 0, 1, true)(40)).toEqual(0.4);
      expect(math.map(0, 100, 0, 1, true)(50)).toEqual(0.5);
      expect(math.map(0, 100, 0, 1, true)(60)).toEqual(0.6);
      expect(math.map(0, 100, 0, 1, true)(70)).toEqual(0.7);
      expect(math.map(0, 100, 0, 1, true)(80)).toEqual(0.8);
      expect(math.map(0, 100, 0, 1, true)(90)).toEqual(0.9);
      expect(math.map(0, 100, 0, 1, true)(100)).toEqual(1);
      expect(math.map(0, 100, 0, 1, true)(1000)).toEqual(1);
      expect(math.map(0, 100, 0, 1, true)(-1000)).toEqual(0);
    });
  });

  describe('toDegrees', () => {
    it('convert radians to degrees', () => {
      expect(math.toDegrees(0)).toEqual(0);
      expect(math.toDegrees(math.toRadians(90))).toEqual(90);
      expect(math.toDegrees(math.toRadians(180))).toEqual(180);
      expect(math.toDegrees(math.toRadians(270))).toEqual(270);
      expect(math.toDegrees(math.toRadians(360))).toEqual(360);
      expect(math.toDegrees(math.toRadians(-90))).toEqual(-90);
      expect(math.toDegrees(math.toRadians(-180))).toEqual(-180);
      expect(math.toDegrees(math.toRadians(-270))).toEqual(-270);
      expect(math.toDegrees(math.toRadians(-360))).toEqual(-360);
    });
  });

  describe('toRadians', () => {
    it('convert degrees to radians', () => {
      expect(math.toRadians(math.toDegrees(90))).toEqual(90);
      expect(math.toRadians(math.toDegrees(180))).toEqual(180);
      expect(math.toRadians(math.toDegrees(270))).toEqual(270);
      expect(math.toRadians(math.toDegrees(360))).toEqual(360);
      expect(math.toRadians(math.toDegrees(-90))).toEqual(-90);
      expect(math.toRadians(math.toDegrees(-180))).toEqual(-180);
      expect(math.toRadians(math.toDegrees(-270))).toEqual(-270);
      expect(math.toRadians(math.toDegrees(-360))).toEqual(-360);
    });
  });
});
