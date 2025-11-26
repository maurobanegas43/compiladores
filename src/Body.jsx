import TextoCode from './componentes/TextoCode.jsx'


function Body() {
    return (
        <div className="contenido">
            <section className="contenidoInfo">
                <h1>SISTEMA DE SEMAFOROS EN
                  ARDUINO</h1>

                <div className='contenidoInfoMateriales'>
                <section className='sectionIntroduccion'>
                <h2>Introducción</h2>
                <p>Este proyecto consiste en la implementación de un sistema de cuatro semáforos
                    coordinados mediante Arduino y Ticker Card. La idea central es simular el control de
                    un cruce vehicular de cuatro vías, aplicando principios de programación secuencial y
                    control de hardware digital. A su vez, se analiza cómo un compilador convierte un
                    código fuente en instrucciones ejecutables por un microcontrolador, permitiendo que
                    los LEDs conectados representen visualmente la salida de un programa en tiempo
                    real.
                     <br></br>
               </p>
               </section>
               <section className='sectionInfoGeneral'>
               <h2>Justificación del Proyecto</h2>
               <p>
                Los semáforos son sistemas secuenciales determinísticos que permiten visualizar
                cómo la lógica de un programa se traduce en acciones concretas sobre el mundo físico.
                Al observar la activación de LEDs según una secuencia predeterminada, se puede
                comprender de manera directa cómo las instrucciones de alto nivel, escritas en C++
                para Arduino, son procesadas por un compilador y convertidas en instrucciones de
                máquina que controlan pines digitales.
                Además, este proyecto permite explorar la relación entre temporización, control de
                flujo y ejecución de código en tiempo real. Cada transición de estado (verde →
                amarillo → rojo) se interpreta como una instrucción secuencial dentro de un bucle
                principal, demostrando cómo la programación estructurada puede gestionar procesos
                simultáneos o interdependientes. Este proyecto sirve para ilustrar el flujo completo
                desde el código fuente hasta la acción física, incluyendo la validación léxica, la
                verificación sintáctica, la comprobación semántica y la generación de código objeto.
                El proyecto también fomenta habilidades prácticas en electrónica básica, manejo de
                microcontroladores y programación embebida. La combinación de teoría de
                compiladores con la implementación física fortalece la comprensión integral,
                permitiendo que conceptos abstractos como análisis léxico, semántico y optimización
                sean observables mediante resultados tangibles. Finalmente, permiten evaluar la
                efectividad del código, asegurando que se cumplan los tiempos de encendido y
                apagado de cada semáforo, así como la correcta secuencia de operaciones.
               </p>
                </section>
                 </div>
                 <section className='sectionInfoGeneral'>
               <h2>Justificación del Proyecto</h2>
               <h3>Diseñar, implementar y analizar un sistema de semáforos de cuatro vías utilizando
                   Arduino, integrando los conceptos de compilación, ejecución de código y control de
                   hardware. Este objetivo busca comprender cómo un programa de alto nivel es
                   interpretado y ejecutado por un microcontrolador, y cómo la lógica secuencial y la
                   temporización afectan la operación física de un sistema real.
               </h3>
               </section>
            
             
                 <section className='sectionInfoGeneral'>
               <h2>Objetivos específicos</h2>
               <h3>
                 Aplicar los conceptos de compilación en un entorno práctico, observando cómo
                  el código fuente en C++ es procesado por un compilador para generar
                  instrucciones ejecutables que controlan los LEDs de los semáforos.
                   Programar secuencias de control secuencial y temporización en Arduino,
                  implementando funciones, bucles y estructuras condicionales que reflejen la
                  lógica de operación de un cruce vehicular.
                   Analizar la relación entre la estructura del código y la ejecución física,
                  comprendiendo cómo la programación determina la sincronización y
                  coordinación de los semáforos, y cómo las instrucciones de delay y digitalWrite
                  afectan la temporización.
                   Evaluar el rendimiento y la precisión de la sincronización de semáforos en un
                  cruce simulado, midiendo tiempos de encendido y apagado de LEDs,
                  asegurando la seguridad y coherencia del sistema.
                   Fomentar habilidades de resolución de problemas, depuración de código y
                  análisis crítico de sistemas secuenciales.
                   Explorar la integración de módulos adicionales, como Ticker Card o sensores,
                  para extender el sistema y la interacción entre distintos componentes afectan
                  la compilación y ejecución del programa.


               </h3>
               </section>

                   <section className='sectionInfoGeneral'>
               <h2>Compilación y ejecución en Arduino</h2>
               <h3>
                La compilación es el proceso mediante el cual un programa escrito en un lenguaje de
                alto nivel (en este caso C++ para Arduino) se traduce a instrucciones de máquina que
                el microcontrolador puede ejecutar. En el IDE de Arduino, el compilador realiza varias
                etapas: análisis léxico, análisis sintáctico, análisis semántico, generación de código
                intermedio, optimización, ensamblado y enlazado.
                Cada etapa tiene una función crítica: el análisis léxico identifica los elementos básicos
                del lenguaje (palabras clave, identificadores, operadores), mientras que el análisis
                sintáctico asegura que la estructura del código cumpla con la gramática del lenguaje.
                El análisis semántico valida tipos y operaciones, garantizando que las instrucciones
                sean lógicas y correctas. Finalmente, el código intermedio y objeto es optimizado y
                cargado en la memoria flash del Arduino para su ejecución.
               </h3>
               </section>

                <section className='sectionInfoGeneral'>
               <h2>Conceptos aplicados en el código</h2>
               <h3>
                El código del semáforo integra varios conceptos fundamentales de programación y
                compilación:
                 Variables globales: representan los pines de cada LED, permitiendo al
                compilador reservar memoria y asociar nombres a direcciones físicas.
                 Funciones setup() y loop(): estructuras especiales en Arduino que
                representan la inicialización del hardware y el ciclo de ejecución continua.
                 DigitalWrite(): función que modifica los registros internos del
                microcontrolador para controlar el estado lógico de los pines.
                 Delay(): función que pausa la ejecución del programa, demostrando cómo la
                programación secuencial determina la duración de los estados de los LEDs.
               </h3>
               </section>

                <section className='sectionInfoGeneral'>
               <h2>Descripción general</h2>
               <h3>
                El sistema de semáforos está diseñado para controlar un cruce de cuatro vías,
                asegurando la coordinación adecuada entre los semáforos y evitando conflictos de
                tráfico. Cada semáforo está compuesto por tres LEDs: rojo, amarillo y verde, que
                representan los estados de detención, precaución y paso, respectivamente. La
                secuencia de encendido y apagado de los LEDs sigue un ciclo predefinido, con verde
                durante 5 segundos y amarillo durante 2 segundos, antes de volver a rojo. Este diseño
                permite observar cómo un programa secuencial puede controlar múltiples
                dispositivos físicos de manera sincronizada, al mismo tiempo que se analizan los
                conceptos de compiladores aplicados.
                El diseño también tiene en cuenta la modularidad y escalabilidad: cada semáforo se
                controla mediante variables y pines independientes, lo que facilita modificaciones
                futuras, como la integración de sensores de presencia o botones peatonales, sin
                afectar la estructura del código existente. Asimismo, el sistema permite estudiar cómo
                la programación de temporizadores y la lógica secuencial se traducen en acciones
                físicas mediante la compilación y ejecución de instrucciones en el microcontrolador.
               </h3>
               </section>

                <section className='sectionInfoGeneral'>
               <h2>Lista de componentes</h2>
               <h3>
               1 arduino Mega 2560<br></br>
               4 led rojo  <br></br>
               4 led verde <br></br>
               4 led amarillo <br></br>
               12 resistencias de 220 ohms <br></br>
               1 protoboard <br></br>
               15 Cables Dupont macho-hembra <br></br>
               </h3>
               </section>


                <section className='sectionInfoGeneral'>
               <h2>Asignación de pines</h2>
               <h3>
                Cada LED se asigna a un pin digital específico del Arduino, asegurando que cada
                semáforo pueda operar de manera independiente y sin interferencias. La asignación
                de pines se realizó considerando la facilidad de conexión y la organización del
                protoboard, para que el montaje sea ordenado y reproducible.
             
               </h3>
               <img src='/Captura desde 2025-10-22 07-23-09.png' alt="Asignación de pines" />
               <h2>Diagrama de conexiones</h2>
               <img src='/Captura desde 2025-10-22 07-26-25.png' alt="Diagrama de conexiones" />
               </section>


                <section className='sectionInfoGeneral'>
               <h2>Diagrama lógico de secuencia (estado por
estado)</h2>
               <h3>
                 Estado 1 Semáforo 2 en verde:                         
               </h3>
               <p> S2: Verde ON (5 s) → Amarillo ON (2 s) → Rojo
 S1, S3, S4: Rojo ON durante el ciclo</p>
              <h3> Estado 2: Semáforo 3 en verde:</h3>
              <p> S3: Verde ON (5 s) → Amarillo ON (2 s) → Rojo
 Resto: Rojo</p>

              <h3> Estado 3: Semáforo 4 en verde:</h3>
              <p> S4: Verde ON (5 s) → Rojo
                  Resto: Rojo</p>
               <h3> Estado 4: Semáforo 1 en verde:</h3>
               <p> S4: Verde ON (5 s) → Rojo
                   Resto: Rojo
               </p>

               </section>

               <TextoCode></TextoCode>
            </section>
                <section className='sectionInfoGeneral'>
               <h2>Explicación</h2>
               <h3>
                Explicación:
                1. Se establece inicialmente que los semáforos 1, 3 y 4 estén en rojo, y el semáforo <br></br>
                2 en verde. <br></br>
                2. Se activa ledVerde2 durante 5 segundos, luego ledAmarillo2 durante 2 <br></br>
                segundos, antes de pasar a rojo. <br></br>
                3. El semáforo 3 se activa de forma similar: rojo inicial, verde 5 segundos,<br></br>
                amarillo 2 segundos, rojo. <br></br>
                4. El semáforo 4 sigue la misma lógica. <br></br>
                5. Finalmente, el semáforo 1 cambia de rojo a verde y amarillo según la misma 
                secuencia. <br></br>
               <br></br> Este ciclo se repite indefinidamente dentro de loop(), asegurando la correcta
                sincronización de los cuatro semáforos. Las funciones digitalWrite() combinadas con
                delay() permiten controlar la duración de cada fase, reflejando la ejecución física de
                las instrucciones compiladas y cargadas en el Arduino.
               
               </h3>
               </section>

               <section className='sectionInfoGeneral'>
               <h2>Análisis desde la Perspectiva de un Compilador</h2>
               <h3>
                 Análisis léxico: Identificación de palabras clave (int, void, HIGH),
                 identificadores (ledRojo1, loop), literales y símbolos.
                  Análisis sintáctico: Verificación de la estructura correcta de las funciones,
                 sentencias y bloques.
                  Análisis semántico: Validación del tipo de datos y uso correcto de funciones
                 (pinMode espera un número y una constante OUTPUT).
                  Generación de código intermedio: Traducción a un lenguaje ensamblador
                 interno de AVR.
                  Optimización: Eliminación de redundancias y organización de llamadas
                 eficientes.
                  Generación de código objeto: Conversión a binario ejecutable para el
                 microcontrolador.
                  Ejecución: El código se carga y ejecuta en la memoria flash del Arduino.
          
               </h3>
               </section>


                 <section className='sectionInfoGeneral'>
               <h2>Conclusión</h2>
               <h3>
                El proyecto permitió observar de forma tangible cómo un código fuente pasa por las
                distintas etapas del proceso de compilación hasta convertirse en una ejecución física
                observable.
                El semáforo es un ejemplo claro de control secuencial que depende estrictamente de
                la correcta interpretación de instrucciones compiladas.
               </h3>
               </section>

      <section className="contenidoImagenes">
        <video controls playsInline style={{width: '100%', borderRadius: '8px', height:'30em'}}>
          <source src="public/tp1.mp4" type="video/mp4" />
          
        </video>
      </section>




        </div>
    )
}

export default Body
