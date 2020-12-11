const fs = require('fs');
const path = require('path');

function readFile(caminho) {
  return new Promise(function(resolve){
    resolve(3)
  })
}

const caminho = path.join(__dirname, 'dados.txt');
console.log(caminho);

readFile(caminho).then(valor => console.log(valor));