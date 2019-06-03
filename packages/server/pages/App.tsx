import * as React from 'react'

export const App = () => {
  const a1 = ['test', 'test']
  return (
    <>
      <h1>Hello Parcel Bundle SSR</h1>
      {a1.map((a, b) => (
        <p key={b}>{a}</p>
      ))}
    </>
  )
}
