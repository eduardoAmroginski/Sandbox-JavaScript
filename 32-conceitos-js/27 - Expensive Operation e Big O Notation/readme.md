# 27 - Expensive Operation e Big O Notation

## Expensive Operation

## Big O Notation

Em suma, o `Big O Notation` é uma expressão matemática representando o quanto uma operação pode ser custosa
em termos de quanto tempo ela demora para ser executada com uma determinada entrada de dados.
A letra `O` vem de `ordem de` por que o crescimento de uma operação é também chamada de ordem de uma função.
Ele recebe este nome de `Big O` para representar o pior caso de complexidade de execução de uma determinada operação.
Na prática, se usa Big O Notation para classificar os algoritmos por como eles respondem a mudança dos dados que estão
entrando nessa função, o quão rápido essa função é executada, o quanto de memória é utilizado ou quantas iterações são
feitas para se chegar ao resultado.

### Notação de O(1) ou Notação de Ordem de 1

São algoritmos de tempo de execução constante. Significa que independente da complexidade, de quão maior pode ser o array
(exemplo), o tempo de execução da operação é sempre o mesmo e normalmente é usada uma operação só, no nosso exemplo, usa-se
um pop().

### Notação de O(n) ou Notação de Ordem de N

O `N` significa que não tem um numero certo de entradas e este seria um algoritmo de tempo `linear`, pois dependendo do
tamanho da entrada, podem haver mais operações já que o N representa o numero de entradas que não conhecemos. Por exemplo
para o nosso Array, digamos que ele queira achar um número dentro dele que possamos fazer um for para isso, e dar um console.log
na posição do item que estamos procurando (ver exemplo). O pior caso aqui, seria ele encontrar o valor na ultima posição ou não
encontrar o valor (esta sendo a mais custosa de todas), pois das duas formas ele percorreria por todo o array para encontrar ou
não o valor que procuramos. O melhor caso seria se o valor estivesse na primeira posição do nosso array.

### Notação de O(n)² ou Notação de Ordem de quadratica

Esse tipo de algoritmo demora o dobro de iterações em relação ao tamanho da entrada e cresce exponencialmente. Podemos reproduzir
isso, usando um Loop dentro de outro Loop.

### Notação de O(n log n) ou Notação de Ordem de N log de N

É um algoritmo de tempo logaritmico. Essa notação, seria mais ou menos a perfeição em termos de busca e ordenação de uma entrada
e são normalmente os mais eficientes na hora de lidar com coleções grandes com entradas grandes. Nesse tipo de algoritmo ao invés
de buscarmos valor por valor, quebramos a entrada em dois pedaços, normalmente pela metade, e assim podemos descartar uma boa parte
da entrada em cada interação por usar apenas a metade dela ou representando matematicamente, seria o log na base 2. Dessa forma,
seria possivel achar um valor dentro de uma coleção de 1 milhão de valores em até 20 iterações. O algoritmo mais famoso neste caso
é o `QuickSort` que pode ordenar uma entrada de modo bem eficiente ou encontrar um valor da mesma forma.
