# 24 - Promises

Uma `Promise` é basicamente o que o nome já diz, uma `promessa`. Então uma Promise, tem três estados:

1. `Pendentes`, quando estamos esperando um resultado positivo ou negativo.
2. `Realizada`, quando a promessa foi cumprida e recebemos o resultado.
3. `Rejeitada`, não retornou o que esperavamos.

Promises são `Assincronas`, isso quer dizer que o javascript não vai esperar a promise retornar o resultado
para executar o que está depois.
