
function soma(n1,n2){
    return n1+n2;
};

var validar = 0; //variavel global
function validadeIdade(idade){
    var validar; //variavel local
    if(idade>=18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
};

var idade = 18;
validaIdade(idade); //retorna true, usa o valor do validar na funcao 
console.log(validar); //retorna 0, usa o valor da variavel global
