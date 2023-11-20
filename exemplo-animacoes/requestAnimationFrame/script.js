const animarElemento = () => {
    const elemento = document.getElementById("container");
    let fontSize = 1000;
    
    const animacao = () => {
        fontSize -= 2;
        elemento.style.fontSize = fontSize + "px";
        if(fontSize > 0){
            requestAnimationFrame(animacao);
        }
        if(fontSize === 0){
            fontSize = 1000;
            requestAnimationFrame(animacao);
        }
    }
    animacao();
}

animarElemento();