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
