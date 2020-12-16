////// Forma não recursiva //////
// function contagem(numero) {
//   for (; numero >= 0; numero--) {
//     console.log(numero);
//   }
// }

////// Forma recursiva //////
function contagem(numero) {
  console.log(numero);
  if (numero > 0) {
    contagem(numero - 1);
  }
}

contagem(5);
