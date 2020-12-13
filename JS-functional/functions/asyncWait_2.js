function gerarNumerosEntre(min, max, numeroProibidos){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(parseInt(Math.random() * (max - min + 1)) + min);
    }, tempo);
  })
}