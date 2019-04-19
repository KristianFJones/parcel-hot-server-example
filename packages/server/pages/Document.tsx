import React from 'react'

interface DocumentProps {
  appHtml: string
}

export const Document = ({ appHtml }: DocumentProps) => {
  return (
    <html>
      <head>
        <title>Hello World</title>
        <link rel='preload' href='/dist/client.js' as='script' />
        <link rel='preload' href='/dist/client.css' as='style' />
        <link rel='stylesheet' href='/dist/client.css' />
      </head>
      <body className='mdc-typography'>
        <div id='app' dangerouslySetInnerHTML={{ __html: appHtml }} />
        <script src='/dist/client.js' />
      </body>
    </html>
  )
}
