//SLICE => retorna um novo array "fatiando" o array de acordo com o ínicio e o fim

const vetor = [1,2,3,4,5];

console.log(vetor.slice(0,2)); //[1,2]

console.log(vetor.slice(2)); //pega a partir da posicao 2, incluindo a posicao 2
//[3,4,5]

console.log(vetor.slice(-1)); //[5]

console.log(vetor.slice(-3)); //[3,4,5]
