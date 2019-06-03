import * as ParcelBundler from 'parcel-bundler'
import Path from 'path'

export const BuildServer = async (
  files: string[],
  opts: ParcelBundler.ParcelOptions,
) => {
  const bundler = new ParcelBundler(files, opts)
  const bundle = await bundler.bundle()
}

const options: import('parcel-bundler').ParcelOptions = {
  outDir: 'dist/',
  watch: false,
  minify: true,
  target: 'browser',
  bundleNodeModules: true,
  hmr: false,
}
