/**
 * Estaremos utilizando uma biblioteca do próprio Node chamado FileSystem, para realizarmos a leitura de
 * um arquivo.
 * Também utilizaremos o path, para captura o caminho de um arquivo.
 * 
 * O join() serve para concatenar caminhos, porque sabemos que para cada sistema operacional pode variar
 * um pouco, principalmente o sentido das barras.
 * O __dirname, captura o caminho atual do arquivo que ele está sendo referenciado.
 * 
 * Veja que estamos utilizando o readFile para realizarmos a leitura de nosso arquivo txt.
 * Nesse método, podemos passar 3 parametros:
 * 1 - O caminho do arquivo para ser lido
 * 2 - Opções de manipulação do arquivo
 * 3 - Uma função callback 
 */

const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const exibirConteudo = (error, data) => {
  return console.log(data.toString());
};

fs.readFile(caminho, {}, exibirConteudo);
fs.readFile(caminho, (_, conteudo))