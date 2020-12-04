# 15 - new, constructor e instanceof

## New

Basicamente quatro coisas acontecem quando usamos o `new`:

1. Ele cria o objeto vazio com o contexto de this onde será o escopo do nosso novo objeto.
2. Então ele executa o corpo dessa função.
3. Depois, nesse objeto novo ele cria uma nova propriedade chamada `__proto__` que aponta para as propriedades `Prototype` da função construtora que foi utilizada para criar esse novo objeto.
4. E Finalmente ele adiciona um `return this` no final da função construtora para que o objeto que estamos criando, receba o this que foi criado na função construtora
