//catalogo oculto
function catalogo(){
    if(menu.style.display === "flex"){
        menu.style.display = "none"
    } else{
        menu.style.display = "flex"
    }
}
//quem somos oculto
function quemsomos(){
    if(quemsomos2.style.display === "block"){
        quemsomos2.style.display = "none"
    } else{
        quemsomos2.style.display = "block"
    }
}

// topo
const text = document.querySelector("#titulo");
const titulo = "tecnoPromo";
const interval = 310;

function showText(text, titulo, interval){
    
    const char = titulo.split("").reverse();

    const type = setInterval(() => {

        if(!char.length){
            return clearInterval(type);
        }

        const next = char.pop();

        text.innerHTML += next;

    }, interval);
}

showText(text, titulo, interval);

// responsividade
function responsivo(){
    document.getElementById("menu").style.display = "block";
    document.getElementById("menuResponsivo1").style.display = "none";
    document.getElementById("menuResponsivo2").style.display = "block";
}

function responsivo2(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("menuResponsivo2").style.display = "none";
    document.getElementById("menuResponsivo1").style.display = "block";
}