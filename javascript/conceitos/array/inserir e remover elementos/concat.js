//CONCAR => concatena um ou mais arrays retornando um novo array
const frutas = ['laranja', 'morango', 'uva'];
const salgados = ['coxinha', 'quibe','espetinho'];

//nao mexe nos arrays utilizados no merge
const alimentos = frutas.concat(salgados);
const alimentos2 = salgados.concat(frutas);

console.log(alimentos);
console.log(alimentos2);