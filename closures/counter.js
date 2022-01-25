// Contador usando closures e variaveis privadas

const Counter = () => {
  let count = 0;

  const changeBy = (value) => {
    return (count += value);
  };

  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    value: () => {
      return count;
    },
  };
};

const CounterOne = Counter();
const CounterTwo = Counter();

CounterOne.increment();
CounterOne.increment();
console.log(`CounterOne: ${CounterOne.value()}`);
console.log(`CounterTwo: ${CounterTwo.value()}`);
