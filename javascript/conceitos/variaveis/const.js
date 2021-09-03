const nome = 'Luisa';

//NAO podemos alterar o valor
nome = 'Luisa';

const user = {
    nome: 'Luisa'
};
//Mas se for um objeto podemos mudar suas propriedades
user.nome = 'Pedro'
//NAO podemos fazer o objeto "apontar" para outro lugar, ou seja, nao posso reatribuir um objeto
user = {
    nome : 'Luisa'
};

const persons = ['Luisa', 'Pedro', 'Luca'];
//podemos adicionar um novo item
persons.push('Manu');
console.log(persons);
//podemos remover um item
persons.shift();
console.log(persons);
//podemos alterar diretamente
persons[1] = 'Joao';

console.log(persons);

