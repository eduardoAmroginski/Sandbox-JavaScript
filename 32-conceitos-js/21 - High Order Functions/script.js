// Código de demonstração para ser executado no Console do navegador
// na página inicial do google.

///// Passando função como argumento /////

// Método 1, passando uma função anonima como callback
document.getElementById("logo-default").addEventListener("click", function () {
  alert("clicou no logo");
});

// Método 2, passando uma função não anonima como callback
function mostrarAlerta() {
  alert("clicou no logo");
}

document
  .getElementById("logo-default")
  .addEventListener("click", mostrarAlerta); // Passar a função sem executar, sem "()" no final.

///// Retornando função  /////

// Método 1
const maiusculo = function (texto) {
  return texto.toUpperCase(); //Retornando uma função que é executada em seguida.
};

maiusculo("eduardo");

// Método 2
function chamaAlerta() {
  return mostrarAlerta;
}

chamaAlerta()();
