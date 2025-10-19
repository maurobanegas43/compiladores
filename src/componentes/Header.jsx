import reactLogo from '../assets/react.svg'
import { useState } from 'react'
import Body from '../Body'

function Header() {
    const [showBody, setBody] = useState(false)
    const [mostrar ,setMostrar]= useState(true)
 
    const handleClick = () => {
        setBody(!showBody)
        setMostrar(!mostrar)
    }
    

    return (
    <div className='mainHeader'>
            <section className="headerPractico">
                <img src={reactLogo} alt="logo" />
                <h3 onClick={handleClick}>Practico N1</h3>
                {showBody && <Body />}
            </section>
          { mostrar &&(
            <>
            <a href="https://www.youtube.com/watch?v=4wrAfICYLdA" className="headerPractico">
                <img src={reactLogo} alt="logo" />
                <h3>Practico N2</h3>
            </a>
            <section className="headerPractico">
                <img src={reactLogo} alt="logo" />
                <h3>Practico N3</h3>
            </section> 
              </>        )}
        
     </div>
    )
}

export default Header;