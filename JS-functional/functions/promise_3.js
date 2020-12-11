function gerarNumerosEntre(min, max){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    const aleatorio = Math.random * (max - min) 
    resolve(7)
  })
}

gerarNumerosEntre(15, 10).then(console.log);
