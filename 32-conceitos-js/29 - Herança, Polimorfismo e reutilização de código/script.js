////// Polimorfismo e Herança //////
class Forma {
  desenhar() {
    console.log("Eu sou uma forma");
  }
}

class Triangulo extends Forma {}

////// Sobrescrever //////
class Circulo extends Forma {
  desenhar() {
    // Sobrescreve o método desenhar() herdado de Forma
    console.log("Eu sou uma circulo");
  }
}

const formas = [new Forma(), new Triangulo(), new Circulo()];

formas.forEach((forma) => forma.desenhar());
