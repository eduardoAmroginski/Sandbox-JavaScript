# 17a - Object.create

O método `create` aceita dois argumentos sendo o segundo opcional.

1. O primeiro argumento é o `Prototype` novo objeto irá herdar, então precisamos passar o prototype de algum objeto para ele.
2. O segundo são as propriedades desse objeto porém elas são propriedades conhecidas como `Propriedades descritoras`

## Propriedades descritoras

Quando uma propriedade que estamos passando recebe um objeto com as propriedades dela (vide exemplo Propriedades Descritoras),
são conhecidas como `Propriedades descritoras` pois estamos descrevendo como aquela propriedade deve se comportar. Existem
dois tipos de descritoras `Descritoras de dados`, como as propriedades `descricaoPadrao` e `cor`, e as `Descritoras assessoras`,
como a propriedade `descricao`.
`Descritoras de dados` basicamente descrevem o valor. Já as `Descritoras assessoras usam` usam `getters` e `setters` para lidar
com um dado concreto, possibilitando manipular o dado antes de exibir ou de salvar.
