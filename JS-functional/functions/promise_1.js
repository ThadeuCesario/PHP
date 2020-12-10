/**
 * Promise é uma promessa, basicamente é algo que será resolvido no futuro.
 * 
 * Uma promise é uma function.
 * Quando criamos uma Promise, é retornado um array.
 * Quando criamos uma Promise, precisamos passar uma função como parâmetro. Porém a função que passamos como
 * parâmetro, também receberá uma função. Essa função que será chamada quando formos cumprir a promessa. 
 * Então quando criamos uma promise, passamos uma função como parâmetro que tem outra função que será chamada
 * quando a promessa for cumprida.
 */

 let a = 1;
 console.log(a);

 let p = new Promise(function(cumprirPromessa){
   cumprirPromessa(3);
 });
console.log(p);
console.log(typeof Promise);