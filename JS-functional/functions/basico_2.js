function bomDia(){
  console.log('Bom dia!');
}

function boaTarde(){
  console.log('Boa tarde!');
}

function executarQualquerCoisa(fn){
  console.log(typeof fn);
  fn();
}

const fn = () => {
  console.log('callback function!')
}

executarQualquerCoisa(fn);