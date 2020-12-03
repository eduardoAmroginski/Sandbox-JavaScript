# 6 - Escopo global, de função, do bloco e léxico

O Escopo seria a sensibilidade das variáveis, funções e objetos em uma
parte do código enquanto ele está sendo executado. Em outras palavras,
o escolpo determina a visibilidade das variáveis e outros recursos nas
áreas do código ou nos blocos de código.

var: são variaveis criadas que respeitam o escopo de uma função, ou seja,
se ele for criado dentro de uma função, ele só estará disponivel dentro
dela. Fora de funções, pertence ao escopo global e pode ser acessado
de qualquer lugar.

let e const: só estão disponiveis dentro de um bloco. Ou seja, só
estão disponiveis dentro de um abrir e fechar as chaves de uma função,
um metodo, uma classe, um if. Só existem dentro deste par de chaves.

Escopo Léxico:
Significa que num cenário onde temos funções alinhadas ou seja, funções
dentro de funções, os recursos e variáveis das funções mais acima estão
disponiveis nas funções que estão mais a dentro.

Escopo Global:
Quando começamos a escrever o nosso código, já estamos no Escopo Global.
O escopo global, é o objeto window do nosso navegador, da nossa janela.
Tudo o que é criado ou declarado no escopo global está disponivel na totalidade
do nosso código porque não tem algo estar mais acima do que isso, por isso é
possivel utilizar qualquer variável criada em qualquer função ou método dentro
do nosso escopo global. Com isso, se alterarmos uma variável global dentro de
alguma função, ela altera para a aplicação toda.

Escopo de Função:
O escopo de função é basicamente o que vimos no escopo léxico, o que criarmos
dentro de uma função, só estará disponivel dentro dela se tentarmos acessar ela fora,
ela não estará disponivel. Isso serve tanto para uma var, let ou const

Escopo de Bloco:
Aqui é onde o let e o const entram.
Significa que algo declarado só está disponivel dentro das chaves na qual foi declarado
e também nas aninhadas dentro dela.

HOISTING:
Qualquer declaração de variavel dentro de qualquer pedaço do código. Na nossa função,
ele pega a declaração da variavel (teste2), não imporantando onde ela esteja e joga
para o começo, por isso essa variável fica disponivel em qualquer ponto dentro do escopo
dessa função.
