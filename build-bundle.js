import esbuild from 'esbuild';

const outFileName = 'bundle';

/** @type {esbuild.BuildOptions} */
const baseConfig = {
  bundle: true,
  entryPoints: ['./lib/index.ts'],
  external: ['crypto'],
  format: 'iife',
  globalName: 'NotbankSdk',
  outfile: `./dist/${outFileName}.js`,
  platform: 'browser',
  target: 'es6',
}

Promise.all([
  esbuild.build(baseConfig),
  esbuild.build({
    ...baseConfig,
    minify: true,
    sourcemap: true,
    outfile: `./dist/${outFileName}.min.js`,
  })
]).catch(() => process.exit(1));
