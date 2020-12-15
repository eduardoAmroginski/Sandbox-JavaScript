// Mesclando objetos (mantemos a referencia do objeto "alvo")
// const alvo = { a: 1, b: 2 };
// const dados = { b: 5, c: 4 };
// const resultado = Object.assign(alvo, dados);
// console.log(resultado); // Teremos como resultado {a: 1, b: 5, c: 4}. O b: 2 foi substituido pelo b: 5,
//                         porque quando temos uma propriedade repetida, será mantida a propriedade presente no objeto passado mais perto do final,
//                         que no nosso caso é o objeto dados.
// Se alterarmos um dado de resultado, alteramos também o dado o objeto alvo, pois ele é dado como referencia

// Criando um objeto totalmente novo (não temos a referencia de objeto "alvo")
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const resultado = Object.assign({}, obj1, obj2);
console.log(resultado);
// Se alterarmos um dado do objeto criado (resultado), não alteraremos obj1 nem obj2 pois o objeto criado é completamente novo
