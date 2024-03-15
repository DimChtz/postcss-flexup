import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';

export default () => [{
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'default'
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
      exports: 'default'
    }
  ],
  plugins: [
    commonjs(),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}];
