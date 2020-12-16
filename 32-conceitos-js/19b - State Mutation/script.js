//////// Método Mutável (RUIM) ////////
// const pedido = { titulo: "meu pedido", status: false };
// const copiaPedido = (pedido) => {
//   pedido.status = true;
//   return pedido;
// };
// const novoPedido = copiaPedido(pedido);
// novoPedido.titulo = "Segundo pedido";
// console.log(pedido);
// console.log(novoPedido);
// Como resultados dos console.log(), temos que os dois pedidos são iguais por causa da mutabilidade,
// com isso, além de alterarmos o pedido original, retornamos ele para ser utilizado no novoPedido.
// Então qualquer alteração no novo pedido também altera o antigo e vice versa.

//////// Método Imutavel (BOM) ////////
const pedido = { titulo: "meu pedido", status: false };
const copiaPedido = (pedido) => {
  const novoPedido = Object.assign({}, pedido);
  novoPedido.status = true;
  return novoPedido;
};
const novoPedido = copiaPedido(pedido);
novoPedido.titulo = "Segundo pedido";
console.log(pedido);
console.log(novoPedido);
// Criamos um objeto novo com Object.assign() e passamos um objeto vazio {} e o pedido a ser copiado, com isso temos um
// objeto completamente novo que podemos modificar sem afetar o objeto pedido original.
