///// SET /////
// const alfabeto = new Set(["a", "b", "c", "d"]);
// alfabeto.add("a"); //Não adiciona outro "a", pois já temos este valor no nosso alfabeto
// console.log(alfabeto);
// console.log(alfabeto.has("a")); //Faz a busca de um valor dentro do nosso Set, retornando true ou false
// console.log(alfabeto[0]); //Retorna undefined porque o Set não tem indexação que nem o array padrão.

//// Métodos do Set
// alfabeto.add("e"); //Adiciona um novo valor
// alfabeto.delete("a"); //Deleta o valor passado, caso ele exista, e retorna true caso tenha deletado o valor com sucesso.
// alfabeto.forEach((item) => {
//   console.log(item);
// }); //O forEach do Set, funciona da mesma forma do forEach do array padrão.

//// Exemplo de remoção de dados repetidos usando SET
// let dados = [1, 2, 3, 3, 4, 4, 5];
// const numeros = new Set(dados); //Transforma em um array Set, removendo os numeros que são repetidos
// console.log(numeros);
// dados = Array.from(numeros); //Transforma de volta os dados em um array sem numeros repetidos
// console.log(dados);

///// MAP /////

const dados = new Map([
  ["nome", "eduardo"],
  ["idade", "23"],
]);
dados.set("estado", "Rio Grande do Sul"); //Adiciona um dado dentro do Map
console.log(dados);
console.log(dados.get("nome")); //Busca pela chave passada e retorna o valor dela
dados.forEach((dado, chave) => {
  console.log(dado, chave);
}); // Faz a interação com os dados dentro do Map
