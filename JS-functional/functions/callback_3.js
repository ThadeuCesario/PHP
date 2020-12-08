const nums = [1, 2, 3, 4, 5];

/**
 * Um map possui três parametros. 
 * Primeiro: Elemento atual
 * Segundo: índice atual
 * Terceiro: Array que estamos percorrendo
 */
const dobro = (n, i, a) => n * 2 + i + a.length;
console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const primeiraLetra = name => name.charAt(0);
console.log(nomes.map(primeiraLetra));

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 10, preco: 7.99 },
  { nome: '', qtde: 10, preco: 7.99 },
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
]