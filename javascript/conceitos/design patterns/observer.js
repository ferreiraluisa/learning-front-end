//observer
//É um pattern muito popular em aplicações de javascript. A instância(subscriber) mantém uma coleção de objetos(observers) e notifica todos eles quando ocorrem mudanças no estado.

class Observable{
    constructor(){
        this.observers = [];
    }
    subscribe(fn){
        this.observers.push(fn);
    }
    notify(data){
        this.observers.forEach(fn => fn(data));
    }
    unsubscribe(fn){
        this.observers =this.observers.filter(obs => obs !== fn);
    }

};

const o = new Observable();

const logData1 = data => console.log(`Subscribe1: ${data}`);
const logData2 = data => console.log(`Subscribe2: ${data}`);
const logData3 = data => console.log(`Subscribe3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('alerta uso!');

o.unsubscribe(logData3);
o.notify('alerta uso novamente!');
