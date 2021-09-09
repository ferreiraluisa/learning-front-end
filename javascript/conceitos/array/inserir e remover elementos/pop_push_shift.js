//inserir e remover elementos:
//PUSH => adiciona um ou mais elementos no final do array e retorna o tamanho do novo array
const frutas = ['laranja','melancia','jabuticaba'];
let frutasLenght = frutas.push('acerola');

console.log(frutasLenght); //4

//POP => remove o último elemento do array e retorna o elemento removido
let removedItem = frutas.pop('laranja');

//UNSHIFT => adicionar um ou mais elementos  no ínicio do array e retorna o tamanho do novo array
frutasLenght = frutas.unshift(`laranja`);
console.log(frutasLenght); //4

//SHIFT=>remove o primeiro elemento do array e retorna o elemento removido;
removedItem = frutas.shift();
console.log(removedItem); //laranja