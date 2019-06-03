import 'babel-polyfill'
import React from 'react'
import ReactDOM, { Renderer } from 'react-dom'
import { App as InitialApp } from './pages/App'

function render(App: typeof InitialApp) {
  const element = document.getElementById('app')
  const app = <App />
}

export const ClientSSR = async () => {
  return render(InitialApp)
}
