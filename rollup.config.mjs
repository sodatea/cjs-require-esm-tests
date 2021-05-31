import path from 'path'

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

import commonjsPlugin from '@rollup/plugin-commonjs'

export default {
  input: 'main.cjs',
  output: {
    file: 'bundles/rollup.mjs',
    format: 'es'
  },
  // external: [path.resolve(__dirname, './dep.mjs')],
  plugins: [commonjsPlugin()]
}
