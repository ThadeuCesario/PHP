function executarQualquerCoisa(fn){
  fn();
}



executarQualquerCoisa(function fn() {
  console.log('callback function!');
});