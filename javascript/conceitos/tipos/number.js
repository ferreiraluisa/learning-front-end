const myNumber = 12.4032;

//transforma o number em string
const stringNumber = myNumber.toString();
console.log('Tipo do numero:', typeof stringNumber);

//retorna o numero com um numero especifico de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('Numero com duas casas decimais:', fixedTwoDecimals);

//transforma string em float
console.log('String convertida em float:', parseFloat('13.254'));

//transforma string em int
console.log('String convertida em int:',parseInt('3.14'));
