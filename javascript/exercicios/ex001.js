function botao() {
    document.getElementById("agradece").innerHTML = "Obrigada por clicar OTARIO";
    alert(document.getElementById("luisa").value);
    //alert('oi');
}

function redirecionar(){
    //para abrir em outra janela
    window.open("https://www.instagram.com/luisafsouza/");
    //para abrir na mesma janela
    window.location.href = "https://www.instagram.com/luisafsouza/" ;
}

function trocar(){
    document.getElementById('mouseover').innerHTML = "Obrigada por passar o mouse";
}

function voltar() {
    document.getElementById('mouseover').innerHTML = "Passe o mouse aqui";
    
}
/* OUUUUU tambem podemos fazer assim
function trocar(elemento){
    elemento.innerHTML = "novamensagem"
}
function voltar(elemento){
    elemento.innerHTML = "novamensagem"
}
ai no HTML vc bota assim
<h3 onclick="trocar(this)"></h3>
*/

function load() {
    alert('pagina carregada!');
}

function selecionar(elemento) {
    console.log(elemento.value);
    if(elemento.value == "indiferente"){
        document.getElementById("change").innerHTML = "Voce escolheu a opcao " + elemento.value ; 
    }
    else if(elemento.value == ""){
        document.getElementById("change").innerHTML = "Selecione uma opcao";
    }
    else{
        document.getElementById("change").innerHTML = "Voce escolheu a opcao para " + elemento.value ; 
    }
    
    
}