// == e ===

// ==
console.log(3 == '3')

// 1º se ambos são do mesmo tipo
// null == undefined, se for, ele retorna true
// number == string, se for, ele vai converter a string em numero
// boolean == number, se for, ele converte o boolean num numero
// boolean == string, se for, ele converte a string pra boolean
// objeto == primitivo, se for, ele converte o objeto numa string


// ===
console.log(3 === '3');
console.log(3 === 3);

// É necessário que os valores e os tipos sejam iguais para ser true.


// typeof
console.log(typeof 'Eduardo' === 'string')
// é otimo para validação de tipos