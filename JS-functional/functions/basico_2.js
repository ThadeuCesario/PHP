function executarQualquerCoisa(fn){
  console.log(typeof fn);
  fn();
}

const fn = () => {
  console.log('callback function!')
}

function bomDia(){
  console.log('Bom dia!');
}

const boaTarde = function(){
  console.log('Boa tarde!');
}

executarQualquerCoisa(fn);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);