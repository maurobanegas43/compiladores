
function Vm() {

  return (
    <div className="contenido">
      <section className="contenidoInfo">
        <h1>VIRTUALIZACIÓN CON VIRTUALBOX</h1>

        <div className="contenidoInfoMateriales">
          <section className="sectionIntroduccion">
            <h2>Introducción</h2>
            <p>
              Este proyecto consiste en la implementación y análisis de entornos virtualizados
              utilizando VirtualBox, con el objetivo de comprender cómo los compiladores operan
              dentro de máquinas virtuales y cómo el hardware virtual influye en los procesos de
              compilación y ejecución de programas. La idea central es simular un entorno
              controlado donde diferentes sistemas operativos puedan ejecutar código fuente,
              observar el proceso de traducción de alto nivel a código máquina, y analizar el
              papel de la virtualización en la portabilidad y eficiencia del software. La
              virtualización permite ejecutar múltiples sistemas operativos sobre una misma
              máquina física, creando un entorno aislado en el que los compiladores pueden ser
              probados, configurados y optimizados sin afectar al sistema anfitrión. Así, el
              proyecto integra los conceptos de compilación, emulación y gestión de recursos
              virtuales, estableciendo un vínculo directo entre teoría de compiladores y práctica
              en entornos virtualizados.
              <br />
            </p>
          </section>

          <section className="sectionInfoGeneral">
            <h2>Justificación del Proyecto</h2>
            <p>
              El estudio de la virtualización en el contexto de compiladores es fundamental para
              entender cómo los programas pueden desarrollarse, probarse y ejecutarse en arquitecturas
              diversas sin necesidad de múltiples dispositivos físicos. Al utilizar VirtualBox, es
              posible crear entornos que simulan diferentes arquitecturas y sistemas operativos,
              facilitando la comprensión de cómo los compiladores generan código adaptado al
              hardware virtualizado.
            </p>
          </section>
        </div>

        <section className="sectionInfoGeneral">
          <h2>Objetivo general</h2>
          <p>
            Diseñar, configurar y analizar un entorno virtualizado mediante VirtualBox, aplicando
            los principios de compilación y ejecución de programas para comprender cómo los
            compiladores interactúan con sistemas virtuales y hardware emulado.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Objetivos específicos</h2>
          <p>
            Configurar una o más máquinas virtuales con distintos sistemas operativos (Linux,
            Windows, etc.) para ejecutar procesos de compilación. Analizar cómo los compiladores
            traducen código fuente dentro de entornos virtualizados y cómo se gestionan los recursos
            de CPU, memoria y almacenamiento. Estudiar el rendimiento de programas compilados en
            máquinas virtuales frente a su ejecución en hardware físico. Explorar el uso de
            compiladores cruzados (cross-compilers) dentro de entornos virtuales. Comprender el
            papel del hipervisor (VirtualBox) en la abstracción y comunicación entre software y
            hardware. Fomentar la capacidad de resolución de problemas y depuración en entornos de
            desarrollo virtualizados.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Compilación y ejecución en entornos virtuales</h2>
          <p>
            El proceso de compilación dentro de una máquina virtual es análogo al de un entorno
            físico, pero con una capa adicional de abstracción. El compilador traduce el código
            fuente a instrucciones de máquina, pero esas instrucciones son interpretadas por un
            procesador virtual, que a su vez comunica las operaciones al procesador físico mediante
            el hipervisor.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Conceptos aplicados</h2>
          <p>
            Hipervisor: componente que gestiona la ejecución de máquinas virtuales y traduce las
            operaciones del sistema invitado al hardware físico. Procesador virtual: interpreta
            las instrucciones generadas por el compilador dentro del entorno emulado. Imágenes de
            disco virtual (VDI): almacenan los sistemas operativos y los archivos de compilación.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Descripción general</h2>
          <p>
            El entorno experimental se compone de una máquina física anfitriona con VirtualBox
            instalado y una máquina virtual configurada con un sistema operativo Linux (Ubuntu).
            Dentro de esta máquina virtual se instalan distintos compiladores (GCC, Clang, y Java
            JDK) para realizar pruebas de compilación sobre diversos programas fuente.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Análisis desde la perspectiva de un compilador</h2>
          <p>
            Análisis léxico: identificación de tokens y elementos sintácticos dentro del código
            fuente. Análisis sintáctico: comprobación de la estructura del código conforme a la
            gramática del lenguaje. Análisis semántico: verificación del significado lógico de las
            expresiones y tipos de datos.
          </p>
        </section>

        <section className="sectionInfoGeneral">
          <h2>Conclusión</h2>
          <p>
            El proyecto permitió comprender de manera integral la relación entre virtualización y
            compilación, mostrando cómo el proceso de traducción de código fuente se adapta y
            ejecuta sobre un entorno emulado.
          </p>
        </section>


        <section className="sectionInfoGeneral">
          <h2>Imagenes</h2>
          <img src='Captura desde 2025-10-22 09-31-35.png' alt="Captura 2" />
          <img src='Captura desde 2025-10-22 09-31-15.png' alt="Captura 3" />
          
        </section>
       






      </section>
    </div>
  )
}

export default Vm;
