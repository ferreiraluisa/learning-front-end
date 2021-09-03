const user = {
    name : 'Luisa',
    lastName : 'Ferreira'
};

function getUserFullName(user) {
    return{
        ...user, //spread operator
        fullName : `${user.name}  ${user.lastName}` //mesma coisa que user.name + ' ' + user.lastName //cria um novo vetor com um novo atributo mas nao muda a referencia dele 

    }

}

const userWithFullName = getUserFullName(user);

console.log(userWithFullName, user);