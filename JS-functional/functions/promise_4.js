function gerarNumerosEntre(min, max, tempo = 2000){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(parseInt(Math.random() * (max - min + 1)) + min);
    }, tempo);
  })
}

function gerarVariosNumeros() {
  return new Promise.all([
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 2130, 2500),
    gerarNumerosEntre(1, 59989898, 150),
  ]);
}

gerarVariosNumeros().then(console.log)