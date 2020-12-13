/**
 * Async e Await
 * Basicamente o async await força o aguardar a finalização de um determinado trecho de código.
 * Sempre que temos uma função que retorna um Promise, podemos aplicar o await.
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


async function executar() {
  esperarPor(2000);
  console.log('Async/Await 1...');
}

executar();