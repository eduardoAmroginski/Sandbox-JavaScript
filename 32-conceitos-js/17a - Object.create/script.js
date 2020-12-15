// let Usuario = function (nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// };

// const eduardo = new Usuario("Eduardo", 23);
// const novoEduardo = Object.create(eduardo); //Object.create passando o objeto criado anteriormente

// console.log(novoEduardo instanceof Usuario); //O resultado é true pois é uma instancia de Usuario
// console.log(novoEduardo.nome); //Herança do protótipo

function Carro(cor) {
  this.cor = cor;
  this.descricao = descricao;
}

// Carro.prototype.pegaInformacoes = function () {
//   return this.descricao + " e a cor " + this.cor;
// };

// let meuCarro = Object.create(Carro.prototype);
// meuCarro.cor = "azul";
// console.log(meuCarro.pegaInformacoes());

// Propriedades Descritoras
const novoCarro = Object.create(Carro, {
  cor: { writable: true, configurable: true, value: "vermelho" },
  descricaoPadrao: { writable: false, configurable: true, value: "Meu carro" },
  descricao: {
    configurable: true,
    get: function () {
      return this.descricaoPadrao.toUpperCase();
    },
    set: function (valor) {
      this.descricaoPadrao = valor.toLowerCase();
    },
  },
});

// Writable: diz que esse valor pode ser modificado diretamente por atribuição.
// configurable: diz se o tipo de descritor pode ser alterado ou se ele pode ser removido do objeto.
// value: aqui temos a nossa descrição padrão que vai servir apenas para inilializarmos o nosso descritor com algum valor.
//        Nessa parte setamos o value para apenas não dar erro caso o usuário acesse a descrição já que a nossa descrição mesmo ela vai ser um descritor acessor

novoCarro.descricaoPadrao = "Nova descrição"; //Não acontece nada, pois nossa descricaoPadrão está com writable: false, então não podemos atribuir nada diretamente a ela,
console.log(novoCarro.descricao);
