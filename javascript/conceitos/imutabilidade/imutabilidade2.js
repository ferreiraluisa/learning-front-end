const students = [
    {
        name: 'Luisa',
        grade : 10
    },
    {
        name:'Jonas',
        grade : 8.5
    },
    {
        name:'Lademir',
        grade : 8
    },
    {
        name:'Bruno',
        grade : 0
    }
]

function getStudentsAproved(students){
    return students.filter(student => student.grade >= 7)
}

console.log('Alunos Aprovados:')
console.log(getStudentsAproved(students));