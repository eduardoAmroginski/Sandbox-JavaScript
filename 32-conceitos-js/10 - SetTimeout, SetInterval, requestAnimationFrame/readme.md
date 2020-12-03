# 10 - SetTimeout, SetInterval, requestAnimationFrame

## SetTimeout

Serve para executar um código apenas uma vez depois de um determinado tempo.
O setTimeout recebe um `Callback` como primeiro parametro que seria uma função
a ser executada e depois como segundo parâmetro, ele recebe o tempo em milissegundos.
O setTimeout devolve um ID que pode ser usado para cancela-lo usando o ClearTimeout.

## SetInterval

O SetInterval executa o mesmo código repetidamente no intervalo de tempo que continua
executando até ser cancelado. A primeira execução do SetInterval não é imediata, ele é
executado depois do tempo que foi passado no parâmetro e então ele se repete.
Assim como o setTimeout, o SetInterval também em uma forma de ser cancelado, usando a
função clearInverval(), passando como parametro o setInterval que desejamos que seja
cancelado.

## requestAnimationFrame

Ele executa um método toda vez que o browser está apto a fazer o re-paint da tela, quando
isto for acontecer, o requestAnimationFrame executa novamente.
Para que o requestAnimationFrame funcione, ele precisa ser executado recursivamente.
Para cancelar o requestAnimationFrame, usamos a função cancelAnimationFrame(), passando
como parametro um ID do requestAnimationFrame.
