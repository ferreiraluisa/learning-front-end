 //factory:
 //todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas funções Factory(fábrica).
 console.log('factory');

 function PessoaFactory(customProperties){
     return{
         name : 'Luisa',
         lastName: 'Ferreira',
         ...customProperties
     }
 }

 const p = PessoaFactory( {name : 'Pedro', fullName : 'Pedro Ferreira'});
 console.log(p);