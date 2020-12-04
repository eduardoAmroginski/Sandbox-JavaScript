# 12 - DOM e Árvore de layout

## DOM (Document Object Model)

A DOM é criada pelo browser quando uma página é carregada e ela nada mais é
do que uma representação em forma de árvore com nós e folhas do HTML daquela
página. Então quando iniciamos uma página, o borwser pega o HTML e cria uma
árvore convertendo as tags em objetos e alinha cada elemento da mesma forma
que escrevemos. Cada objeto na DOM é chamado de `elemento`.
A DOM também disponibiliza métodos para que possamos manipula-la, por isso
é muito normal ouvirmos falar sobre manipular a DOM, quando por exemplo pegamos
o elemento pelo ID dele e mudamos o valor, o estilo, removemos ou adicionamos
outro elemento ou qualquer coisa através desse elemento, não estamos mudando o
HTML diretamente que foi escrito e que está no arquivo. Estamos sim, mudando o
objeto que foi criado a partir dele, e está numa certa posição da minha árvore.
