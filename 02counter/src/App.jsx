import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5) //send updates to ui in batches

  // let counter = 5
  const addValue = () => {
    // counter = counter+1 
    // if we take setCounter(counter+1) multiple times it will take itas batchas we are repeating same thing again and do it only once
    setCounter(prevcounter => prevcounter +1)
    setCounter(prevcounter => prevcounter + 1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick = {addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>remove Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
