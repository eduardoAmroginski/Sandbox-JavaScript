// First in first out = FIFO = O primeiro que entrou é o primeiro a sair.
// Last in first out = LIFO = O ultimo que entra é o primeiro a sair.

function funcao1(){
    funcao2();
    console.log("Executou função 1");
}

function funcao2(){
    funcao3();
    console.log("Executou função 2");
}

function funcao3(){
    console.log("Executou função 3");
}

funcao1();

/*
funcao3();
funcao2();
funcao1();
*/