import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bool, setBool] = useState(true)

  return (
    <>
      {bool && <h1 className="texto">Clickea el botón para hacerme desaparecer y aparecer nuevamente!</h1>}
      <button onClick={() => setBool(!bool)}>Botón</button>
    </>
  )

}

export default App
