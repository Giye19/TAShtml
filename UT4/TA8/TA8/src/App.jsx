import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")         
  const [tareas, setTareas] = useState([])    
  const [editIndex, setEditIndex] = useState(null) 

  const agregarTareas = () => {
    if (text.trim() === "") return
    if (editIndex !== null) {
      const nuevasTareas = [...tareas]
      nuevasTareas[editIndex] = text
      setTareas(nuevasTareas)
      setEditIndex(null) 
    } else {
      
      setTareas([...tareas, text])
    }
    setText("") 
  }

  const borrarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index)
    setTareas(nuevasTareas)
  }

  const editarTarea = (index) => {
    setText(tareas[index])  
    setEditIndex(index)     
  }

  return (
    <>
      <div className='Todo'>
        <div className='listaTareas'>
          <h1>Lista de tareas</h1>
          <div className="lista">
            <ul>
              {tareas.map((tarea, index) => (
                <li key={index}>
                  {tarea}
                  <button onClick={() => editarTarea(index)}>Editar</button>
                  <button onClick={() => borrarTarea(index)}>Borrar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="agregarTareas">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={agregarTareas}>
            {editIndex !== null ? "Guardar cambios" : "Agregar Tarea"}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
