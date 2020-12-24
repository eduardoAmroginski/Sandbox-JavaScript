////// CURRYING //////
// Exemplo 1
// const dragao = (nome, tamanho, elemento) => {
//   return `${nome} é um dragão ${tamanho} e cospe ${elemento}!`;
// };
// console.log(dragao("Mushu", "pequeno", "fogo"));

// Exemplo 2
const dragao = (nome) => (tamanho) => (elemento) => {
  return `${nome} é um dragão ${tamanho} e cospe ${elemento}!`;
};
// // console.log(dragao("Mushu")("pequeno")("fogo"));

// // Exemplo 3
// const mushu = dragao("Mushu");
// console.log(mushu("pequeno")("fogo"));

////// COMPOSE //////
// Forma normal //
// const incrementar = (x) => x + 1;
// const dobrar = (x) => x * 2;
// const valor = incrementar(3);
// const resultado = dobrar(valor);
// console.log(resultado);

// Forma Compose //
const incrementar = (x) => x + 1;
const dobrar = (x) => x * 2;
const valor = 3;
const resultado = dobrar(incrementar(valor));
// console.log(resultado);

////// Pipe //////
const pipe = (inc, dob) => (args) => dob(inc(args));
const IncrementaEDobra = pipe(incrementar, dobrar);
const resultadoPipe = IncrementaEDobra(3);
console.log(resultadoPipe);
