import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import Menu from './Body'
import Vm from './Vm'
import Practico from './componentes/Practico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bodyMain'>
  
     <Header></Header>
     <h2>Alumnos</h2>
    
     <h3>Mauro Banegas</h3>
     <h3>Tomas Poveda</h3>
     <h3>Esteban Aguero</h3>
     <h3>Ezequiel Navarro</h3>
     <h3>Antonio Vildoza</h3>
     
   
    
    </div>
  )
}

export default App
