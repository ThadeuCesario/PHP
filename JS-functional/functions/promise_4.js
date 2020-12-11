function gerarNumerosEntre(min, max){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    setTimeout(function(){

    },)
  })
}

gerarNumerosEntre(1, 60)
  .then(num => num * 10)
  .then(numX10 => console.log(`O número gerado foi ${numX10}`));
