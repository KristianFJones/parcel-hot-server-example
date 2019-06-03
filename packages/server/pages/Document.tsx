import * as React from 'react'

interface DocumentProps {
  App: () => JSX.Element
}

export const Document = ({ App }: DocumentProps) => (
  <html>
    <head>
      <title>Hello World</title>
    </head>
    <body className='mdc-typography'>
      <App />
    </body>
  </html>
)
