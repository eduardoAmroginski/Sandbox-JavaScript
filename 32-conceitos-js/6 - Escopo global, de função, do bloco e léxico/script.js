// var, let e const 

// var nome = "Eduardo";
// function teste(){
//     var sobrenome = "Sobrenome"
//     if(sobrenome === 'Sobrenome'){
//         const valor = 10;
//     }
//     console.log(valor)
// }
// teste();


// Escopo Léxico
// function teste(){
//     var variavel = "meu nome"
//     function teste2(){
//         variavel = "Seu nome"
//     }
// }
// teste();


// Escopo Global
// var a = 0;
// function alterar(){
//     a = 10;
// }
// console.log(a);
// alterar();
// console.log(a);


// Escopo de Função
// igual ao escopo léxico, o que é criado dentro da função
// não esta disponivel fora dela

// Escopo de Bloco
// function bloco(){
//     var teste;
//     if (true){
//         teste = 'teste';
//         let teste2 = 'teste2'; // Se mudarmos teste2 de um let para um var, ele funcionará
//     }
//     console.log('teste ', teste);
//     console.log('teste2', teste2);
// }
// bloco();

// HOISTING
function bloco(){
    var teste;
    if (true){
        teste = 'teste';
        var teste2 = 'teste2'; // Se mudarmos teste2 de um let para um var, ele funcionará
    }
    console.log('teste ', teste);
    console.log('teste2', teste2);
}
bloco();