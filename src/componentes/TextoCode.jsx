import React, { useState } from "react";

export default function TextoCode() {
  const code = `

  //semaforo 1
int ledRojo1=13;
int ledAmarillo1=12;
int ledVerde1=11;
//semaforo 2
int ledRojo2=10;
int ledAmarillo2=9;
int ledVerde2=8;
//semaforo 3
int ledRojo3=7;
int ledAmarillo3=6;
int ledVerde3=5;
//semaforo 4
int ledRojo4=4;
int ledAmarillo4=3;
int ledVerde4=2;

//Explicación: Se declaran variables enteras para cada LED de los cuatro semáforos,
//asignando un número de pin digital del Arduino. Esto permite que cada LED sea
//controlado individualmente mediante las funciones digitalWrite()

void setup() {
pinMode(ledRojo1,OUTPUT);
pinMode(ledAmarillo1,OUTPUT);
pinMode(ledVerde1,OUTPUT);
pinMode(ledRojo2,OUTPUT);
pinMode(ledAmarillo2,OUTPUT);
pinMode(ledVerde2,OUTPUT);
pinMode(ledRojo3,OUTPUT);
pinMode(ledAmarillo3,OUTPUT);
pinMode(ledVerde3,OUTPUT);
pinMode(ledRojo4,OUTPUT);
pinMode(ledAmarillo4,OUTPUT);
pinMode(ledVerde4,OUTPUT);
}


//Explicación: La función setup() se ejecuta una vez al inicio. Aquí se configuran todos
//los pines asociados a los LEDs como salidas (OUTPUT), lo que permite controlar su
//encendido y apagado mediante instrucciones digitales.

void loop() {
digitalWrite(ledRojo1,HIGH);
digitalWrite(ledRojo3,HIGH);
digitalWrite(ledRojo4,HIGH);
digitalWrite(ledRojo2,LOW);
digitalWrite(ledVerde2,HIGH);
delay(5000);
digitalWrite(ledVerde2,LOW);
digitalWrite(ledAmarillo2,HIGH);
delay(2000);
digitalWrite(ledAmarillo2,LOW);
digitalWrite(ledRojo2,HIGH);
digitalWrite(ledRojo3,LOW);
digitalWrite(ledVerde3,HIGH);
delay(5000);
digitalWrite(ledVerde3,LOW);
digitalWrite(ledAmarillo3,HIGH);
delay(2000);
digitalWrite(ledAmarillo3,LOW);
digitalWrite(ledRojo3,HIGH);
digitalWrite(ledRojo4,LOW);
digitalWrite(ledVerde4,HIGH);
delay(5000);
digitalWrite(ledVerde4,LOW);
digitalWrite(ledAmarillo4,HIGH);
delay(2000);
digitalWrite(ledAmarillo4,LOW);
digitalWrite(ledRojo4,HIGH);
digitalWrite(ledRojo1,LOW);
digitalWrite(ledVerde1,HIGH);
delay(5000);
digitalWrite(ledVerde1,LOW);
digitalWrite(ledAmarillo1,HIGH);
delay(2000);
digitalWrite(ledAmarillo1,LOW);
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
