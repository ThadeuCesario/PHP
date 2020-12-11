setTimeout(function() {
  console.log('Execuando callback......');
  setTimeout(function() {
    console.log('Execuando callback......');
    setTimeout(function(){
      console.log('Execuando callback......');
    },)
  }, 2000)
}, 2000);