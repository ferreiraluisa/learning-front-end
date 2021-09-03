//lacos de repeticos
    //WHILE
    while(condicao){
        comandos;
    };
//DO WHILE
    do
        comandos
    while(condicao); //vai sempre executar o bloco de comandos pelo menos uma vez
//FOR
    var count;
    for(count = 0; condicao; count++){

    };
//FOR IN 
    let arr = [3,5,7];
    arr.foo = "hello";
    for(let i in arr){ //faz pra cada item E para cada propriedade
        console.log(i); // "0","1","2","foo"
    }
//FOR OF
    let arr = [3,5,7];
    arr.foo = "hello";
    for(let i of arr){
        console.log(i); // "3","5","7"
    }
//operadores que manipula os lacos
break; //para a iteracao, mata o laco
continue; //vai para a proxima iteracao