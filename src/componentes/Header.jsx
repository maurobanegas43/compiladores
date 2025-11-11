import reactLogo from '../assets/react.svg'
import { useState } from 'react'
import Body from '../Body'
import Vm from '../Vm'
import Compilador from './Compilador'
import Practico from './Practico'
import Practico2 from './Practico2'
import Practico3 from './Practico3'



function Header() {
    const [active, setActive] = useState(null)

    const showBody = () => setActive('body')
    const showVm = () => setActive('vm')
    const showCompilador = () => setActive('compilador')
    const showPractico = () => setActive('practico')
    const showPractico2 = () => setActive('practico2')
    const showPractico3 = () => setActive('practico2')





    return (
        <div className="mainHeader" style={{position: 'relative'}}>
            {active !== null && (
                <button
                    onClick={() => setActive(null)}>
                    Inicio
                </button>
            )}
            {active === null && (
                <>
                    <section
                        className="headerPractico"
                        role="button"
                        tabIndex={0}
                        onClick={showBody}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && showBody()}
                    >
                        <img src={reactLogo} alt="logo" />
                        <h3>Practico N1</h3>
                    </section>

                    <section
                        className="headerPractico"
                        role="button"
                        tabIndex={0}
                        onClick={showVm}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && showVm()}
                    >
                        <img src={reactLogo} alt="logo" />
                        <h3>Practico N2</h3>
                    </section>

                    <section
                        className="headerPractico"
                        role="button"
                        tabIndex={0}
                        onClick={showCompilador}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && showCompilador()}
                    >
                        <img src={reactLogo} alt="logo" />
                        <h3>Practico N3</h3>
                    </section>

                      <section
                        className="headerPractico"
                        role="button"
                        tabIndex={0}
                        onClick={showPractico}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && showPractico()}
                    >
                        <img src={reactLogo} alt="logo" />
                        <h3>Practico N4</h3>
                    </section>


                      <section
                        className="headerPractico"
                        role="button"
                        tabIndex={0}
                        onClick={showPractico2}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && showPractico2()}
                    >
                        <img src={reactLogo} alt="logo" />
                        <h3>Practico N5</h3>
                    </section>

                    <section
                        className="headerPractico"
                        role="button"
                        tabIndex={0}
                        onClick={showPractico3}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && showPractico3()}
                    >
                        <img src={reactLogo} alt="logo" />
                        <h3>Practico N6</h3>
                    </section>







                </>
            )}
            <div className="headerContent">
                {active === 'body' && <Body />}
                {active === 'vm' && <Vm />}
                {active === 'compilador' && <Compilador />}
                {active === 'practico' && <Practico />}
                {active === 'practico2' && <Practico2 />}
                {active === 'practico3' && <Practico3 />}


                
            </div>
        </div>
    )
}

export default Header;