# 19a - Pure functions (funções puras) e side effects (efeitos colaterais)

## Programação funcional

Resumindo a programação funcional é um paradigma onde criamos diversas funções puras
e elas evitam compartilhar estado, dados mutáveis e efeitos colaterais. Por ser um outro paradigma
não significa que ele é o inverso do orientado a objetos.

## Pure functions

É uma função deterministica, ou seja, é uma função que ao receber os mesmos tipos de dados ela vai
sempre retornar os mesmos tipos de valores. Ela depende apenas dos argumentos que recebe para produzir
o resultado.
Pure functions não tem `efeitos colaterais`, por efeitos colaterais, entendemos que ela não muda nada
que possa ser percebido pela aplicação inteira.
Uma das vantagens de se usar `Pure functions` é `legibilidade`, pois não causam efeitos colaterais,
elas são deterministicas sendo assim, são melhores de testar, pois fazem uma coisa só, dessa forma,
para testarmos, é só chamar ela de qualquer lugar e passar os argumentos necessários. E também é
otima para reuso de código, pois podemos ter um serviço, um módulo separado contendo só as funções, e
importar ela em qualquer lugar para ser utilizado.
