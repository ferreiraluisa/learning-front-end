//É a técnica de a gente transformar uma função com vários parametros em apenas uma função com um parametro.
function soma(a,b){
    return a+b;
}

console.log(soma(2,3));
console.log(soma(2,5));
console.log(soma(2,7));
console.log(soma(2,9)); 
//sempre ta repetindo o parametro, se quisermos memorizar esse parametro podemos aplicar a tecnica do currying nessa funcao.Ficaria assim:

function soma(a){
    return function(b){
        return a+b;
    }
}
const soma2 = soma(2);
console.log(soma2(3));
console.log(soma2(5));
console.log(soma2(7));