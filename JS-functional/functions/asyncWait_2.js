function gerarNumerosEntre(min, max, numeroProibidos){
  if(min > max) [min, max] = [max, min];
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      if(numeroProibidos.includes(aleatorio)) reject('Número repetido.');
      else resolve(aleatorio);
    });
  })
}

gerarNumerosEntre(1, 5, [1,2,4])
  .then()
  