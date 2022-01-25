// Neste exemplo definimos a função makeAdder(x) que toma um único argumento x e retorna uma nova função.
// A função retornada toma então um único argumento, y, e retorna então a soma de x e de y.

const makeAdder = (x) => {
  return (y) => {
    return x + y;
  };
};

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(`${add5(2)}`);
console.log(`${add10(5)}`);

// Na essência o makeAdder trata-se de uma função fábrica - irá construir outras funções que podem adicionar um determinado valor específico a seu argumento. No exemplo acima usamos a fábrica de funções para criar duas novas funções - uma que adiciona 5 ao argumento, e outra que adiciona 10.
