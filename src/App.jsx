import React, { useState } from 'react'
import SomeComponents from './components/SomeComponents'
import TextContext from './context/textContext'



export default function App() {
  const [state, setState] = useState('Hello')
  return (
    <TextContext.Provider value={{
      text: state,
      changeText: (value) => setState(value),
      hi: 'asdksahkjdhasjkdhas'
    }}>
      <div>
        App
        <hr />
        <SomeComponents  />
      </div>
    </TextContext.Provider>
  )
}
