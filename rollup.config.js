import copy from 'rollup-plugin-copy';

export default {
  input: './out/debug/index.js',
  output: [
    {
      file: './out/release/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: './out/release/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    }
  ],
  plugins: [
    copy({
      targets: [
        { src: ['./out/debug/index.css'], dest: './out/release/' },
      ]
    })
  ],
  external: ['react']
};