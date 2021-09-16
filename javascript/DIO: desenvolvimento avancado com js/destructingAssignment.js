var frutas =  ['apple','banana','orange'];

var apple = frutas[0];
var banana = frutas[1];
var orange = frutas[2];

var [apple2, banana2, orange2] = frutas;

console.log(apple2,banana2,orange2);

var person = {
    name : 'luisa',
    age : 19
};

var { name } = person;
var { age : idade} = person;

console.log(name,idade);

name = 'Pedro';
idade = 24;

console.log(person, name, idade);