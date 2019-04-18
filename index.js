#!/bin/env node
const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const hotServerMiddleware = require('./hotServerMiddlewareKoa')

async function main() {
  const app = new Koa()
  const router = new Router()

  router.get('/', hotServerMiddleware)

  router.get('/dist/*', serve('.'))

  router.get('*', async (ctx) => {
    ctx.res.statusCode = 404
    ctx.res.body = 'Not Found'
    ctx.res.end()
  })
  app.use(router.routes()).use(router.allowedMethods())
  app.listen(3456, () => console.log('http://localhost:3456'))
}

main()
