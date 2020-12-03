// Demonstração do Event Loop

// Aqui utilizaremos o setTimeout para
// melhor exemplificar o Event Loop, mas é uma
// prática não recomendada

function loopEventos() {
  console.log("a");
  for (let i = 1; i <= 4; i++) {
    console.log("b - " + i);
  }
  console.log("c");
  setTimeout(() => {
    console.log("d");
  }, 0);
  console.log("e");
}

loopEventos();
