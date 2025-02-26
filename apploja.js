const modulo = require('./produtos');

console.log("Nomes dos produtos:");
console.log(modulo.nomes);
console.log("Preço total:");
console.log(modulo.somatotal);
console.log("Produtos com preço maior que 500 reais:");
console.log(modulo.filtro500);