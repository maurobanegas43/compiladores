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
   
 
    
    </div>
  )
}

export default App
