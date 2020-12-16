let dados = [
  { nome: "Caramelo", idade: 3, tipo: "cachorro" },
  { nome: "Rex", idade: 6, tipo: "cachorro" },
  { nome: "Bolota", idade: 1, tipo: "gato" },
  { nome: "Thor", idade: 3, tipo: "cachorro" },
];

// FILTER
const cachorros = dados.filter((dado, index) => dado.tipo === "cachorro"); //Podemos passar nos callbacks como segundo parametro o "index" para sabermos qual posição na qual estamos interando
console.log(cachorros);

// MAP
const idadeReal = cachorros.map((cachorro) => ({
  nome: cachorro.nome,
  idade: cachorro.idade * 7,
}));
console.log(idadeReal);

//REDUCE
const totalIdades = idadeReal.reduce((soma = 0, dado) => {
  return soma + dado.idade;
}, 0);
console.log(totalIdades);

// Encadeamento de métodos de array. (economizamos memória usando desta forma)
const idade = dados
  .filter((dado, index) => dado.tipo === "cachorro")
  .map((cachorro) => ({
    nome: cachorro.nome,
    idade: cachorro.idade * 7,
  }))
  .reduce((soma = 0, dado) => {
    return soma + dado.idade;
  }, 0);
console.log(idade);
