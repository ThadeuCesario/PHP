// Arrow function
const felizNatal = () => console.log('Feliz Natal');
felizNatal();

const saudacao = (nome) => `Fala ${nome}!!`;
console.log(saudacao('Thadeu')); 

const somar = array => {
  let tota = 0;
  for (let i of array) {
    tota += i;
  }
  return tota;
}