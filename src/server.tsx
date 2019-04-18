import { Context, Middleware } from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import Document from './Document'

export default function(ctx: Context, next: any) {
  if (ctx.path !== '/') {
    next()
  }
  const appHtml = renderToString(<App />)
  const document = renderToString(<Document appHtml={appHtml} />)
  ctx.body = document
}
