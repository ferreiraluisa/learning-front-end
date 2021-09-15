function multiply(a,b=1){
    return a*b;
}
console.log(multiply(5,2)) //imprime 10
console.log(multiply(5)) //imprime 5
console.log(multiply(5,undefined)) //imprime 5, atribui o segundo parametro a um também

function sum(a,b = a){ //nao pode fazer (b=a,a)!!
    return a+b;
}

console.log(sum(2)) //imprime 4

function getRandomNumber(){
    return Math.random() * 10;
}

function dif(a, b=getRandomNumber()){
    return a-b;
}
console.log(dif(10,2));
console.log(dif(10)); //lazy evaluation, gera um novo número a cada chamada