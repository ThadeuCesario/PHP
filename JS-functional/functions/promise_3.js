function gerarNumerosEntre(min, max){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    resolve(parseInt(Math.random() * (max - min + 1)) + min);
  })
}

gerarNumerosEntre(1, 15).then(console.log);
