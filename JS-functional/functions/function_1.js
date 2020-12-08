let a = 4;
console.log(a);

//Function declaration
function bomDia(){
  console.log('Bom dia!');
}

bomDia();

//Function Expression
const boaTarde = function(){
  console.log('Boa tarde!');
}

boaTarde();

function somar(a, b){
  return a + b;
}
const resultado = somar(5, 5);
console.log(resultado);