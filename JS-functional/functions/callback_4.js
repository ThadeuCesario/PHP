const carrinho = [
  {nome: 'Caneta', qtde: 1000, preco: 7.99},
  {nome: 'Impressora', qtde: 0, preco: 649.50},
  {nome: 'Caderno', qtde: 4, preco: 27.10},
  {nome: 'Lapis', qtde: 3, preco: 5.82},
  {nome: 'Tesoura', qtde: 1, preco: 19.20},
];

const qtdeMaiorQueZero = item => item.qtde > 0;
const qtdeMaiorIgualAZero = item => item.qtde >= 0;
const qtdeMuitoGrande = item => item.qtde >= 1000;
const getNome = item => item.nome;

/**
 * Veja que podemos encadear funções filter, map e reduce.
 */
const produtosEmEstoque = carrinho.filter(qtdeMaiorIgualAZero).map(getNome);
console.log(produtosEmEstoque);