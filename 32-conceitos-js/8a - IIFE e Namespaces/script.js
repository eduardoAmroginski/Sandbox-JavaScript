// function alerta() {
//   alert("Olá Mundo!");
// }
// alerta();

// const alerta = function () {
//   alert("Olá Mundo!");
// };
// alerta();

// IIFE
// !(function () {
//   alert("Olá Mundo!");
// })();

// (function () {
//   alert("Olá");
// })();

// !(function teste() {
//   alert("Olá Mundo!");
// })();

// var variavel = 20;
// !(function teste() {
//   variavel = 30;
// })();
// console.log(variavel);

//NameSpace
var dados = (function () {
  var contador = 0;
  return {
    incrementar: function () {
      contador = contador + 1;
      return contador;
    },
  };
})();

console.log(dados.incrementar());
console.log(dados.incrementar());
console.log(dados.incrementar());
