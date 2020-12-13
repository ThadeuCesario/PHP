/**
 * Async e Await
 * 
 */

function esperarPor(tempo = 2000) {
  return new Promise(function(resolve){
    setTimeout(() => resolve(), tempo);
  });
}

esperarPor(2000)
  .then(() => console.log('Executando promise.....'))
  .then(esperarPor(2000))
  .then(() => console.log('Executando promise.....'))
  .then(esperarPor(2000))
  .then(() => console.log('Executando promise.....'));