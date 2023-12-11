const mostrarSaudacao = (nome) => {
    alert(`Olá, ${nome}`);
}

const mostrarSaudacaoHora = (nome) => {
    const horaAtual = new Date().getHours();

    console.log("horaAtual: ", horaAtual);

    if(horaAtual < 12){
        alert(`Bom dia, ${nome}`)
    }else if (horaAtual > 12 && horaAtual < 18){
        alert(`Boa tarde, ${nome}`)
    }else{
        alert(`Boa noitche, ${nome}`)
    }

}

export {mostrarSaudacao, mostrarSaudacaoHora}