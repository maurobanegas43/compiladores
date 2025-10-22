
function Compilador() {

  return (
    <div className="contenido">
      <section className="contenidoInfo">
        <h1>COMPILADOR DE ARDUINO</h1>

        <div className="contenidoInfoMateriales">
          <section className="sectionIntroduccion">
            <h2>Introducción</h2>
            <p>
              Este proyecto tiene como objetivo analizar el funcionamiento del compilador de Arduino, comprendiendo cómo convierte el código fuente escrito en C/C++ en instrucciones ejecutables para el microcontrolador.
La plataforma Arduino no solo facilita la programación de hardware, sino que también representa un entorno práctico para estudiar el proceso completo de compilación, enlazado y carga de código.

A través de este proyecto, se busca observar cómo las distintas etapas de un compilador se aplican de manera concreta dentro del entorno de desarrollo de Arduino IDE, y cómo el resultado de la compilación se traduce en una ejecución física sobre un microcontrolador, donde las instrucciones se transforman en señales eléctricas que controlan pines digitales.
             


              <br />
            </p>
          </section>

          <section className="sectionInfoGeneral">
            <h2>Justificación del Proyecto</h2>
            <p>
              El compilador de Arduino es una herramienta esencial para comprender la traducción entre lenguajes de programación de alto nivel y la lógica binaria que interpreta un microcontrolador.
A diferencia de los compiladores tradicionales, el compilador de Arduino debe adaptarse a las limitaciones del hardware embebido: memoria reducida, procesamiento limitado y necesidad de un control temporal preciso.

Este proyecto permite visualizar cómo el proceso de compilación, que normalmente es abstracto, se manifiesta físicamente. Cada instrucción escrita por el programador se convierte en un conjunto de operaciones binarias que determinan el comportamiento del hardware.

Además, la exploración del compilador de Arduino fomenta la comprensión de las fases internas de la compilación: análisis léxico, sintáctico, semántico, generación de código intermedio, optimización y generación de código máquina.
A su vez, se observa cómo las bibliotecas de Arduino se integran durante el enlazado, y cómo el resultado final se transfiere a la memoria flash del microcontrolador.
              


            </p>
          </section>
        </div>

        <section className="sectionInfoGeneral">
          <h2>Objetivo general</h2>
          <p>
            Analizar el proceso de compilación y ejecución en Arduino, comprendiendo cómo el código fuente en C/C++ se transforma en instrucciones ejecutables para el microcontrolador, y cómo las diferentes etapas del compilador se reflejan en la operación física del dispositivo.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Objetivos específicos</h2>
          <p>
            Comprender las etapas del proceso de compilación en el entorno Arduino IDE.

Identificar cómo las instrucciones del lenguaje C/C++ son traducidas a lenguaje máquina mediante el compilador AVR-GCC.

Analizar el proceso de enlace y carga de código al microcontrolador a través del bootloader.

Observar cómo el compilador gestiona las librerías, funciones y estructuras del programa.

Fomentar habilidades prácticas en depuración y análisis del código compilado.

Relacionar los conceptos teóricos de compiladores con la ejecución física de un programa en hardware real.
           
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Compilación y ejecución en Arduino</h2>
          <p>
            El proceso de compilación en Arduino se lleva a cabo mediante una cadena de herramientas (toolchain) basada en AVR-GCC, un compilador especializado en microcontroladores AVR.
El flujo completo incluye las siguientes etapas:

Preprocesado: se expanden macros y se incluyen las librerías necesarias (#include).

Compilación: el código fuente en C/C++ se traduce a código objeto (.o).

Enlazado: se combinan los distintos módulos y librerías, generando un archivo ejecutable en formato ELF.

Conversión a hexadecimal: el ejecutable se transforma en un archivo .hex, interpretable por el microcontrolador.

Carga al dispositivo: el archivo .hex se transfiere a la memoria flash del Arduino mediante el bootloader, utilizando comunicación serial.

Cada paso del proceso representa una parte del ciclo completo de un compilador, desde la lectura del código fuente hasta su ejecución final en el hardware.


            
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Conceptos aplicados en el entorno Arduino</h2>
          <p>
            AVR-GCC: compilador de código abierto que traduce el lenguaje C/C++ a instrucciones compatibles con la arquitectura AVR.
            Bootloader: programa residente en el microcontrolador que permite cargar código sin necesidad de programadores externos.
            Preprocesador: módulo que interpreta directivas como #define, #include y comentarios antes de la compilación.
            Linker: combina archivos objeto y bibliotecas, resolviendo referencias a funciones y variables.
            Upload Tool (avrdude): aplicación que transfiere el programa compilado al microcontrolador.
            Código máquina: secuencia de instrucciones binarias que controla directamente los registros del microcontrolador.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Descripción general del proceso</h2>
          <p>
            Para observar el funcionamiento del compilador de Arduino, se puede utilizar un ejemplo simple: encender y apagar un LED en el pin 13.
Al compilar el siguiente código en el IDE de Arduino:

              <img src={import.meta.env.BASE_URL + 'Captura desde 2025-10-22 09-18-25.png'} alt="Captura de código" />
          <img src={import.meta.env.BASE_URL + 'Captura desde 2025-10-22 09-31-35.png'} alt="Captura 2" />
          <img src={import.meta.env.BASE_URL + 'Captura desde 2025-10-22 09-31-15.png'} alt="Captura 3" />
el compilador realiza automáticamente la conversión del código fuente a lenguaje máquina.
Cada instrucción de alto nivel, como digitalWrite() o delay(), se traduce en operaciones que modifican los registros del microcontrolador, controlando así el estado lógico del pin digital.

El resultado final es un programa binario optimizado que, una vez cargado en la memoria del Arduino, ejecuta la secuencia de encendido y apagado del LED de manera autónoma.
           


          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Análisis desde la perspectiva de un compilador</h2>
          <p>
           Análisis léxico: identificación de tokens como void, pinMode, HIGH.

Análisis sintáctico: verificación de la estructura de funciones y sentencias del programa.

Análisis semántico: comprobación de tipos de datos y parámetros en funciones como digitalWrite(pin, valor).

Generación de código intermedio: representación optimizada en un formato intermedio para la arquitectura AVR.

Optimización: eliminación de redundancias, reorganización de instrucciones y reducción de uso de memoria.

Generación de código objeto: conversión a lenguaje ensamblador y posteriormente a binario.

Enlazado y carga: unión de módulos y transferencia del programa a la memoria flash mediante el bootloader.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Conclusión</h2>
          <p>
            El estudio del compilador de Arduino permite comprender de manera clara cómo un código fuente se transforma en una ejecución física tangible.
A través de este proceso, se evidencian los principios fundamentales de la compilación y su aplicación directa en sistemas embebidos.

El entorno Arduino representa una herramienta didáctica excepcional para conectar la teoría de los compiladores con la práctica del control de hardware.
Cada línea de código escrita en el IDE atraviesa todas las fases de un compilador moderno y culmina en una acción visible, demostrando que los conceptos de análisis léxico, semántico y optimización no son solo teóricos, sino esenciales para el funcionamiento del mundo digital actual.
           



          </p>
        </section>

      </section>
    </div>
  )
}

export default Compilador;
