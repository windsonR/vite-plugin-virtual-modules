import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'index.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  clean: true,
  shims: false,
  minify: false,
  sourcemap: true,
})
