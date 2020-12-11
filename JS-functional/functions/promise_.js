/*
setTimeout(function() {
  console.log('Execuando callback......');

  setTimeout(function() {
    console.log('Execuando callback......');

    setTimeout(function(){
      console.log('Execuando callback......');

    }, 2000)
  }, 2000)
}, 2000);
*/

function esperarPor(tempo = 2000) {
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('Executando promise...');
    }, tempo);
  });
}

esperarPor(300)
  .then(texto => console.log(texto));