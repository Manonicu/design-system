import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      image(),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
      terser(),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.s?css$/, /\.svg$/, /\.png$/, /\.jpg$/, /\.jpeg$/, /\.gif$/],
  },
]
