# 14 - This, call, apply e bind

## This

O `this` representa o atual contexto onde ele está sendo utilizado,
ele referência esse contexto.
Dentro de uma função, o this pode representar contextos diferentes.

## Call, Apply e Bind

São metodos usados para controlar a invocação de uma função.
`Call` e `Apply` podem ser utilizados para invocar uma função imediatamente
o `Bind` pode ser utilizado para invocar uma função mais tarde.

O `Call` permite invocar uma função porém alterando o contexto de `this` dessa
função passando qual contexto queremos na execução dele.
A unica diferença entre o `Apply` e o `Call` é que o `Apply` aceita os argumentos
da função em um array, sendo assim, não precisa quebrar eles e passar um por um, já
No caso do `Call`, precisamos separar cada argumento por `vingulas`.

O `Bind`, cria uma nova função a partir de outra função. A unica coisa que precisamos
fazer é passar o contexto do `this` que queremos que ele receba. Assim podemos utilizar
o bind quando quisermos, quando for mais conveninte para nós, diferente do `Apply` e do
`Call` que são executados imediatamente.
