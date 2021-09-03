const users = ['Luisa', 'Pedro', 'Luca'];

const gender = {
    MAN : Symbol('M'),
    WOMAN : Symbol('W')
};

const persons = [
    {
        name : 'Luisa',
        age : 19,
        gender : gender.WOMAN
    },
    {
        name : 'Pedro',
        age : 24,
        gender : gender.MAN
    },
    {
        name : 'Luca',
        age : 18,
        gender : gender.MAN
    }
];

//retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array
//essa forEach é uma arrow function
persons.forEach(person => {
    console.log(`Nome: ${person.name} \nIdade: ${person.age}`);
    if(person.gender == gender.WOMAN) console.log('Genero: Feminino \n')
    else console.log('Genero: Masculino \n')
})
//ouuu
persons.forEach((person, index) =>{
    console.log(person.name,index);
});
//As proximas funcoes nao alteram a referencia do objeto, elas criam um novo objeto a partir do objeto que ja existia 
//Filtrar o array, basicamente é uma condicional
const mens = persons.filter(person => person.gender == gender.MAN); //vai criar um novo array com todos os elementos do objeto que posso o gender = gender.MAN
const womens = persons.filter(person => person.gender == gender.WOMAN);
console.log('Apenas homens:', mens);
console.log('Apenas mulheres:', womens);
//Retornar um novo
const personWithCourse = persons.map(person =>{
    person.course = 'Introdução a JavaScript';
    return person;
})


//Transformar um array em outro tipo
//primeiro parametro é a nova variavel que eu quero retornar, depois vem na ordem igual os outros e o ultimo é o valor inicial do primeiro parametro da funcao que sera o "novo tipo"
const TotalAge = persons.reduce((age,person) => {
    age += person.age;
    return age;
}, 0);

console.log('Soma de idade das pessoas:', TotalAge);

//Juntando operações 

const totalEvenAges = persons.filter(person => person.age%2 == 0).reduce((age,person) =>{
    age+= person.age;
    return age;
}, 0);

console.log(totalEvenAges)