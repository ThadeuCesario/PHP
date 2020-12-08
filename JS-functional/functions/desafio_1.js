// somar(3)(4)(5)

function somar(a){
  return function(b){
    return function(c){
      return a + b + c;
    }
  }
}

console.log(somar(1)(1)(1));

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)