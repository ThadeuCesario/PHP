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
 * Lembre-se que no filter o retorno pode variar do tamanho original do array. 
 */
const produtosEmEstoque = carrinho.filter(qtdeMaiorQueZero).map(getNome);
console.log(produtosEmEstoque);

//------------------------

Array.prototype.meuFilter = function() {
  for (let i in this){
    console.log(this);
  }
}

const arrayTeste = [5, 10, 15, 23, 89, 1256];
arrayTeste.meuFilter();