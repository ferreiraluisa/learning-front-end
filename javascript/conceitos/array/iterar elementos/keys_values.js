//KEYS => retorna um array iterator que contém as chaves para cada elemento do array
//VALUES => retorna um array iterator que contém os valores de cada elemento do array
//ENTRIES => retorna um array iterator que contém as pares chave/valor para cada elemento do array

const arr = [1,2,3,4];

const arrIterator = arr.keys();
const arrIterator2 = arr.values();
const arrIterator3 = arr.entries();

console.log('keys');
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log('values');
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log('entries');
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
