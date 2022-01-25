// Closure com funções reservadas

const manipulaArray = () => {
  const arr = ["Banana", "Morango", "Abacaxi", "Pessego"];

  const printArray = () => {
    console.log(arr);
  };

  return {
    removeLast: () => {
      arr.pop();
      printArray();
    },
    addLast: (item) => {
      arr.push(item);
      printArray();
    },
  };
};

const mySecondClosure = manipulaArray();
const mySecondClosureTwo = manipulaArray();

console.log("Primeira Closure");
mySecondClosure.removeLast();
mySecondClosure.addLast("Kiwi");

console.log("Segunda Closure");
mySecondClosureTwo.addLast("Manga");
