import * as chokidar from 'chokidar'
import { readFile as RF } from 'fs'
import { promisify } from 'util'
import * as Ora from 'ora'

const readFile = promisify(RF)
const serverFilename = '../../dist/server.js'

async function getServerMiddleware() {
  return import(serverFilename)
}

export const SSRMiddleware = async (
  a: import('koa').Context,
  next: Function,
) => {
  let { SSR } = await getServerMiddleware()
  chokidar
    .watch(serverFilename, {
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: 100 },
    })
    .on('all', async () => {
      const spinner = Ora('Updating Server Middleware')
      spinner.start()
      try {
        SSR = await getServerMiddleware()
      } catch (e) {
        spinner.fail()
        console.error(e)
        return
      }
      spinner.succeed()
    })
  return SSR(a, next)
}
