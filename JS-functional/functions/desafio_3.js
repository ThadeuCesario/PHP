const fs = require('fs');
const path = require('path');

function readFile(caminho) {
  return new Promise(function(resolve){
    console
    resolve(caminho)
  })
}

const caminho = path.join(__dirname, 'dados.txt');

readFile(caminho)
  .then(valor => console.log(valor));