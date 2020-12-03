IIFE e Namespaces

IIFE:

IIFEs são imediately invoke function expression, ou seja, expressão de função
imediatamente invocada. A função é executada imediatamente, sendo executada
apenas uma vez, e não poderá ser executada de novo enquanto o código não rodar
novamente.
IIFEs eram utilizadas para criar namespaces, criar algo parecido com o que temos
hoje nos módulos.

Namespaces:
O Namespace é um pedaço de código que serve para organizar o código em pequenos grupos, podendo ter métodos dentro dele.
Dessa forma, servindo para evitar colisão com outros métodos de outras bibliotecas por
exemplo, se temos uma biblioteca importada que tem o método "incrementar", ocorreria
um problema caso nosso método incrementar não estivesse fazendo parte do escopo do
nosso Namespace "dados".
