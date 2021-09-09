//FLAT => Retorna um novo array com todos os elementos de um sub-array concatenados de forma recusrsiva de acordo com a profundidade especificada(depth)

const arr = [1,2, [3,4,[5,6]]];

console.log(arr.flat()); //por padrao é 1

console.log(arr.flat(2));
