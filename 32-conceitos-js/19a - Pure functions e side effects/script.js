// Pure functions
const soma = (x, y) => x + y;
let nome = "";

// Função impura
const alteraNome = (novoNome) => {
  nome = novoNome;
};

const usuario = { nome: "Eduardo", pontos: 0 };
// const alteraUsuario = (usuario) => {
//   usuario.nome = usuario.nome.toUpperCase();
//   usuario.pontos += 1;
//   return usuario;
// };

// A função alteraUsuario é impura tanto por fazer mais de uma ação na função quanto por ter efeitos colaterais ao alterar um objeto diretamente
// Para torna-la pura, primeiro devemos separar cada coisa que é feita nessa função em outras duas funções

// Função Pura
const nomeMaisculo = (nome) => nome.toUpperCase();
const incrementaPontos = (pontos) => pontos + 1;

usuario.nome = nomeMaisculo(usuario.nome);
usuario.pontos = incrementaPontos(usuario.pontos);

console.log(usuario);
