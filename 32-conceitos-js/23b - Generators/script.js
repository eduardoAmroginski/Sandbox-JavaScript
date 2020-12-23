// Função sem Generator, um for comum.
function iteraNumeros(total){
  console.log("SEM GENERATOR")
  for(let i = 1; i <= total; i++){
    console.log(i);
  }
}

iteraNumeros(5);

// Função com Generator
function *iteraGenerator(total){ // Para criarmos um generator, precisamos adicionar o " * " (asterisco) antes do nome da função
  console.log("COM GENERATOR")  
  for(let i = 1; i <= total; i++){
    yield console.log(i); // utilizamos também a palavra chave yield, ela funciona como um return, porém ele pausa a execução na linha que ele está
                          // e na proxima vez que a função for chamada, ele volta a execução até o proximo yield
  }
}

const totalGenerator = iteraGenerator(5); // Precisamos atribuir o Generator a uma variavel antes de usar e utilizar esta variavel.
totalGenerator.next(); // Usamos a função "next()" para dizer para o nosso Generator que deve avançar na execução até o próximo yield.
totalGenerator.next();
totalGenerator.next();

// Função com Generator com retorno de valor
function *iteraGeneratorRetorno(total){
  console.log("GENERATOR com retorno de valor")  
  for(let i = 1; i <= total; i++){
    yield i;
  }
}

const totalGeneratorRetorno = iteraGeneratorRetorno(5);
console.log(totalGeneratorRetorno.next().value); //totalGeneratorRetorno.next() retorna um objeto que tem um value, esse value é o nosso retorno da função com Generator
console.log(totalGeneratorRetorno.next().value);