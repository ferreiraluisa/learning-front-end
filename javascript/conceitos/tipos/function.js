function fn(){
    return 'code here';
}

//arrow function
//a chamada eh da mesma forma :arrwofn()
const arrowfn = () => 'code here'; //o return esta implicito quando so tem uma expressao
const arrowfn2 = () => {
    //mais de uma expressao
    return 'code here';
}

//funcoes tambem sao objetos, logo podemos criar propriedades para as funcoes
fn.prop = 'Posso criar propriedades tambem'; //não é muito comum fazer isso 

console.log(fn());
console.log(fn.prop);

//arrow function tambem pode receber parametro
const logValue = value =>console.log(value);
const logFnResult = fnParams => console.log(fnParams())

logFnResult(fn);

//Receber e retornar funcoes
//usa currying
//const controlFnExec = fnParam => allowed =>{
//    if(allowed){
//        fnParam();
//    }
//}

function controlFnExec(fnParam) {
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
    
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);