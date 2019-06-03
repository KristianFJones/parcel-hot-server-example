import { Context } from 'koa'
import { renderToNodeStream } from 'react-dom/server'
import * as React from 'react'
import { App } from './pages/App'
import { Document } from './pages/Document'
export const SSR = async (ctx: Context, next: Function) => {
  if (ctx.path !== '/') await next()
  return renderToNodeStream(<Document App={App} />)
}
