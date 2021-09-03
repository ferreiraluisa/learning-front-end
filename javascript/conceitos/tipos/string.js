const text = 'Texto';
//retorna o tamanho da string
const textSize = text.length;
console.log(`Quantidade de letras: ${textSize}`);

//retorna um array quebrando a string pelo delimitador
const splittedText = text.split('x');
console.log(`Array com as posicoes separadas por um delimitador: ${splittedText}`);

//busca um valor e substitui por outro
const replacedText = text.replace('Texto','Troquei o texto haha');
console.log(`Texto substituido: ${replacedText}`);

//retorna a "fatia" de uma string
const lastChar = text.slice(-1);
console.log(`Ultima letra da palavra: ${lastChar}`);

const allWithoutLastChar = text.slice(0,-1);
console.log(`A palavra sem a ultima letra: ${allWithoutLastChar}`);

const secondToEnd = text.slice(1);
console.log(`Da segunda palavra até a última : ${secondToEnd}`);

//retorna N caracteres a partir de uma posição
const TwoCharsBeforeFirstPos = text.substr(0,2);
console.log(`As duas primeiras letras sao: ${TwoCharsBeforeFirstPos}`);