

function Practico2() {
    return (
        <div className="contenido">
            <section className="contenidoInfo">
                <h1>control de 4 semáforos automáticos</h1>

                <section className='sectionIntroduccion'>
                    <h2>Introducción</h2>
                    <p>
                        El proyecto "Control de 4 Semáforos Automáticos" simula un cruce vehicular
                        complejo, combinando un sistema de control de alto nivel con un sistema de ejecución
                        de bajo nivel.
                        El objetivo principal es demostrar la aplicación de los principios de compilación y
                        traducción en un entorno de control distribuido. La Interfaz Gráfica de Usuario (GUI),
                        desarrollada en Python, actúa como el front-end del compilador, ofreciendo una
                        abstracción visual del cruce. El microcontrolador Arduino actúa como el backend/máquina de código objeto, recibiendo los comandos lógicos y traduciéndolos a
                        señales eléctricas (HIGH/LOW) para controlar los 12 LEDs que representan los 4
                        semáforos.
                        La Comunicación Serial (UART) es el protocolo que define el "lenguaje" de la
                        traducción entre los dos sistemas.
                                            
                       



                    </p>
                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Impacto y Justificación</h2>
                    <p>
                        Este proyecto es un ejemplo práctico de un Compilador/Traductor de Múltiples Fases
donde las responsabilidades se dividen:
                     
                    
                    </p>

                    <img src="/public/Captura desde 2025-11-11 13-33-38.png"></img>
                    
                    <img src="/public/Captura desde 2025-11-11 13-34-22.png"></img>
                    <h3>El Traductor (Arduino – Back-end)</h3>
                    <img src="/public/Captura desde 2025-11-11 13-35-33.png"></img>
                    <h3>Componentes y Conexiones</h3>
                    <img src="/public/Captura desde 2025-11-11 13-36-58.png"></img>
                     <h3>Conexiones Físicas</h3>
                    <img src="/public/Captura desde 2025-11-11 13-38-07.png"></img>
                    <img src="/public/Captura desde 2025-11-11 13-38-38.png"></img>


                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Desarrollo e Implementación</h2>
                    <h3>Desarrollo: Arquitectura de Control Distribuido</h3>
                    <p>
                        La lógica del control se basa en una Máquina de Estados Finitos (FSM). El ciclo
                        automático opera con dos fases principales que garantizan el flujo vehicular seguro en
                        un cruce de 4 vías:
                         FASE 1 (Calle Norte/Sur):
                         Semaforos 1 y 2 (Norte y Sur): VERDE
                         Semaforos 3 y 4 (Este y Oeste): ROJO
                         FASE 2 (Calle Este/Oeste):
                         Semaforos 1 y 2 (Norte y Sur): ROJO
                         Semaforos 3 y 4 (Este y Oeste): VERDE
                        Cada fase incluye sus transiciones de seguridad (VERDE → AMARILLO → ROJO).
                                              

                    </p>
                    <h3>El Rol de la Interfaz Gráfica (Python)</h3>
                    <p>1. Visualización: Dibuja el cruce y el estado actual de los 4 semáforos,
                       actualizándose según el feedback o la secuencia lógica.
                       2. Control: El código Python implementa el temporizador de la secuencia (ej: 10
                       segundos en FASE_1).
                       3. Transmisión (Generación de Código): Al cumplirse el tiempo, Python genera el
                       token de cambio de estado (ej: envía 'CAMBIO_A_FASE_2') a través del puerto
                       serial.</p>
                       
                       <h3>El Rol del Firmware (Arduino)</h3>
                       <p>1. Recepción: El Arduino escucha constantemente el puerto serial
                          (Serial.available()  0).
                          2. Traducción: Cuando recibe un token completo (ej: 'FASE_1'), lo traduce
                          inmediatamente a una secuencia de funciones de hardware:</p>

                </section>





                <section className='sectionInfoGeneral'>
                    <h2>Funcionamiento (El Proceso de Traducción Completa)</h2>
                    <p>

                        El sistema opera en un ciclo de lectura-traducción-ejecución:
                        <strong>1. Inicio (Python):</strong> Python inicia la secuencia de control y envía el primer token (ej:
                        'INICIO') a Arduino.<br></br>
                        <strong>2. Ejecución (Arduino):</strong> Arduino traduce 'INICIO' a FASE_1 y enciende los LEDs
                        correspondientes.<br></br>
                        <strong>3. Monitoreo (Python):</strong> Python espera el tiempo definido para FASE_1 (ej: 5
                        segundos).<br></br>
                        <strong>4. Generación de Transición (Python):</strong> Python calcula que es hora de cambiar y
                        envía el token de transición (ej: 'FASE_1_A_AMARILLO').<br></br>
                        <strong>5. Traducción y Seguridad (Arduino):</strong> Arduino recibe el token, ejecuta la secuencia
                        de seguridad (Rojo-Amarillo-Verde) y pasa a la FASE_2.<br></br>
                        <strong>6. Sincronización:</strong> Arduino envía un token de feedback (ej: 'FASE_2_ACTIVA') de
                        vuelta a Python para que la GUI se actualice y comience a contar el tiempo de la
                        nueva fase, logrando una traducción bidireccional y un sistema robusto.

                    </p>
                    
                </section>

                <section className="sectionInfoGeneral">
                    <h2>Interfaz grafica</h2>
                    <img src="/public/Captura desde 2025-11-11 16-05-29.png"></img>


 

                </section>


                <section className='sectionInfoGeneral'>
                    <h2>Conclusión</h2>
                    <p>


                          El proyecto de Control de 4 Semáforos Automáticos con Interfaz Gráfica es una
                          demostración integral de la teoría de Compiladores y Transladores.
                          La arquitectura de control distribuido Python-Arduino establece una jerarquía de
                          traducción clara:
                           Python: Define el Lenguaje Fuente (la secuencia lógica del cruce) y realiza el
                          Análisis Léxico/Sintáctico (generando tokens).
                           Comunicación Serial: Sirve como el Lenguaje Intermedio de la traducción.
                           Arduino: Define el Lenguaje Objeto (las señales de voltaje) y realiza la Generación
                          de Código Final (digitalWrite).
                          El éxito del proyecto reside en la definición de un protocolo serial robusto que
                          permite que comandos abstractos de alto nivel se traduzcan de manera segura y
                          eficiente en acciones físicas concretas, validando la comprensión de las fases de
                          traducción en un entorno de tiempo real.
                                                 
                    </p>
                </section>


                  <section>
                 <video controls playsInline style={{width: '100%', borderRadius: '8px', height:'30em'}}>
          <source src="/public/WhatsApp Video 2025-11-11 at 16.54.23.mp4" type="video/mp4" />
          
        </video>
      </section>


            </section>
        </div>
    )
}

export default Practico2;