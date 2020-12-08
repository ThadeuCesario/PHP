function executarQualquerCoisa(fn){
  console.log(typeof fn);
  fn();
}

const fn = () => {
  console.log('callback function!')
}

executarQualquerCoisa(fn);