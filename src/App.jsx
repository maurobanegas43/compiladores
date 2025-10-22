import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import Menu from './Body'
import Vm from './Vm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bodyMain'>
      <Header />
      <div className='main'>
        <h2>Alumnos
        </h2>
        <h4>Banegas Mauro</h4>
        <h4>Daniel Vildoza</h4>
        <h4>Ezequiel Navarro</h4>
        <h4>Aguero Esteban</h4>
        <h4>Tomas Perez Poveda</h4>

      </div>
   
    
    </div>
  )
}

export default App
