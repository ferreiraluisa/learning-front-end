const arr = [1,2,3,4,5];

arr.forEach((value, index) =>{
    console.log(`${index}: ${value}`)
});

//forEach(valor da posicao, posicao, array)

frutas = ['laranja', 'maca','banana','pera'];

frutas.forEach((value, index,frutas) =>{
    console.log(`${index} ${value}`, frutas );
})