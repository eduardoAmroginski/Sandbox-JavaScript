# 16 - Prototype inheritance e prototype chain

Toda função tem uma propriedade chamada `prototype`, que por padrão, vem vazia e podemos adicionar propriedades a ela.
Basicamente um `Prototype` é realmente o protótipo daquela função e com isso podemos ter uma espécie de herança de um
objeto para o outro que é chamado de `Prototype Chain` ou `Cadeia de Protótipos` onde os protótipos de um objeto podem
ser passados para um outro como uma espécie de herança.
Quando se cria um objeto através de uma função construtora, o Prototype dessa função passa para o objeto criado, como
uma referência. Então sendo assim, conseguimos acessar por exemplo o prototype de um construtor de usuários através de
um novo usuário criado.
