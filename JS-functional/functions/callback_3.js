const nums = [1, 2, 3, 4, 5];

/**
 * Um map possui três parametros. 
 * Primeiro: Elemento atual
 * Segundo: índice atual
 * Terceiro: Array que estamos percorrendo.
 */
const dobro = (n, i, a) => n * 2 + i + a.length;
console.log(nums.map(dobro));