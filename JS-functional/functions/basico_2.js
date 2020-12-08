function executarQualquerCoisa(fn){
  fn();
}

const fn = () => {
  console.log('callback function!')
}

executarQualquerCoisa(fn);