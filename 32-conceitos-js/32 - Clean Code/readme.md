# 32 - Clean Code

`Clean Code` é escrever o seu código pensando ou no "você" do futuro que terá que dar manutenção
ou mesmo seus colegas de trabalho, não pensando só na máquina só em rodar mais rápido ou atingir o
menor número de código possivel, linhas de código etc. É pensar no seu `time` e em `você`, ou seja,
seu código deve ser de fácil entendimento para humanos.

## Variáveis

O nome de uma variável tem que dar contexto para ela e indicar para que ela serve

## Funções

Para as funções, podemos seguir a mesma regra das variáveis, tem que indicar o que faz. Porém uma função
deve fazer apenas uma coisa, realizar apenas uma atividade.
Devemos tentar evitar uma lista grande de argumentos sendo passados para a função, o ideal é ter apenas um
argumento, dois argumentos é até aceito, mais do que isso é considerado ruim. Então ao invés de soltarmos
todos os argumentos na declaração da função, passemos um objeto contendo todos eles.
É também interessante criar um comentário de bloco, explicando oque uma váriavel ou uma função faz, o que
recebe por parametro e também o que retorna.

## Objetos

No caso dos Objetos, é interessante não deixar os usuários (os que são desenvolvedores) utilizarem as propriedades
diretamente. Sendo assim, nós criamos `Getters` e `Setters`, para retornar e alterar propriedades.

## Classes

A primeira dica é usar Classes da forma que escrevemos no `ES6` já que temos suporte em todos os browsers modernos,
use sempre classes da forma mais moderna de se escrever. Outra dica é criar um `Chain` dos seus métodos para deixar
seu código menos verboso e melhorar a legibilidade.
