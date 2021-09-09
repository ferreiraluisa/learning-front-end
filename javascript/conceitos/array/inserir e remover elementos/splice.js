//SPLICE => Altera um array antigo adicionando novos elementos enquanto remove elementos antigos !!MEXE NA REFERENCIA DO ARRAY, retorna os itens removidos

const arr = [1,2,3,4,5];

arr.splice(2);
//remove [3,4,5] (elementos a partir da posicao 2)

console.log(arr); //[1,2]

arr.splice(0,0,'first'); //[]

console.log(arr) //['first',1,2]

//splice(lugarondequeroadicionar, quantos elementos vai remover a partir da posicao onde quer adicionar, o que ira adicionar)