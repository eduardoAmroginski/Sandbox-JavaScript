# 31b - Currying, Compose e pipe

## Currying

Diferente de aplicações parciais, que visam fixar parte do argumento de uma função em outras funções,
o `Currying` transforma uma função com multiplos argumentos em uma série de execuções de funções, ele
é bem parecido com as aplicações parciais, a maior diferença é que não temos um valor pré estabelecido.

## Compose

O `Compose` é simplesmente compormos uma função usando outras funções como argumento, por exemplo,
digamos que temos uma função que incrementa e outra que dobra o valor e temos que usar ambas para achar
nosso resultado.

## Pipe

O `Pipe` seria uma forma de escrever o `Compose` mas usando uma outra função que funciona como intermediária,
recebendo as funções que devem ser executadas e os argumentos passados a elas. O nome Pipe se deve ao fato de
que é algo que vai descendo como se fosse por um cano, até chegar no final apenas o resultado esperado.
