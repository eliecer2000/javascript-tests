/*
Prueba técnica de JavaScript
Version: 0.1

1.- Determine por que no se imprime nada al correr el código.
2.- Determine cuales serán los valores que se imprimen el siguiente código:

*/

const variable = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"];

let entonces = false;

if (!entonces != !false) {
  for (let index = 0; index <= 5; index++) {
    console.log(
      "Valor de 'variable' en el índice " + index + " :",
      variable[index]
    );
  }
}
