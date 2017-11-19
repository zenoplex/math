// @flow
export const TWO_PI = Math.PI * 2;

const PIOverDegrees = Math.PI / 180;
const DegreesOverPI = 180 / Math.PI;

type ToRadians = number => number;
export const toRadians: ToRadians = angle => angle * PIOverDegrees;

type ToDegrees = number => number;
export const toDegrees: ToDegrees = angle => angle * DegreesOverPI;

const length = 360;
const ratio = length / TWO_PI;
const cosines = new Array(length);
const sines = new Float32Array(length);

for (let i = 0; i < length; i++) {
  const radian = i / ratio;
  cosines[i] = Math.cos(radian);
  sines[i] = Math.sin(radian);
}

type Cos = number => number;
export const cos: Cos = (radians) => {
  radians %= TWO_PI;
  if (radians < 0) radians += TWO_PI;
  return cosines[Math.fround(radians * ratio) | 0];
};

type Sin = number => number;
export const sin: Sin = (radians) => {
  radians %= TWO_PI;
  if (radians < 0) radians += TWO_PI;
  return sines[Math.fround(radians * ratio) | 0];
};
