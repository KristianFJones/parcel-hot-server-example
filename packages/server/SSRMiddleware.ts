import * as chokidar from 'chokidar'
import { readFile as RF } from 'fs'
import { promisify } from 'util'
import * as Ora from 'ora'
import { createContext } from 'vm'
import { domainToASCII } from 'url'

const readFile = promisify(RF)
const serverFilename = './server.tsx'
const clientFilename = '../../dist/pages/client.js'

async function getServerMiddleware() {
  return import(serverFilename)
}

async function getClientMiddleware() {
  return import(clientFilename)
}

export const SSRMiddleware = async (
  ctx: import('koa').Context,
  next: Function,
) => {
  let { SSR } = await getServerMiddleware()
  const htmlStream = await SSR(ctx, next)
  ctx.respond = false
  ctx.status = 200

  htmlStream.pipe(
    ctx.res,
    { end: false },
  )
  htmlStream.on('end', () => {
    ctx.res.end()
  })
}
