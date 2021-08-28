function infoMenu(){
    if(info.style.display === "block"){
        info.style.display = "none"
    } else{
        info.style.display = "block"
    }

    document.getElementById("anunciarMenu").style.display = "none";
    document.getElementById("reclamacaoMenu").style.display = "none";
}

function anunciar(){
    if(anunciarMenu.style.display === "block"){
        anunciarMenu.style.display = "none"
    } else{
        anunciarMenu.style.display = "block"
    }

    document.getElementById("info").style.display = "none";
    document.getElementById("reclamacaoMenu").style.display = "none";
}

function reclamacao(){
    if(reclamacaoMenu.style.display === "block"){
        reclamacaoMenu.style.display = "none"
    } else{
        reclamacaoMenu.style.display = "block"
    }

    document.getElementById("info").style.display = "none";
    document.getElementById("anunciarMenu").style.display = "none";
}