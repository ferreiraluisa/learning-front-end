//uma função com argumentos indefinidos sem o rest operator
function sum(){
    var soma = 0;
    for(let i=0;i<arguments.length;i++){
        soma += arguments[i]; //arguments é do tipo Object
    }
    return soma;
}

console.log(sum(2,3,5,7));

//com o rest operator(...)
function sumRest(...args){
    //var soma = 0;
    //args.map((value) => soma += value);
    const soma = args.reduce((total,value) => total += value,0);

    return soma;
}

console.log(sumRest(2,3,5,7));

//em arrow functions é preciso usar o rest operator para fazer isso, já que o arguments é inexistentes lá

var arrowSum = (a,b,...rest) => { //pega o primerio e segundo argumento e armazena nas variáveis a,b e cria um array para armazenar os outros argumentos
    console.log(a,b,rest);
}

arrowSum(2,3,5,7,3);