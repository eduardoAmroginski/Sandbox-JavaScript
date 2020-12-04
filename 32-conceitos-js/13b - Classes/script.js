class Animal {
  constructor(pes) {
    this.pes = pes;
  }
  quantidadePes() {
    console.log("Eu tenho: " + this.pes + " pés/patas");
  }
}

class Mamifero extends Animal {
  //Usa-se o extends + o nome da classe para extender uma classe dentro da atual
  constructor(nome, som, pes) {
    super(pes); //Chama o construtor da classe pai, tudo que for passado dentro do super será atribuido direto ao construtor da classe que foi extendida.
    this.nome = nome;
    this.som = som;
  }
  emitirSom() {
    console.log("Esse animal faz: " + this.som);
  }
}

const cachorro = new Mamifero("cachorro", "auau", 4);

cachorro.emitirSom();
cachorro.quantidadePes();
