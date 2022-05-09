/*
Prueba técnica de JavaScript
Version: 0.1

Descubrir por que la función del siguiente código no devuelve el valor de los argumentos divididos entre 2, ejemplo:

testFunction(6) el resultado es 3
testFunction(10) el resultado es 5
testFunction(30) el resultado es 15

Ejecutando el procedimiento desde la función main()

*/

function main(arg) {
  let base = arg;
  let resultado = testFunction(base);
  console.log("La base es ", base, " dividido entre 2 son ", resultado);
}

function testFunction(arg) {
  const divisor = 2;
  return divisor / arg;
}
