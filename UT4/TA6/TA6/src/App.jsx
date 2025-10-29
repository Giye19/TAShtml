import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")       // texto del input
  const [tareas, setTareas] = useState([])     // lista de tareas

  const agregarTareas = () => {
    setTareas([...tareas, text])               // agrega la nueva tarea
    setText("")                              // limpia el input
  }

  return (
    <>
      <div className='Todo'>
        <div className='listaTareas'>
          <h1>Lista de tareas</h1>
          <ul>
            {tareas.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
        </div>

        <div className="agregarTareas">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={agregarTareas}>Agregar Tarea</button>
        </div>
      </div>
    </>
  )
}

export default App
