import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import * as pckg from './package.json';

const year = new Date().getFullYear();
const banner = `//! PostCSS Flexup v${pckg.version} Copyright (c) ${year} ${pckg.author}`;

export default () => [{
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'default',
      banner: banner
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
      exports: 'default',
      banner: banner
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
