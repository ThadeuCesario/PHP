// Arrow function
const felizNatal = () => console.log('Feliz Natal');
felizNatal();

const saudacao = (nome) => `Fala ${nome}!!`;
console.log(saudacao('Thadeu')); 

const somar = numeros => {
  let tota = 0;
  for (let i of numeros) {
    tota += i;
  }
  return tota;
}
console.log(somar([1,2,3,5]));