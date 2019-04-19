import React, {
  useState,
  useEffect,
  useCallback,
  InputHTMLAttributes,
} from 'react'
import { TextField } from '@rmwc/textfield'

import '@material/button/dist/mdc.button.css'
import '@material/textfield/dist/mdc.textfield.css'
import '@material/floating-label/dist/mdc.floating-label.css'
import '@material/notched-outline/dist/mdc.notched-outline.css'
import '@material/line-ripple/dist/mdc.line-ripple.css'
import '@material/typography/dist/mdc.typography.css'

export let Test = () => {
  let [test, setTest] = useState(false)
  let [values, setValues] = useState({ bg: '#EEE', b1: 'test' })
  let [bgcolour, setBGColour] = useState('#EEE')

  const BackgroundColour = () => {
    console.log(`Colour: ${bgcolour}`)
  }

  const ChangeField = (
    event: import('react').ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  useEffect(BackgroundColour, [bgcolour])

  return (
    <div>
      <p>Test</p>
      <p onClick={() => setTest(!test)}>{test.toString()}</p>
      <br />
      <p>Color</p>
      <TextField
        value={values.bg}
        onChange={ChangeField}
        name='bg'
        label='Colour'
        outlined
      />
      <p>{values.bg}</p>
      <TextField
        value={values.b1}
        onChange={ChangeField}
        name='b1'
        label='Test'
        outlined
      />
      <p>{values.b1}</p>
    </div>
  )
}
