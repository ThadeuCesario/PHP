setTimeout(function() {
  console.log('Execuando callback......');
  setTimeout(function() {
    console.log('Execuando callback......');
    setTimeout(function(){
      
    })
  }, 2000)
}, 2000);