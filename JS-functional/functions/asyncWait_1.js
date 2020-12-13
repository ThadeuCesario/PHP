/**
 * Async e Await
 * Basicamente o async await força o aguardar a finalização de um determinado trecho de código.
 * Sempre que temos uma função que retorna um Promise, podemos aplicar o await.
 * 
 * Quando marcamos uma função com async, temos a possibilidade de aguardar que uma promise seja executada dentro dela,
 * sem necessariamente utilizar o método then. 
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
  await esperarPor(1500);
  console.log('Async/Await 1...');

  await esperarPor(1500);
  console.log('Async/Await 2...');

  await esperarPor(1500);
  console.log('Async/Await 3...');
}

function retornarValor() {
  
}

executar();