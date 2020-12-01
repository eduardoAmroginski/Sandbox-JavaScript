// Tipos de valor

var x = 10; // mem.0001 = nome é x, e o valor é 10
var y = x;
x = 20;

console.log(x, y)

// Tipos de referências
var x = {valor: 10};
var y = x;
x.valor = 20;

/* 
local mem.0002 = {valor: 10};
variavel x =  mem.0002;
variavel y = x = mem.0002;
*/

console.log(x);
console.log(y);


// Diferente dos tipos de valores que associam diretamente um valor à variavel.
// Quando criamos o objeto, um array ou uma função e atribuimos a uma variável
// e atribuimos a uma variavel, estamos dando a essa variável apenas uma referência
// desse objeto na memória.
