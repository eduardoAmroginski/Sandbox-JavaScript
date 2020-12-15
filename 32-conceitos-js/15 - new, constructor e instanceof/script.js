//////// NEW ////////

function Usuario(nome) {
  // this = {} //está implicito
  this.nome = nome;
  this.log = function () {
    console.log(this);
  };
  //return this; // implicito também
}
const eduardo = new Usuario("Eduardo");
console.log(eduardo);

//////// CONSTRUCTOR ////////
// const novoNome = new String("Eduardo");
// console.log(novoNome); // Aqui retorna um objeto com o nome inserido, e dentro do objeto cada letra
// // é separada como se fosse um array, além disso é dado o length e o __proto__

// INSTANCEOF
console.log(eduardo instanceof Usuario); //Retorna true, pois a variavel eduardo é uma instancia do construtor Usuario
