# 13a - Factories

Uma Factorie é uma função que não é uma classe nem um construtor,
que retorna um novo objeto. No JavaScript, qualquer função pode retornar
um objeto e quando ela retorna sem utilizarmos a palavra chame `new`, então
ela é uma `Factorie`.
Então a Factorie funciona assim: criamos uma função que dentro dela criamos
um objeto, esse objeto vai funcionar como uma classe e nele colocamos o que
quisermos desde uma simples propriedade, que é apenas um valor, até um método
que seria uma função.
O nome Factorie é porque justamente como o nome diz, é uma fábrica e ela fabrica
novos objetos para nós, sempre que for chamada. Isso é muito melhor do que usar
o construtor por exemplo porque podemos esquecer de usar a palavra new no construtor
e com isso pode dar um erro silencioso que não quebrar a aplicação, mas vai nos dar
um erro, além de podermos nos confundir na hora de usar o `this` e ter problemas
com herança, por isso precisamos tomar muito cuidado na hora de usar o construtor.
