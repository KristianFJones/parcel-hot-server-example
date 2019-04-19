import { Context } from 'koa'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { App } from './pages/App'
import { Document } from './pages/Document'

export const SSR = async (ctx: Context, next: Function) => {
  if (ctx.path !== '/') await next()
  const appHtml = renderToString(<App />)
  const document = renderToString(<Document appHtml={appHtml} />)
  ctx.status = 200
  ctx.body = document
}
