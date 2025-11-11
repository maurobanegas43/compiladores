

function Practico3() {
    return (
        <div className="contenido">
            <section className="contenidoInfo">
                <h1>Compilador de melodías</h1>

                <section className='sectionIntroduccion'>
                    <h2>Introducción</h2>
                    <p>
                       El proyecto "Compilador de Melodías" tiene como objetivo fundamental demostrar
                        la aplicación práctica de los principios de compilación y traducción en un sistema
                        embebido. Consiste en la creación de un programa (el compilador) capaz de traducir
                        una secuencia de notas musicales (un lenguaje de alto nivel, simbólico y legible
                        para humanos) a las instrucciones eléctricas de bajo nivel (tone()/noTone())
                        necesarias para que el microcontrolador Arduino Mega 2560 las reproduzca a través
                        de un zumbador.
                        Este proyecto aborda la disciplina de Compiladores y Transladores al simular un
                        proceso de traducción de un lenguaje fuente (la melodía definida por símbolos como
                        DO, RE, MI) a un lenguaje objeto (la señal PWM generada por la función tone() en el
                        microcontrolador).



                    </p>
                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Impacto y Contribuciones</h2>
                    <p>
                        Este proyecto sirve como una poderosa herramienta didáctica para solidificar los
                        conceptos de las fases de compilación:
                         Análisis Léxico: Se define un alfabeto de tokens musicales (notas, silencios,
                        duraciones) que el sistema debe reconocer.
                         Tabla de Símbolos: Se establece la relación directa entre el símbolo léxico (ej:
                        DO) y su valor físico (la frecuencia en Hz, ej: 262 Hz).
                         Traducción Dirigida por la Sintaxis: La estructura de la melodía (secuencia de
                        nota y duración) se traduce directamente en una secuencia de llamadas a la
                        función de hardware (tone() y delay()).
                   
                    </p>
                    <h3>Impacto tecnológico</h3>
                    <p>
                        Permite la creación de un sistema de reproducción de audio programable de forma
                        sencilla, facilitando la experimentación en electrónica y la interacción del usuario con
                        el sonido digital. La capacidad de definir melodías como datos estructurados en el
                        código facilita su portabilidad y modificación.

                    </p>
                    <h3>Componentes y Conexiones</h3>
                    <img src="/Captura desde 2025-11-11 16-26-54.png"></img>
                </section>


                <section className='sectionInfoGeneral'>
                    <h2>Diagrama de Conexiones</h2>
                    <p>
                      <strong>Para este proyecto, el pin digital seleccionado para la salida de audio es el Pin 8. Este
pin es compatible con la función tone() en el Arduino Mega 2560.</strong>
                                                

                    </p>
                    <img src="/Captura desde 2025-11-11 16-28-11.png"></img>
                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Desarrollo del Compilador (Fases de Traducción)</h2>
                    <p>
                        El proceso de traducción de la melodía se realiza en varias etapas dentro del código
fuente de Arduino (compilador_melodias.ino):
                    </p>
                    <h3>Fase 1: Análisis Léxico y Tabla de Símbolos</h3>
                    <p>
                        Esta fase es la columna vertebral del proyecto de compiladores. Se definen y tokenizan
                        <strong>las notas musicales:</strong>
                        <strong>1. Tokens de Notas:</strong> Símbolos musicales como DO, RE, MI, etc., son definidos en una
                        enumeración (enum NotaMusical).
                        <strong>2. Tabla de Símbolos (Frecuencias):</strong> Un array constante (const int NOTAS[]) actúa
                        como la tabla de símbolos, mapeando cada símbolo (índice de la enumeración) a
                        su valor de frecuencia en Hertz (Hz), que es la representación de bajo nivel de la
                        nota.
                    </p>
                    <img src="/Captura desde 2025-11-11 16-31-10.png"></img>
                    <img src="/Captura desde 2025-11-11 16-33-21.png"></img>
                </section>

                <section className="sectionInfoGeneral">
                    <h2>Fase 2: Análisis Sintáctico y Generación de Código</h2>

                    <p>
                        <strong>1. Datos Fuente:</strong> La melodía de entrada se define mediante dos arrays paralelos: uno
                        para las notas (índices de la tabla de símbolos) y otro para las duraciones (en
                        milisegundos).
                        <strong>2. Generación de Instrucciones:</strong> El parser simplificado (un ciclo for en la función
                        principal del programa) recorre estos arrays. Por cada par (nota, duración), el
                        sistema genera la instrucción de código objeto:
                        <strong>Si la nota es un silencio (0 Hz):</strong> Se ejecuta noTone(BUZZER_PIN) seguido
                        de un delay().
                        <strong>Si la nota es musical:</strong> Se llama a la función tone(BUZZER_PIN,
                        NOTAS[nota_actual], duracion_actual).
                        La función tone() es la instrucción final de la máquina virtual de Arduino
                        que produce la onda cuadrada necesaria.



                    </p>

                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Explicación del Funcionamiento (Lógica del Programa)</h2>
                    <p>

                        El compilador de melodías funciona bajo la siguiente lógica cíclica:
                         <strong>1. Inicialización (setup()):</strong> Se configura el Pin 8 como salida.
                         <strong>2. Bucle de Ejecución (loop()):</strong>
                         Un contador (for loop) itera sobre cada par de elementos de los arrays
                         de Notas y Duraciones.
                         Se utiliza el valor de la nota actual para buscar en la Tabla de Símbolos
                         (NOTAS[]) la frecuencia correspondiente.
                         La función tone(pin, frecuencia, tiempo) genera una señal de onda
                         cuadrada de 50% de ciclo útil en el pin especificado, con la frecuencia
                         obtenida de la tabla de símbolos.
                         La señal se mantiene activa durante el tiempo especificado por la
                         duración, y luego se detiene con un breve delay() o la propia duración en
                         tone().
                         Este ciclo continuo reproduce la melodía completa, nota por nota,
                         traduciendo los datos de alto nivel (el nombre de la nota) en la acción
                         física de bajo nivel (la generación de una onda de sonido específica).
                     
                        
                    </p>
                    <h3>Interfaz Grafica</h3>
                    <img src="/Captura desde 2025-11-11 16-38-49.png"></img>

                </section>


                <section className='sectionInfoGeneral'>
                    <h2>Conclusión</h2>
                    <p>
                        El proyecto del Compilador de Melodías demuestra con éxito cómo las teorías de
                        compilación son aplicables al desarrollo de sistemas embebidos. Al definir una
                        estructura léxica y sintáctica clara para las melodías y al utilizar el Arduino Mega
                        2560 para la traducción final (mapping de símbolos a frecuencias), se logró construir
                        un sistema funcional que traduce la intención musical del usuario a una acción
                        concreta en el hardware. Este ejercicio valida la comprensión de las fases de
                        compilación y la importancia de la Tabla de Símbolos como recurso de traducción en
                        la ingeniería de software.
                       
                    </p>
                </section>
                  <section>
                 <video controls playsInline style={{width: '100%', borderRadius: '8px', height:'30em'}}>
          <source src="/WhatsApp Video 2025-11-11 at 16.59.25.mp4" type="video/mp4" />
          
        </video>
      </section>








            </section>
        </div>
    )
}

export default Practico3;