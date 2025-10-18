import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <>
     <Card titulo="Terminar TA1" descripcion="Crear las 3 cards." persona="Guille" fechaInicio="17/9/2025" fechaFin="17/9/2025"/>
     <Card titulo="Cortar el pasto" descripcion="Cortar el pasto de casa que ya está largo." persona="Guille" fechaInicio="23//9/2025" fechaFin="25/9/2025"/>
     <Card titulo="Comprar queso parmesano" descripcion="Ir al super a comprar queso parmesano en trozo, 200g." persona="Claudia" fechaInicio="24/9/2025" fechaFin="30/9/2025"/>
    </>
  );
}
export default App
