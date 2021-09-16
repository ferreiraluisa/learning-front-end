// tem a mesma escrita que o restOperator mas possui uma função diferente
var arr = [0,1,2,3,4];

function logArr(a,b,c){
    console.log(a,b,c);
}

logArr(...arr);

var arr2 = [...arr, 5,6,7,8,9];
console.log(arr2);
var arrCLone = [...arr]; //pode usar para clonar um array ou um objeto(shadow clone) !
console.log(arrCLone);
//o spread operator pode ser usado em strings, arrays, objects e objetos iteráveis

const person = {
    name : 'Luisa',
    lastName : 'Ferreira',
    age: 19
};
const personWithFullName = {
    ...person, //só pode utilizar o spread para construir novos OBJETOS
    fullName : person.name +' '+person.lastName
};

console.log(personWithFullName)