import * as React from 'react'
import ReactDOM, { Renderer } from 'react-dom'
import { App as InitialApp } from './App'

const render = (renderFunction: Renderer, App: typeof InitialApp) => {
  const element = document.getElementsByTagName('body')
  console.log(element)
  const app = <App />
  renderFunction(app, element)
}

render(ReactDOM.hydrate, InitialApp)
