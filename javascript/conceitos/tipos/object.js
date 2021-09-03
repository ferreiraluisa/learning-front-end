let user = {
    name:'luisa'
};
//alteranndo a propriedade de um objeto
user.name = 'pedro';
user['name'] = 'luca';

const prop = 'name';
user[prop] = 'joao';

//criar uma propriedade
user.lastName = 'Ferreira';

//deletar uma propriedade
delete user.name;