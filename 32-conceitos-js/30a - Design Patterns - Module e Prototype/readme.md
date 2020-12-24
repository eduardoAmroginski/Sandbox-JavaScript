# 30a - Design Patterns - Module e Prototype

## Design Patterns

`Design Patterns` ou `Padrões de Design` são formas criadas para resolver problemas que são recorrentes.
Não são frameworks nem bibliotecas, mas um modo de escrever seus códigos para evitar certos problemas que
podem aparecer ou que já aparecem, e por problema, entenda que não é necessariamente um problema de programação
em si, pode ser organização de código, manutenção, legibilidade e várias outras coisas. Os padrões mais usados
no JS são `Modulo`, `Prototype`, `Observer` e `Singleton`.

## Modulo

É muito comum nos perdermos em códigos, seja or falta de organização ou porque ele escalonou e virou um arquivo
com mil, 2 mil ou 5 mil linhas de código, podendo acarretar uma manutenção mais dificil, código duplicado,
nomeação de métodos e variáves mais complicadas que possam estar colidindo e outros problemas.
`Módulos` tem como objetivo deixar o código separado em um arquivo diferente para ser utilizador em outros
arquivos. Com isso, melhora a legibilidade e manutenibilidade do nosso código, além de poder fazer encapsulamento
e variáveis privadas que não devem ser expostas a outro arquivo que está utilizando este módulo.

## Prototype

O padrão `Prototype` ou `Prototipo` resolve basicamente o mesmo problema do padrão de módulos porém de uma forma diferente.
A ideia é criar um esqueleto em um objeto e a partir dele, instanciar ou criar novos objetos contendo o mesmo prototype.
Aqui utilizaremos a herança do Prototype, que é diferente da herança que é utilizada em classes, vide exemplo.
