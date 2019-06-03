import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as serve from 'koa-static'
import { Context } from 'koa'
import { renderToString, renderToNodeStream } from 'react-dom/server'
import React from 'react'
import { App } from './pages/App'
import { Document } from './pages/Document'

import { BuildServer } from './bin/build/index'

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

  await BuildServer(['packages/server/pages/client.tsx'], options)
  router.get('/dist/*', serve('.'))

  router.get('/', SSRMiddleware)

  app.use(router.routes()).use(router.allowedMethods())
  app.listen(3456, () => console.log('http://localhost:3456'))
}

StartServer()
