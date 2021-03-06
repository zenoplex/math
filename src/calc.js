// @flow
type Constrain = (number, number) => number => number;
export const constrain: Constrain = (min, max) => n =>
  Math.max(Math.min(n, max), min);

type Map = (number, number, number, number, _?: boolean) => number => number;
export const map: Map = (
  minInput,
  maxInput,
  minOutput,
  maxOutput,
  fit,
) => (n) => {
  // prettier-ignore
  const v = (((n - minInput) / (maxInput - minInput)) * (maxOutput - minOutput)) + minOutput;

  if (!fit) return v;
  return minOutput < maxOutput
    ? constrain(minOutput, maxOutput)(v)
    : constrain(maxOutput, minOutput)(v);
};
