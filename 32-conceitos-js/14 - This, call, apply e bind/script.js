//////// THIS ////////
// console.log(this); //Retorna o objeto Window, representando aqui o escopo global, pois está fora de funções e métodos

// function teste() {
//   console.log(this);
// }

// const dados = { funcao: teste };
// dados.funcao();

// // This pegando o escopo global dentro de uma função
// const funcao2 = () => console.log(this); //Arrow Function

// const utilitarios = { funcao: funcao2 };
// utilitarios.funcao();

//////// CALL ////////
// const dados = { nome: "Eduardo" };
// const saudacao = function (idade) {
//   console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
// };
// saudacao.call(dados, 23);

//////// APPLY ////////
// const dados = { nome: "Eduardo" };
// const argumentos = [23];
// const saudacao = function (idade) {
//   console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
// };
// saudacao.apply(dados, argumentos);

//////// BIND ////////
const dados = { nome: "Eduardo" };
const saudacao = function (idade) {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};
const bound = saudacao.bind(dados);
bound(23);
