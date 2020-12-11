/**
 * Promise é uma promessa, basicamente é algo que será resolvido no futuro.
 * 
 * Uma promise é uma function.
 * Quando criamos uma Promise, é retornado um array.
 * Quando criamos uma Promise, precisamos passar uma função como parâmetro. Porém a função que passamos como
 * parâmetro, também receberá uma função. Essa função que será chamada quando formos cumprir a promessa. 
 * Então quando criamos uma promise, passamos uma função como parâmetro que tem outra função que será chamada
 * quando a promessa for cumprida.
 * Para acessarmos a função que vamos executar, precisamos utilizar o método then. 
 * Um detalhe importante é que na função de promessa, podemos passar apenas um único parametro.
 * Podemos encadeader vários 'then' conforme a necessidade.
 */

 let a = 1;
 console.log(a);

 let p = new Promise(function(cumprirPromessa){
   //Só podemos passar um parâmetro para essa função.
   cumprirPromessa(['Thadeu', 'Karina']);
 });

 p.then(function(valor){
   console.log("acessando pelo then", valor);
   console.log("tipo preservado", typeof valor);
 });
 
console.log(typeof Promise);