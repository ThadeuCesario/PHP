class Produto {
  constructor(nome, preco, desc = 0.15) {
    this._nome = nome;
    this.preco = preco;
    this.desc = desc;
  }

  /**
   * Quando colocamos o GET, podemos acessar essa função como sendo um atributo.
   */
  get precoFinal() {
    return this.preco * (1 - this.desc);
  }

  set mudarNome(newName){
    this._nome = newName
  }
}

const p1 = new Produto('Caneta', 1.50);
const p2 = new Produto('Geladeira', 20000.00);

console.log(p1);
console.log(`Verificando nome: ${p1.nome}`);
console.log(`Verificando preço com desconto: ${p1.precoFinal}`); 

console.log(p2);
console.log(`Verificando preço: ${p2.preco}`);
console.log(`Verificando preço com desconto: ${p2.precoFinal}`);