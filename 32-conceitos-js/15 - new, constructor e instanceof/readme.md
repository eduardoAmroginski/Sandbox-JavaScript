# 15 - new, constructor e instanceof

## New

Basicamente quatro coisas acontecem quando usamos o `new`:

1. Ele cria o objeto vazio com o contexto de this onde será o escopo do nosso novo objeto.
2. Então ele executa o corpo dessa função.
3. Depois, nesse objeto novo ele cria uma nova propriedade chamada `__proto__` que aponta para as propriedades `Prototype` da função construtora que foi utilizada para criar esse novo objeto.
4. E Finalmente ele adiciona um `return this` no final da função construtora para que o objeto que estamos criando, receba o this que foi criado na função construtora

## Constructors (Construtores)

A principal função deles é implementar códigos que podem ser reutilizados na criação de novos objetos.
Além dos construtores que podemos criar, o JS já vem com construtores próprios embutidos, como o construtor de String, o Boolean e o Number.
Qualquer função pode ser usada como construtora, desde que seja utilizado o `new` antes de atribuir a uma váriavel. É uma convenção usar
a primeira letra maiuscula quando se trata de um construtor. Não podemos esquecer de utilizar o `new`, se não estamos atribuindo a uma variavel
uma referencia a uma função construtora, qualquer mudança nessa variavel, automaticamente altera a nossa função construtora já que é passada a
referencia dela.

## Instanceof

Usamos para checar se uma variavel foi ou não criada a partir de um construtor podendo utilizar o operador `instanceof` para comparar.
