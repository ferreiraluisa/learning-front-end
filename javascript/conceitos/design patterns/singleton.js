//singleton:
//O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la.

console.log('singleton');
function PessoaSingleton(){
    if(!PessoaSingleton.instance){
    PessoaSingleton.instance = this;
    }
    return PessoaSingleton.instance;
}

const  p1 = PessoaSingleton.call({name : 'Luisa'});
const  p2 = PessoaSingleton.call({name: 'Pedro'});
console.log(p1);