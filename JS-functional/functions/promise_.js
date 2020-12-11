setTimeout(function() {
  console.log('Execuando callback......');

  setTimeout(function() {
    console.log('Execuando callback......');

    setTimeout(function(){
      console.log('Execuando callback......');

    }, 2000)
  }, 2000)
}, 2000);

function esperarPor(tempo = 2000) {
  return Promise(function)
}