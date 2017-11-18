import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const input = 'src/index';

export default [
  {
    input,
    name: 'math',
    plugins: [
      resolve(),
      babel({ runtimeHelpers: true, exclude: 'node_modules/**' }),
      commonjs(),
    ],
    output: [{ file: pkg.browser, format: 'umd' }],
  },
  {
    input,
    plugins: [babel({ runtimeHelpers: true, exclude: 'node_modules/**' })],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
