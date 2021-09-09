 //decorator:
 //Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.
 console.log('decorator');
let loggedIn = false;

 function callIfAuthenticaded(fn){
    return !!loggedIn && fn;
 }

 function sum(a,b){
    return a+b;
}

console.log(callIfAuthenticaded(() => sum(2,3)));
loggedIn = true;
console.log(callIfAuthenticaded(() => sum(2,3)));
loggedIn = false;
console.log(callIfAuthenticaded(() => sum(2,3)));