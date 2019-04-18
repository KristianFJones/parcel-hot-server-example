const chokidar = require('chokidar')
const fs = require('fs')
const { promisify } = require('util')
const requireFromString = require('require-from-string')
const ora = require('ora')

const readFile = promisify(fs.readFile)
const serverFilename = './dist/server.js'

function defaultImport(obj) {
  return obj && obj.__esModule ? obj.default : obj
}

async function getServerMiddleware(filename, buffer, options) {
  const content = await readFile(serverFilename, 'utf-8')
  return defaultImport(requireFromString(content, serverFilename))
}

module.exports = async function hotServerMiddleware(a, next) {
  let serverMiddleware = await getServerMiddleware()
  return serverMiddleware(a, next)
}
