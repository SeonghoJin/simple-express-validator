import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: [{
    file: './dist/cjs/bundle.js',
    format: 'cjs'
  },{
      file: './dist/es/bundle.js',
      format: 'es'
  }],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      module: "esnext",
        compilerOptions: {

        }
    }),
  ]
}