# 9 - Fila de eventos e Pilha de eventos

O JS é uma linguagem de programação assíncrona e single-thread, significa que
o JS processa uma requisição por vez ou seja, cada coisa que ele faz, ele tem
que fazer sequencialmente. Com isso existem códigos que bloqueiam a execução,
por exemplo, estamos rodando um for que faz uma manipulação da DOM e esse for
demora 5 segundos para completar, se nesses 5 segundos o usuário entar clicar
em um botão, nada acontecerá, porque a thread já está executando este for.
Porém há uma forma do JS executar tarefas simultâneas.

Assíncrono:
Um exemplo de assíncrono é usar um Callback ou uma Promise. Por exemplo,
fazemos uma chamada HTTP e retornamos uma promessa. Podemos ter algo fora
desta chamada que vai continuar executando porque o JS passa na função que faz
a chamada, executa a chamada e enquanto não retorna nada, ele está livre para
fazer qualquer outra coisa que esteja no mesmo nível da chamada, que seja parente
da chamada. Desta forma, consegue executar qualquer outra coisa enquanto essa
chamada HTTP não foi finalizada. Por isso é muito comum usarmos Promises e no
retorno dessa Promise executarmos o resto.

Obs: Usar setTimeOut com 0 segundos, é uma péssima pratica para executar um código
após a fila de execução estar limpa, apenas para garantir que ele será executado
depois de todo o resto.
