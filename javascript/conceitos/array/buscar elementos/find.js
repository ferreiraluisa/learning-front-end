//FIND => retorna o primeiro item de um array que satisfaz a condição 
//FINDINDEX => retorna o índice do primeiro item de um array que satisfaz a condição
const arr = [1,2,3,4];

const firstGreaterThanTwo = arr.find(value => value>2);
const firstGreaterThanTwoIndex = arr.findIndex(value => value>2);

console.log(firstGreaterThanTwo);
console.log(firstGreaterThanTwoIndex);
