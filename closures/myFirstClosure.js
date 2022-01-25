const completeName = () => {
  const name = "Eduardo Amroginski Santos";

  const formatName = () => {
    const names = name.split(" ");
    return `${names[0]} ${names[names.length - 1]}`;
  };
  return formatName;
};

const myFirstClosure = completeName();

console.log(myFirstClosure());
