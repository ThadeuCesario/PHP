function gerarNumerosEntre(min, max){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    const aleatorio = parseInt(Math.random * (max - min + 1)) + min;
    resolve(aleatorio)
  })
}

gerarNumerosEntre(15, 10).then(console.log);
