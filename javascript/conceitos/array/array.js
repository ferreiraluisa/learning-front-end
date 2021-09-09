const arr = Array.of(1,2,3,4,5);
const arr2 = Array.of(1,2,'Luisa',3,'que maluco isso');

const arrEmpty = Array(3); //cria um array com tres posicoes vazias
const arrFull = Array(3,2); //arrFull = [3,2];

//array.from => crira uma nova instância de array a partir de um parâmetro array-like ou iterable object
const divs = document.querySelectorAll('div'); //nodeList
const arrayDivs = Array.from(divs);

