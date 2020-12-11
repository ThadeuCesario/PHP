function gerarNumerosEntre(min, max, tempo = 2000){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(parseInt(Math.random() * (max - min + 1)) + min);
    }, tempo);
  })
}

gerarNumerosEntre(1, 60)
  .then(num => num * 10)
  .then(numX10 => console.log(`O número gerado foi ${numX10}`));
