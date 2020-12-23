# 26b - Data Structures - Linked list e Tree

## Linked list (Lista vinculada ou Lista ligada)

Uma `Linked List` se comporta de uma forma parecida com o Array ao guardar dados em sequencia,
porém invés de indexação, uma lista guarda ponteiros para os próximos itens da sequencia. Então
pensemos que é um objeto que criamos e esse objeto tem um valor dele e uma outra propriedade que
tem nesse objeto tem referencia para o próximo valor. O primeiro valor é chamado de cabeça e o
ultimo é chamado de cauda e nós sempre começamos a percorrer pela cabeça até chegar à cauda e vemos
e vemos que não existe mais nós depois.
Também é possivel ter uma lista dupla, que nós além de guardarmos os dados do próximo, guardamos também
do anterior. Uma lista tem inserção e exclusão de itens em tempo constante, isso quer dizer que quando
excluimos ou inserimos um nó, só é necessário pegar a referencia do nó que está na frente do nó que está
sendo excluido e atribuir ao nó anterior dele. Em um Array quando o nó é excluido, é preciso reindexar todos
os valores à frente, com isso num array com muitos valores, a operação é muito mais custosa.
Uma Linked List, pode ser usada como uma pilha ou como uma fila. No caso da pilha, retirariamos sempre a cabeça
da lista enquanto a fila adicionaria na cabeça e removeria a cauda.

[Exemplo de Linked List](https://codepen.io/thonly/pen/QqRVJX)

## Tree

As `Trees` são como listas porém um nó pode ter quantos filhos ele quiser mas só pode ter um pai. Um bom exemplo
disso, é a DOM do JavaScript. O caso mais comum para `Árvores` e `Árvores Binárias` é a pesquisa, que é uma estrutura
onde cada nó pode ter apenas dois filhos, onde o valor da esquerda é menor do que o valor da direita. E dentro de cada
nó, isso vai se repetindo. Com isso, podemos realizar uma busca rápida porque ao ver que o valor é maior ou menor que o
outro, já eliminamos, metade dos nossos resultados de busca.

[Exemplo de Tree](https://codepen.io/thonly/pen/qVWOpM)
