// Crie uma classe chamada Pessoa com os atributos nome, 
// idade e profissao. Em seguida, crie um objeto dessa classe.

class Pessoa {
    constructor(nome, idade, profissao) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
    }
}

let pessoa1 = new Pessoa("João", 30, "Engenheiro");
console.log(pessoa1);
