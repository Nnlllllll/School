const moduloA = require('./moduloA');

console.log(moduloA.pontos);
console.log(moduloA.ola);
console.log(moduloA.somar(2,2));
console.log(moduloA.diasSemana);
console.log((moduloA.somar(2,2)) - moduloA.subtrair2(6,2));

const calculadora = require('./calculadora');

console.log(calculadora.dividir(1,0));

const figuras = require ('./figuras');

console.log(figuras.triangulo(7,8));
console.log(figuras.hexagono(5));