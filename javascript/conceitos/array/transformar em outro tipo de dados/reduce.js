//REDUCE => retorna um novo tipo de dado iterando cada posição de um array  

const arr = [1,2,3,4,5];

const soma = arr.reduce((total,value) => total += value, 0);
//reduce((o que retorna,valor,index,array) => funcao), valor inicial da variavel que sera retornada)

console.log(soma);