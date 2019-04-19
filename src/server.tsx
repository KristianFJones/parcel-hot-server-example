import { Context, Middleware } from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { App } from './App'
import Document from './Document'

export const SSR = async (ctx: Context, next: Function) => {
  if (ctx.path !== '/') await next()
  const appHtml = renderToString(<App />)
  const document = renderToString(<Document appHtml={appHtml} />)
  ctx.status = 200
  ctx.body = document
}
