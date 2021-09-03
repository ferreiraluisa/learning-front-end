/*
switch(expressao){
    case valor1:
        [break;]
    case valueN;
        [break;]
    

    default:
        [break;]
}
*/

const fruit = 'pera'; //se for mamao aqui vai sair no terminal 'R$2.00/kg'

switch(fruit){
    case 'banana':
        console.log('R$3.00/kg');
        break;
    case 'mamao':
    case 'pera':
        console.log('R$2.00/kg');
        break;
    default:
        console.log('Produto não existe no estoque.');
}