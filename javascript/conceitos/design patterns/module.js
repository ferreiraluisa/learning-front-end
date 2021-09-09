//É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais.
class Person{
    constructor(name){
        this.name = name;
    }
}

export default Person;

//utilizar em outros codigos
import Person from 'local do arquivo';