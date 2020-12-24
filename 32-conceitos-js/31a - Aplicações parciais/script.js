function lista(juncao, ...itens) {
  const separadoPorVirgula = itens.slice(0, -1).join(", ");
  const ultimoitem = itens.pop();
  return `${separadoPorVirgula} ${juncao} ${ultimoitem}`;
}

//Midware
function parcial(funcao, juncao) {
  return (...itens) => {
    return funcao(juncao, ...itens);
  };
}

const listaE = parcial(lista, "e");
const listaOu = parcial(lista, "ou");
const listaTalvez = parcial(lista, "talvez");

console.log(listaE("azul", "amarelo", "verde", "vermelho"));
console.log(listaOu("azul", "amarelo", "verde", "vermelho"));
console.log(listaTalvez("azul", "amarelo", "verde", "vermelho"));

// console.log(lista("e", "azul", "amarelo", "verde", "vermelho"));
