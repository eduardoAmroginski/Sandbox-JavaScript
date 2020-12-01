console.log(typeof true); //Boolean
console.log(typeof Boolean(true)); //Boolean
console.log(typeof new Boolean(true)); //Object (construtor de tipos primitivos)
console.log(typeof (new Boolean(true)).valueOf()); //Boolean

console.log(typeof "Eduardo"); //String
console.log(typeof 28); //Number

//Exemplo de transformação de tipo primitivo em objeto
console.log("Eduardo".length);



// Exemplo de transformação de 
// Objetos em tipos primitivos

var doze = new Number(12);
var quinze = doze + 3;

console.log(quinze);

console.log(typeof doze);
console.log(typeof quinze);