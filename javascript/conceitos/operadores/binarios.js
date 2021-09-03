//in
something in somethingItems

//Pode usar em :arrays, objetos predefinidos, objetos personalizados
//objetos predefinidos
"PI" in Math; //retorna true

//objetos personalizados
var meucarro = { marca: 'Honda', modelo:"Accord", ano:1998};
"marca" in meucarro; //retorna true

//instaceof
objeto instanceof tipoObjeto;
var dia = new Date(2018,12,17);

if(dia instanceof Date){
    //code here
}