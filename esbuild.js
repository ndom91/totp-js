const esbuild = require('esbuild')

esbuild
  .build({
    entryPoints: ['src/totp.js'],
    outfile: 'build/index.mjs',
    minify: true,
    format: 'esm',
    target: ['esnext'],
  })
  .catch(() => process.exit(1))

esbuild
  .build({
    entryPoints: ['src/totp.js'],
    outfile: 'build/index.cjs',
    minify: true,
    format: 'cjs',
    platform: 'node',
  })
  .catch(() => process.exit(1))
