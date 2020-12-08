function executarQualquerCoisa(fn){
  if (typeof fn === 'function') return fn();
  return console.log(fn);
}

//Arrow function
const fn = () => {
  console.log('callback function!')
}

function bomDia(){
  console.log('Bom dia!');
}

const boaTarde = function(){
  console.log('Boa tarde!');
}

// Passando uma função para outra função.
executarQualquerCoisa(fn);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);
executarQualquerCoisa(3);