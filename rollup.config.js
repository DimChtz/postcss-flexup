import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
// import * as pckg from './package.json';

// const year = new Date().getFullYear();
// const banner = `//! PostCSS Flexup v${pckg.version} Copyright (c) ${year} ${pckg.author}`;

const getOutputOptions = (file, format) => ({
  file,
  format,
  sourcemap: true,
  exports: 'default'
  // banner: banner
});

export default () => [
  {
    input: 'src/index.js',
    output: [
      getOutputOptions('dist/index.cjs', 'cjs'),
      getOutputOptions('dist/index.mjs', 'esm')
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
  }
];
