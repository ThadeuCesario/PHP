function exec(fn, a, b){
  return console.log(fn(a, b));
};
const exec = (fn, a, b) => console.log(fn(a, b));
const somarNoTerminal = (a, b) => a + b;
const subtrairNoTerminal = (a, b) => a - b;

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);