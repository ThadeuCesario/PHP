/**
 * Async e Await
 * Basicamente o async await força o ag
 */

function esperarPor(tempo = 2000) {
  return new Promise(function(resolve){
    setTimeout(() => resolve(), tempo);
  });
}

esperarPor(2000)
  .then(() => console.log('Executando promise 1.....'))
  .then(esperarPor)
  .then(() => console.log('Executando promise 2.....'))
  .then(esperarPor)
  .then(() => console.log('Executando promise 3.....'));