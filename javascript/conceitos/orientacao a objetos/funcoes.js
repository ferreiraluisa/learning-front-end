/*para entender um pouco sobre constructor, proto e prototype
__proto__ -> prototype -> constructor
const myText = 'Hello prototype';

myText.constructor -> String;
myText.__proto__ -> String.prototype;
*/

function Animal(){
    this.qntePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype);
//true 
console.log(Animal.__proto__ === Function.prototype);
//true

function Animal2(qtdePatas){
    this.qtdePatas = qtdePatas;
    this.movimentar = function(){};
}

function Cachorro(morde){
    Animal2.call(this,4);

    this.morde = morde;
    this.latir = function(){
        console.log('AU! AU!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);