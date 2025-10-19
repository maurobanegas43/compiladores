import TextoCode from './componentes/TextoCode..jsx'


function Body() {
    return (
        <div className="contenido">
            <section className="contenidoInfo">
                <h1>Primer Tp Semaforo en Arduino</h1>

                <div className='contenidoInfoMateriales'>
                <section className='sectionInfo'>
                <h2>1. Materiales</h2>
                <h3>1. Materiales
                     1 Arduino UNO (u otro compatible) <br></br>
                     3 LEDs: rojo, amarillo, verde   <br></br>
                     3 resistencias ~220 Ω (para cada LED)  <br></br>
                     Cables de conexión (macho-macho)  <br></br>
                     1 breadboard  <br></br>
               </h3>
               </section>
               <section className='sectionInfo'>
               <h2>2. Conexión/diagrama (básico)</h2>
               <h3>Para cada LED: <br></br>
                   Anodo (+, pata larga) → Pin digital del Arduino (ej.: 2, 3, 4) <br></br>
                   Cátodo (-, pata corta) → Resistencia 220 Ω → GND del Arduino <br></br>
                   Ejemplo de pines: <br></br>
                   Pin 2 → LED rojo → 220 Ω → GND <br></br>
                   Pin 3 → LED amarillo → 220 Ω → GND <br></br>
                   Pin 4 → LED verde → 220 Ω → GND</h3>
                </section>
                 </div>
                 <section className='sectionMontaje'>
               <h2>3. Montaje en la breadboard (pasos)</h2>
               <h3>
                Inserta los 3 LEDs en la breadboard separados en filas distintas . <br></br>
                 Conecta la pata larga de cada LED a un riel horizontal donde conectarás el cable hacia el pin del Arduino.<br></br>
                 Conecta la pata corta de cada LED a una fila que vaya a una resistencia de 220 Ω y la otra pata de la resistencia a la línea GND de la breadboard.<br></br>
                 Conecta GND de la breadboard al GND del Arduino. <br></br>
                 Conecta los cables desde los pines digitales (2,3,4) del Arduino a las filas donde están las patas largas de cada LED. <br></br>
               </h3>
               </section>
               <TextoCode></TextoCode>
            </section>
            <section className="contenidoImagenes">
               
                <video src='/public/WhatsApp Video 2025-10-18 at 21.17.20.mp4'></video>
                <img src="/public/Captura desde 2025-10-18 18-35-14.png"></img>
              </section>
        </div>
    )
}

export default Body
