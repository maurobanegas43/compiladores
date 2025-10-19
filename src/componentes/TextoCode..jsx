import React, { useState } from "react";

export default function TextoCode() {
  const code = `
  // Semaforo basico (bloqueante)
// Pines
const int ROJO = 2;
const int AMARILLO = 3;
const int VERDE = 4;

// Tiempos (ms)
const unsigned long TIEMPO_VERDE = 5000;    // 5s
const unsigned long TIEMPO_AMARILLO = 2000; // 2s
const unsigned long TIEMPO_ROJO = 5000;     // 5s

void setup() {
  pinMode(ROJO, OUTPUT);
  pinMode(AMARILLO, OUTPUT);
  pinMode(VERDE, OUTPUT);
}

void loop() {
  // Verde
  digitalWrite(VERDE, HIGH);
  digitalWrite(AMARILLO, LOW);
  digitalWrite(ROJO, LOW);
  delay(TIEMPO_VERDE);

  // Amarillo
  digitalWrite(VERDE, LOW);
  digitalWrite(AMARILLO, HIGH);
  delay(TIEMPO_AMARILLO);

  // Rojo
  digitalWrite(AMARILLO, LOW);
  digitalWrite(ROJO, HIGH);
  delay(TIEMPO_ROJO);
}

  `;


  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div  className="codeTerminal">
      <pre>
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
    </div>
  );
}
