// Spread ...
var partes = ['ombro', 'joelho'];
var musica = ['cabeca', ...partes,'e','pe'];

//musicas = ['cabeca', 'ombro', 'joelho', 'e', 'pe'];

function fn(x,y,z) { }
var args = [0,1,2];
fn(...args); //<=> fn(0,1,2);