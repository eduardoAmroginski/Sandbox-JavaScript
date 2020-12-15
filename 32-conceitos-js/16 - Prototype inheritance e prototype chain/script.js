const Usuario = function (nome) {
  this.nome = nome;
};

const eduardo = new Usuario("Eduardo");

Usuario.prototype.getNome = function () {
  console.log(this.nome);
};

eduardo.getNome();
