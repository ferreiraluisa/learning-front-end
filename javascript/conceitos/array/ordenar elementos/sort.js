//SORT => ordena um array de acordo com uma condição

const students = [
    {
        name:'Luisa',
        age:19,
        grade:10
    },
    {
        name:'Pedro',
        age:24,
        grade: 7
    },
    {
        name:'Luca',
        age:18,
        grade: 2

    }
];

students.sort((current, next) => current.age - next.age)

console.log(students);