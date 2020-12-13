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

function gerarMegaSena(qtdeNumeros) {
  const numeros = [];
  for(let _ of Array(qtdeNumeros).fill()) {
    gerarNumerosEntre(1, 60, numeros).then((valor) => numeros.push(valor));
  }
  
  return numeros
} 

gerarNumerosEntre(1, 10, [1,2,4])
  .then(console.log)
  .catch(console.log)