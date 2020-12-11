function gerarNumerosEntre(min, max){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    resolve(parseInt(Math.random * (max - min + 1)) + min);
  })
}

gerarNumerosEntre(15, 10).then(console.log);
