

function Practico() {
    return (
        <div className="contenido">
            <section className="contenidoInfo">
                <h1>COMPILADOR INTERACTIVO AVANZADO</h1>

                <section className='sectionIntroduccion'>
                    <h2>Introducción</h2>
                    <p>
                                              El Compilador Interactivo Avanzado representa un sistema sofisticado de control para
                      LEDs que utiliza una placa Arduino Mega 2560 como dispositivo de hardware
                      principal. Este proyecto constituye una evolución significativa respecto a sistemas
                      básicos de semáforos, incorporando capacidades avanzadas de procesamiento de
                      lenguaje natural, efectos visuales complejos y múltiples interfaces de usuario. La
                      elección de Arduino Mega 2560 permite manejar un mayor número de LEDs y efectos
                      simultáneos, aprovechando su superior capacidad de procesamiento y puertos de
                      entrada/salida.
                      El sistema funciona esencialmente como un compilador especializado que interpreta
                      comandos en lenguaje natural diseñado por el usuario, realizando todo el proceso de
                      análisis léxico, sintáctico y semántico para finalmente generar código máquina
                      ejecutable por el microcontrolador. Esta implementación demuestra cómo los
                      principios fundamentales de la teoría de compiladores pueden aplicarse en sistemas
                      embebidos modernos.
                       



                    </p>
                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Impacto y Contribuciones</h2>
                    <p>
                        El desarrollo de este compilador interactivo tiene implicaciones significativas en
                        <strong>múltiples dimensiones:</strong>
                        <strong>Impacto Educativo:</strong> Proporciona un ejemplo tangible y práctico de cómo funcionan
                        las fases de un compilador, permitiendo a los estudiantes visualizar conceptos
                        abstractos mediante resultados físicos inmediatos. El control de LEDs físicos mediante
                        comandos textuales crea una conexión directa entre teoría y práctica.
                        <strong>Contribución Técnica:</strong> Implementa un lenguaje de dominio específico (DSL)
                        completo para control de hardware, demostrando cómo los principios de diseño de
                        lenguajes de programación pueden aplicarse a sistemas embebidos.
                        <strong>Innovación en Usabilidad:</strong> Combina interfaces de línea de comandos tradicionales
                        con interfaces gráficas modernas, ofreciendo múltiples puntos de entrada para
                        diferentes tipos de usuarios.
                        <strong>Aplicaciones Prácticas:</strong> El sistema puede adaptarse para control de sistemas de
                        iluminación profesional, prototipado rápido de interfaces hardware-software.
                        

                    
                    </p>
                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Desarrollo e Implementación</h2>
                    <p>
                        El desarrollo del compilador interactivo se llevó a cabo mediante una metodología
                        iterativa e incremental, organizada en tres fases principales:
                        <strong>Fase 1:</strong> Diseño del Lenguaje y Arquitectura
                        Se definió la gramática del lenguaje de comandos, identificando los tokens básicos y
                        las estructuras sintácticas permitidas. Se estableció una arquitectura donde Python
                        actúa como frontend y Arduino Mega 2560 como backend de ejecución.
                        <strong>Fase 2:</strong> Implementación del Núcleo del Compilador
                        Se desarrolló el analizador léxico-sintáctico en Python, capaz de procesar comandos
                        complejos y detectar errores. Simultáneamente, se programó el firmware de Arduino
                        Mega 2560 para interpretar las instrucciones compiladas y controlar los LEDs.
                        <strong>Fase 3:</strong> Interfaces de Usuario y Efectos Avanzados
                        Se implementaron dos interfaces complementarias: una consola interactiva por línea
                        de comandos para usuarios técnicos y una interfaz gráfica con tkinter para usuarios
                        menos experimentados. Se añadieron efectos especiales complejos que aprovechan las
                        capacidades de la Arduino Mega 2560.
                                                

                    </p>
                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Componentes y Conexión del Sistema</h2>
                    <p>

                        <strong>Componentes:</strong>
                        Placa Arduino Mega 2560 con microcontrolador ATmega2560
                        6 LEDs con resistencias limitadoras de 220Ω
                        Protoboard
                        Cables dupont macho-hembra
                    </p>
                    
                </section>

                <section className="sectionInfoGeneral">
                    <h2>Esquema de Conexiones:</h2>

                    <p>
                          <strong>LED 1: Pin digital 2 <br></br>
                          LED 2: Pin digital 3 <br></br>
                          LED 3: Pin digital 4<br></br>
                          LED 4: Pin digital 5<br></br>
                          LED 5: Pin digital 6<br></br>
                          LED 6: Pin digital 7
                           </strong>
                    </p>

                </section>

                <section className='sectionInfoGeneral'>
                    <h2>Funcionamiento del Compilador</h2>
                    <p>
                      El desarrollo del compilador interactivo se llevó a cabo mediante una metodología
                       iterativa e incremental, organizada en tres fases principales:<br></br>
                       <strong>Fase 1:</strong> Diseño del Lenguaje y Arquitectura
                       Se definió la gramática del lenguaje de comandos, identificando los tokens básicos y
                       las estructuras sintácticas permitidas. Se estableció una arquitectura donde Python
                       actúa como frontend y Arduino Mega 2560 como backend de ejecución.<br></br>
                       <strong>Fase 2:</strong> Implementación del Núcleo del Compilador
                       Se desarrolló el analizador léxico-sintáctico en Python, capaz de procesar comandos
                       complejos y detectar errores. Simultáneamente, se programó el firmware de Arduino
                       Mega 2560 para interpretar las instrucciones compiladas y controlar los LEDs. <br></br>
                       <strong>Fase 3:</strong> Interfaces de Usuario y Efectos Avanzados
                       Se implementaron dos interfaces complementarias: una consola interactiva por línea
                       de comandos para usuarios técnicos y una interfaz gráfica con tkinter para usuarios
                       menos experimentados. Se añadieron efectos especiales complejos que aprovechan las
                       capacidades de la Arduino Mega 2560.
                        
                    </p>
                </section>

                <section className="sectionInfoGeneral">
                    <h2>Funcionamiento Detallado del Código</h2>
                    <h3>Arquitectura del Compilador en Python:</h3>

                    <p>


                        El núcleo del compilador implementa un pipeline de procesamiento multietapa:
                        1. Procesamiento Léxico:
                        El analizador léxico utiliza autómatas finitos para convertir la cadena de entrada en
                        una secuencia de tokens. Por ejemplo, el comando "PARPADEAR 3 5" se transforma en:
                        [TOKEN_COMANDO: "PARPADEAR", TOKEN_NUMERO: "3", TOKEN_NUMERO: "5"]
                        2. Análisis Sintáctico:
                        Se construye un parser predictivo LL(1) que verifica la correcta estructura gramatical.
                        La gramática implementada incluye producciones como:
                        COMANDO → ACCION PARAMS
                        ACCION → "ENCENDER" | "APAGAR" | "PARPADEAR"
                        PARAMS → NUMERO | NUMERO PARAMS
                        3. Análisis Semántico:
                        Se realizan verificaciones de contexto, incluyendo:
                         Validación de rangos numéricos (LEDs del 1-6)
                         Compatibilidad de parámetros por comando
                         Verificación de tipos de datos
                         Detección de ambigüedades semánticas
                        4. Generación de Código Intermedio:
                        Se produce un código intermedio optimizado específico para Arduino Mega 2560. Por
                        ejemplo, para "SECUENCIA" se genera una secuencia compacta de operaciones que
                        minimiza la comunicación serial.
                    </p>
                    <h3>Firmware de Arduino Mega 2560:</h3>
                    <p>

                        El código en Arduino implementa una máquina de estados finita que:
                        <strong>1. Inicialización de Puertos:</strong>
                        Configura múltiples puertos en modo OUTPUT usando operaciones masivas con
                        registros DDR para máxima eficiencia.
                        2. Procesamiento de Comandos:
                        Implementa un intérprete que ejecuta las instrucciones compiladas, con soporte para:
                         Ejecución inmediata de comandos simples
                         Procesamiento en segundo plano de efectos largos
                         Manejo de interrupciones para respuesta en tiempo real
                        3. Efectos Especiales Avanzados:
                        Aprovecha el mayor poder de procesamiento de Mega 2560 para efectos como:
                         Secuencias animadas con timing preciso
                         Transiciones suaves de intensidad (simulación PWM)
                         Patrones complejos con múltiples LEDs simultáneos

                    </p>

                    <h3>
                        Comunicación Bidireccional:
                    </h3>
                    <p>

                        El sistema implementa un protocolo de comunicación robusto con:
                        Handshaking inicial para sincronización<br></br>
                        ACK/NACK para confirmación de comandos<br></br>
                        Timeouts y reintentos automáticos<br></br>
                        Bufferización para manejo de picos de datos

                    </p>

                    <h3>Interfaz Grafica</h3>
                    <img src="/public/Captura desde 2025-11-11 11-18-00.png"></img>





                </section>


                <section className='sectionInfoGeneral'>
                    <h2>Conclusión</h2>
                    <p>El Compilador Interactivo Avanzado para Arduino Mega 2560 representa una
                       implementación completa y sofisticada de los principios de construcción de
                       compiladores aplicados a sistemas embebidos. El proyecto demuestra
                       exitosamente cómo la teoría abstracta de compiladores se materializa en un
                       sistema funcional y útil.
                       
                    </p>
                </section>
                <section>
                 <video controls playsInline style={{width: '100%', borderRadius: '8px', height:'30em'}}>
          <source src="/public/WhatsApp Video 2025-11-11 at 16.52.15.mp4" type="video/mp4" />
          
        </video>
      </section>


            </section>
        </div>
    )
}

export default Practico;