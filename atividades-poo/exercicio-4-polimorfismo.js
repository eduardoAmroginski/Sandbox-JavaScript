// Adicione um método apresentacao à classe Pessoa e sobrescreva esse método na 
// classe Estudante para incluir o curso do estudante na apresentação.

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

    apresentacao() {
        return `Olá, meu nome é ${this._nome} e eu sou um(a) ${this._profissao}.`;
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

    apresentacao() {
        return `Olá, meu nome é ${this._nome}, eu sou um(a) ${this._profissao} e estou estudando ${this._curso}.`;
    }
}
  
  let pessoa1 = new Pessoa("João", 30, "Engenheiro");
  console.log(pessoa1.apresentacao());
  
  let estudante1 = new Estudante("Maria", 20, "Estudante", "Engenharia de Software");
  console.log(estudante1.apresentacao());
  