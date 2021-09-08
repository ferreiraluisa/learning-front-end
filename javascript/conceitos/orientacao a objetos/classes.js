/*para entender um pouco sobre constructor, proto e prototype
__proto__ -> prototype -> constructor
const myText = 'Hello prototype';

myText.constructor -> String;
myText.__proto__ -> String.prototype;
*/

//sintaxe de classe criada com o ES6, pra simplificacao da heranca de prototipos
class Animal {
    constructor(qtdePatas){
        this.qtdePatas = 4;
    }
    movimentar(){}
}

class Cachorro extends Animal{
    constructor(morde){
        super(4);//passa os argumentos do construtor da funcao mae
        this.morde = morde;
    }
    latir(){
        console.log('AU! AU!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

//modificador de acesso, # define se uma variavel eh privada
class Person{
    #name = '';

    static walking(){ //permite declarar metodos e atributos sem precisar instanciar a classe(exemplo logo abaixo)
        console.log('walking....')
    }

    constructor(initialName){
        this.#name = initialName; //precisa do # toda vez que for usado na classe
    }

    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

console.log(Person.walking()); //static

p = new Person('Luisa');
console.log(p);

console.log(p.getName());

console.log(p.name);

p.setName('Pedro');
console.log(p.getName());

