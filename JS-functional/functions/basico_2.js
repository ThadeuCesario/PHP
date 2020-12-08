function executarQualquerCoisa(fn){
  fn();
}

function fn() {
  console.log('callback function!');
}

const fn = () => {
  console.log('callback function!')
}

executarQualquerCoisa();