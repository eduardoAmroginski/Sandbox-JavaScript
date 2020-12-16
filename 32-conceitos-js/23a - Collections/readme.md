# 23a - Collections

`Coleções` no JS nada mais são do que objetos interaveis. E para isso, temos dois construtores que nos
permitem criar essas coleções, o `set` e o `map`. Esses novos tipos de objetos foram criados para suprir
algumas necessidades especificas que os objetos comuns não atendem, como por exemplo a falta de um método
para interar por eles, uma forma de evitar colisões entre propriedades e também uma forma de esconder as
propriedades para não serem acessadas usando uma chave da propriedade.

## Set

É uma coleção de valores, é mutável e tem seus próprios métodos para manipular a inserção e leitura de
dados. É basicamente um `array`, mas o que ele tem de parecido com o array, também tem de diferenças.
Para começar, um set `não permite ter dados repetidos`. Além disso, o Set deixa tudo organizado de uma
forma que prioriza buscarmos dados nele, mas com o set, não temos indexação de dados.

## Map

O `Map` funciona basicamente como o `Set`, porém com a diferença de ser `Chave : valor` e não tipo um
Array, ele contém basicamente os mesmos métodos que o Set com exceção do método que insere os dados é
o `.set()` e não o `.add()`
