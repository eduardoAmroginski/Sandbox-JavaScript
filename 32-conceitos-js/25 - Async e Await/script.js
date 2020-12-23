let mamaeLembrou = true;

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

async function vamosParaALoja() {
  try {
    const mamaeLembrou = await passarParaComprarBrinquedo;
    const mensagem = await sairParaBrincar(mamaeLembrou);
    console.log(mensagem);
  } catch (naoLembrou) {
    const mensagem = await sairParaBrincar(naoLembrou);
    console.log(mensagem);
  }
}
