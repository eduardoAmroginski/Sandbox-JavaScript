const Mamifero = function (nome, som) {
  return { nome, som }; //Object Short Hand = {nome : nome, som : som}
};

const cachorro = Mamifero("cachorro", "auau");
console.log(cachorro);
