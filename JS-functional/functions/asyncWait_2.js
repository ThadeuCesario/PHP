function gerarNumerosEntre(min, max, numeroProibidos){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      if(numeroProibidos.includes(aleatorio)) reject('Número repetido.');
    });
  })
}