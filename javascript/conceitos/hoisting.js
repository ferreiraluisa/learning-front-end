//Se a variável não vai tiver declarada ou a função o hoisting vai fazer com que não de erro de que a variável/função não foi declarada porém a boa prática é sempre declarar antes de usar.
//Hoisting de variavel
function fn(){
    console.log(text);

    var text = 'Ola mundo!';

    console.log(text);
}

/*o que o hoisting fará:
funcion fn(){
    var text; -> declara a variavel antes da chamada
    console.log(text); ->mas vai dar erro de undefined 

    text = 'Ola mundo';

    console.log(text)
}
*/
//Hoisting de funcao
function fn1(){
    log('Hoisting de funcao')

    function log(value){
        console.log(value);
    }
}

fn1();

/* o que o hoisting fará:
funcion fn(){
    function log(value){  -> coloca a declaracao em cima do uso
        console.log(value)ç
    }

    log('Hoisting de funcao') 
}
*/