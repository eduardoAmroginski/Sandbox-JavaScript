const mamaeLembrou = true;

const passarParaComprarBrinquedo = new Promise((resolve, reject) => {
  if (mamaeLembrou) {
    resolve(true);
  } else {
    reject(false);
  }
});

const sairParaBrincar = (resultado) => {
  return new Promise((resolve, reject) => {
    if (resultado) {
      resolve("vou sair para brincar");
    } else {
      resolve("não sairei para brincar");
    }
  });
};

/////// Promise Simples ///////
// passarParaComprarBrinquedo // Uma promisse, não é exatamente uma função, por isso, não precisamos executa-la (usar ())
//   .then((lembrou) => {
//     console.log("lembrou");
//   })
//   .catch((naoLembrou) => {
//     console.log("não lembrou");
//   });

/////// Promises Encadeadas (Chain Promises) ///////
console.log("indo para a loja");
passarParaComprarBrinquedo // Uma promise é assincrona, isso quer dizer que o javascript não vai esperar a promise voltar para executar o que está depois.
  .then(sairParaBrincar)
  .catch(sairParaBrincar)
  .then((resultado) => console.log(resultado));
console.log("voltei da loja");
