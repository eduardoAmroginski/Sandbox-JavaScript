const showHelp = (help) => {
  document.getElementById("help").innerHTML = help;
};

const makeHelpCallback = (help) => {
  return () => {
    showHelp(help);
  };
};

const setupHelp = () => {
  let helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
};

setupHelp();
