// Chamando a biblioteca "prompt-sync", serve para poder interagir no terminal
const prompt = require('prompt-sync')();


// Declaração da classe conta, é ela que será chamada para criar o objeto Conta
class Conta{
    constructor(nome, dinheiro){
        this.nome = nome;
        this.dinheiro = dinheiro;
    }
}

// Declaração do array, neste momento o array está vazio
const arrayContas = new Array();

// Cria os objetos "Conta", passando os valores e atribuindo estes objeto as variaveis conta1 e conta2
let conta1 = new Conta("Valerio Cunha", 100);
let conta2 = new Conta("Maria Silva", 100);

// Insere no arrayContas os objetos conta1 e conta2
arrayContas.push(conta1);
arrayContas.push(conta2);

// Printa o arrayContas
console.log(arrayContas);

// Realiza um filtro para obtermos um array com o objeto contendo o nome "Valerio Cunha"
acessoConta = arrayContas.filter(conta => {
    return conta.nome == "Valerio Cunha"
})

// Printa o objeto filtrado
console.log("Conta Acessada: ", acessoConta[0]);

// Adiciona e atribui 100 ao atributo dinheiro do objeto filtrado
acessoConta[0].dinheiro += 100

// Printa o objeto filtrado
console.log("Conta Acessada: ", acessoConta[0]);

// Printa o arrayContas
console.log(arrayContas);

// As duas variaveis abaixo são preenchidas com o valor solicitado no terminal/cmd
let nome = prompt("Digite um nome: ");
let xablau = parseFloat(prompt("Digite um valor: "));

// Cria o objetos "Conta", passando os valores e atribuindo estes objeto as variavel conta3, não é utilizada
let conta3 = new Conta(nome, xablau);

// Cria o objetos "Conta", passando os valores e adiciona este objeto diretamente ao arrayContas
arrayContas.push(new Conta(nome, xablau));

// Printa o arrayContas
console.log(arrayContas);