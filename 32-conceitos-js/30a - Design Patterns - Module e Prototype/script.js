const Carro = {
  tracao: "4x4",
  ligar() {
    return "ligou";
  },
};

const meuCarro = Object.create(Carro, { dono: { value: "Eduardo" } });

//criando novo método depois de já ter criado o objeto
Carro.__proto__.desligar = function () {
  return "desligou";
};
console.log(meuCarro.ligar());
console.log(meuCarro.desligar());
