import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import buble from '@rollup/plugin-buble';
import postcss from 'rollup-plugin-postcss';

const prod = process.env.NODE_ENV == 'production';

export default {
  input: 'src/_bundle/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'dist/assets/main.bundle.js',
  },
  plugins: [
    postcss({
      extract: 'main.bundle.css',
      minimize: prod,
    }),
    buble({
      transforms: { asyncAwait: false }
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    prod && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
