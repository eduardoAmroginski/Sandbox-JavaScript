////// Singleton //////
const impressora = (function () {
  let instanciaDaImpressora;
  function criar() {
    // Aqui temos um método privado
    function imprimir() {
      console.log("Imprimindo documento");
    }
    function ligar() {
      // Aqui temos um método privado
      console.log("ligando impressora");
    }
    return { imprimir, ligar };
  }

  return {
    pegarInstancia: function () {
      if (!instanciaDaImpressora) {
        instanciaDaImpressora = criar(); // Aqui acessamos o métodos privado
      }
      return instanciaDaImpressora;
    },
  };
})();

const impressoraDaEmpresa1 = impressora.pegarInstancia();
const impressoraDaEmpresa2 = impressora.pegarInstancia();
impressoraDaEmpresa1.ligar();
console.log(impressoraDaEmpresa1);
console.log(impressoraDaEmpresa1 === impressoraDaEmpresa2);
