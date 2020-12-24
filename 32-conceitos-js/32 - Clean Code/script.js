////// VARIÁVEIS //////

var c = 0; // ruim, pois não tem contexto e nem indica para que ela serve
var tempo = 15; // ruim, pois não tem contexto e nem indica para que ela serve
var tmpParaAguardaRespINT = 15; // Ruim, pois não é bom abreviar palavras nem utilizar tipos (INT) de objetos como nome, além do camelcase falho.
var chamadasRealizadasParaApi = 0; // Bom, pois tem contexto e indica para que ela serve
var tempoParaAguardarResposta = 15; // Bom, pois tem contexto e indica para que ela serve
const CHAMADAS_REALIZADAS_PARA_API = 0; //Bom, pois por convenção, consts podem e devem ser nomeadas com maiusculas e as palavras separadas por underline

////// FUNÇÕES //////

// Essa função não é clean code pois a função faz duas coisas, primeiro ela busca no banco os dados e depois a mesma função atribui ao usuario
function atualizaUsuarioLocal(id) {
  http.get("url?id=" + id).then((dadosDoUsuario) => {
    this.usuario = dadosDoUsuario;
  });
}

// Modo bom (Clean Code)
async function buscaUsuarioPorId(id) {
  return await http.get("url?id=" + id);
}
this.usuario = buscaUsuarioPorId(1);

/* 
  Atualiza o usuario local recebidos por argumento 
  params usuario Dados do usuário;
*/

this.usuario = atualizaUsuarioLocal({
  // Podemos também passar o objeto para uma variável
  nome: "Eduardo",
  idade: "23",
  telefone: "99999-9999",
});

////// OBJETOS //////

function criarUsuario(nome) {
  this.nome = nome;
  getNome = () => this.nome;
  setNome = (nome) => (this.nome = nome);

  return getNome, setNome;
}

const meuUsuario = criaUsuario("Eduardo");

/*
 Usamos a função getNome para pegar o nome no objeto e setNome para atribuir o valor ao nome no objeto
*/

////// CLASSES //////

class Utilitarios {
  construtor() {
    this.texto = "";
  }

  getTexto = () => this.texto;
  setTexto = (texto) => {
    this.texto = texto;
    return this;
  };

  maiusculo = () => {
    this.texto = this.texto.toUpperCase();
  };
  reveter = () => {
    this.texto = this.texto.split("").reverse().join("");
    return this;
  };
}

const _utilitarios = new Utilitarios();
let texto = _utilitarios.setTexto("Eduardo").reverter().maiusculo().getTexto(); // Chain metodos
