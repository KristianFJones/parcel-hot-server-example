import React from 'react'

interface DocumentProps {
  appHtml: string
}

export default function Document({ appHtml }: DocumentProps) {
  return (
    <html>
      <head>
        <title>Hello World</title>
        <link rel='preload' href='/dist/client.js' as='script' />
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{ __html: appHtml }} />
        <script src='/dist/client.js' />
      </body>
    </html>
  )
}
