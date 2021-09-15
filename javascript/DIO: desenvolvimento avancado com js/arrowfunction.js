//nesse arquivo, exemplifico várias formas de escrever arrow functions
//!OBS: Hoisting não funciona com arrow function
var sum = (a,b) => a + b; // arrow function anonima, return é implicito

var dif = (a,b) =>{
    if(a > b) {
        return a-b;
    }
    else{
        return b-a;
    }

}
//se tiver apenas um argumento pode omitir os parenteses, só pode omitir o parenteses nesse único caso de ter apenas um argumento
var dobro = a => 2 * a;

//pode retornar objetos literais
var createObj = () => ({ name : luisa , age: 19});  
console.log(createObj);
