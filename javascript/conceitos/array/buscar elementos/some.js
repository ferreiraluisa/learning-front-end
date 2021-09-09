//SOME => retorna um booleano verificando se pelo menos um item de um array satisfaz a condição


const arr = [1,3,3,4,3];

console.log(arr.some(value => value%2==0));
//true
console.log(arr.some(value => value>5));
//false
