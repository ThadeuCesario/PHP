/**
 * Para uma promisse podemos passar uma função de resolve e uma função de reject.
 * A função de resolve é executada quando a promisse é chamada e executado corretamente. Mas caso ocorra algum erro, a função de reject 
 * então que será executada.
 */

function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
      // Gerar erro
      reject('Ocorreu um erro!');
    } else {
      resolve(valor);
    }
  })
}

funcionarOuNao('Hello world!', 0.1).then()