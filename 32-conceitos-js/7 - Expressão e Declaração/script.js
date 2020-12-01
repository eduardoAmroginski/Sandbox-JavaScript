// Expressão
console.log(1 + 1);
console.log(Math.random() + 5);

function expressao(){
    return 1+1;
}

console.log(expressao())


// Declaração
var variavel = 20;
if(true){
    variavel = 30;
}

function soma(a){
    return a + 10
}

console.log(soma(Math.random()))



// Expressão com declaração
function teste(){
    variavel = 30
    // return void implicito
}