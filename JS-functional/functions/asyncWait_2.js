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

async function gerarMegaSena(qtdeNumeros) {
  try{
    const numeros = [];
    for(let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    console.log(`Testando os numeros da mega sena ${numeros}`);
    return numeros
  } catch(err) {
    throw "Erro gerado";
  }

} 

gerarMegaSena(50)
  .then(console.log)
  .catch(console.log);