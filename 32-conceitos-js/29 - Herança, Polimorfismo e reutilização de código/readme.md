# 29 - Herança, Polimorfismo e reutilização de código

# Polimorfismo

É a habilidade de chamar o mesmo método em diferentes objetos. Então no caso das nossas
classes, é termos uma classe que tem um certo método, criar uma nova classe que vai
`herdar` essa classe com o método, e a partir dessa nova classe, podemos usar o método
que já está na classe pai, sem precisar escrever esse método novamente na classe filho.
Então polimorfismo, nos ajuda na `abstração` e `reutilização` de códigos, pois podemos
escrever um método que deve ficar na classe pai, nessa classe que todas as outras devem
herdar, e nas classes filhas dessa classe, não precisamos nos preocupar em escrever
novamente um certo método, apenas em escrever os métodos referentes a esta classe.
