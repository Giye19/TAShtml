import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <>
      <Card className="1">
        <h2>Terminar TA2</h2>
        <p>Hacer una card usando la prop children.</p>
        <p>Guille</p>
        <p>Fecha de inicio: 24/9/2025</p>
        <p>Fecha de fin: 24/9/2025</p>
      </Card>

    </>
  );
}
export default App