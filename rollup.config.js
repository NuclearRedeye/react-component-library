module.exports = [
  {
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
    ]
  }
];