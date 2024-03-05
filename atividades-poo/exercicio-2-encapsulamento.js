
// Modifique a classe Pessoa para que os atributos sejam privados 
// e crie métodos públicos para acessar e modificar esses atributos.

class Pessoa {
  constructor(nome, idade, profissao) {
    this._nome = nome;
    this._idade = idade;
    this._profissao = profissao;
  }

  getNome() {
    return this._nome;
  }

  getIdade() {
    return this._idade;
  }

  getProfissao() {
    return this._profissao;
  }

  setNome(nome) {
    this._nome = nome;
  }

  setIdade(idade) {
    this._idade = idade;
  }

  setProfissao(profissao) {
    this._profissao = profissao;
  }
}
  
let pessoa1 = new Pessoa("João", 30, "Engenheiro");
console.log(pessoa1.getNome());
