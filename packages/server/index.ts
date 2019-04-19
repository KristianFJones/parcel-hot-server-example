import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as serve from 'koa-static'

import { BuildServer } from '../../bin/build/src/index'

import { SSRMiddleware } from './SSRMiddleware'

const StartServer = async () => {
  const app: Koa = new Koa()
  const router: Router = new Router()

  const options: import('parcel-bundler').ParcelOptions = {
    outDir: 'dist/',
    watch: false,
    minify: true,
    target: 'browser',
    bundleNodeModules: true,
    hmr: false,
  }

  await BuildServer(['src/client.tsx', 'src/server.tsx'], options)
  router.get('/', SSRMiddleware)

  router.get('/dist/*', serve('.'))

  app.use(router.routes()).use(router.allowedMethods())
  app.listen(3456, () => console.log('http://localhost:3456'))
}

StartServer()
