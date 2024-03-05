// Crie uma classe Estudante que herda de Pessoa e adicione o atributo curso.

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

class Estudante extends Pessoa {
    constructor(nome, idade, profissao, curso) {
      super(nome, idade, profissao);
      this._curso = curso;
    }
  
    getCurso() {
      return this._curso;
    }
  
    setCurso(curso) {
      this._curso = curso;
    }
  }
  
  let estudante1 = new Estudante("Maria", 20, "Estudante", "Engenharia de Software");
  console.log(estudante1.getCurso());
  