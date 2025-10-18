import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/input'
import Info from './components/info'

function App() {
  const [text, setText] = useState("");

  return (
     <div>
      <Input value={text} onChange={setText} />
      <Info text={text} />
    </div>
  )
}

export default App
