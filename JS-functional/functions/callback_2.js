/**
 * Estaremos utilizando uma biblioteca do próprio Node chamado FileSystem, para realizarmos a leitura de
 * um arquivo.
 * Também utilizaremos o path, para captura o caminho de um arquivo.
 * 
 * O join() serve para concatenar caminhos, porque sabemos que para cada sistema operacional pode variar
 * um pouco, principalmente o sentido das barras.
 */

const fs = require('fs');
const path = require('path');

const caminho = path.join(__)