let user = {
    name : 'Luisa',
    lastName : 'Ferreira'
}

//recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));
//recupera os valores do objeto
console.log('Propriedades do objeto user:', Object.values(user));
//retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('Lista com propriedades e valores de user:', Object.entries(user))
//mergear propriedades 
Object.assign(user, {fullName : 'Luisa de Souza Ferreira'});

console.log(user);
console.log(Object.assign({}, user, {age:26})); // passar {} como primeiro parametro faz com que copie o array user e crie outro com uma nova propriedade, nao muda o ponto de referencia do user
console.log(user);

//previnir mudancas no objeto, nao pode alterar propriedades nem criar nem deletar
const newObj = { foo : 'bar'};
Object.freeze(newObj);

//permite somente a alteracao em propriedades ja existentes no array, nao pode criar nem deletar novas
const student = { name: 'Luisa', grade : 10};
Object.seal(student);