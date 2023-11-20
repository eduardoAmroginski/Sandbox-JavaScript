let contador = 1000;
const elemento = document.getElementById("container");

const animacao = setInterval(() => {
    elemento.style.fontSize = contador + "px";
    contador -=2;
    if(contador === 0){
        clearInterval(animacao);
    }
}, 50)