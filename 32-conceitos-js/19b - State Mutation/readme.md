# 19b - State Mutation

`Imutabilidade` ou `Mutação de Estado` (State Mutation), no JS sabemos que atribuir um valor funciona de duas formas, para tipos
primários nós passamos o valor dele mesmo e para objetos passamos a referencia, então os tipos de referencia quando atribuimos um
valor nele, o valor é alterado para qualquer outra variável que aponte para esse espaço na memória onde está o objeto, tornando ele
`mutável`, já em um tipo primário, quando passamos um valor dele para outra váriavel e depois mudamos o valor, não afetará a variável
que recebeu um valor por isso ele é imutável. Tudo além de tipos primários é `mutável`.

## Por quê é importante usar imutabilidade?:

Imutabilidade serve para prevenir problemas de concorrencia, como por exemplo, fazemos uma chamada HTTP para entregar alguns dados mas
no meio dessa chamada alguns valores do objeto mudaram e devem ser usados em outra parte do código e quando a chamada completar, e alterar
os dados novamente, a outra parte do código vai utilizar os dados da chamada e não os dados que foram salvos no meio do caminho. Outro
grande motivo, é para evitar efeitos colaterais.
