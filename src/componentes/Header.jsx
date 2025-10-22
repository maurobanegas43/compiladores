import reactLogo from '../assets/react.svg'
import { useState } from 'react'
import Body from '../Body'
import Vm from '../Vm'
import Compilador from './Compilador'

function Header() {
    const [active, setActive] = useState(null)

    const showBody = () => setActive('body')
    const showVm = () => setActive('vm')
    const showCompilador = () => setActive('compilador')


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
                </>
            )}
            <div className="headerContent">
                {active === 'body' && <Body />}
                {active === 'vm' && <Vm />}
                {active === 'compilador' && <Compilador />}
            </div>
        </div>
    )
}

export default Header;