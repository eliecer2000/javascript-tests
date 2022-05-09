/*
Prueba técnica de JavaScript
Version: 0.1

¿ Que valor se va a imprimir en este código en las lineas 1, 2 y 3 ?

*/

var test = function (arguments) {
  return typeof arguments;
};

console.log("Valor de la linea 1", test());
console.log("Valor de la linea 2", test("123"));
console.log("Valor de la linea 3", test(null));
