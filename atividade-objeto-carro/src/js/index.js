import Carro from "./carro.js"

// MOCK //
// const veiculo = new Carro(
//     "Ford",
//     "Fiesta",
//     "1000Kg",
//     "Vermelho",
//     5,
//     220)

window.onload = () => {

    let veiculo;

    document.getElementById("form-carro").addEventListener("submit", (event) => { 
        event.preventDefault();
        const form = event.target;
        let marca = form.marca.value;
        let modelo = form.modelo.value;
        let peso = form.peso.value;
        let cor = form.cor.value;
        let quantidadePortas = form.quantidadePortas.value;
        let velocidadeMaxima = form.velocidadeMaxima.value;

        veiculo = new Carro(marca, modelo, peso, cor, quantidadePortas, velocidadeMaxima);

        console.log(veiculo);
        setInfos(veiculo);
        startEvents(veiculo);

        let elementPanelForm = document.getElementsByClassName("panel-form")[0];
        elementPanelForm.style.display = "none";
        
        let elementPanelInfos = document.getElementsByClassName("panel-infos")[0];
        elementPanelInfos.style.display = "block";

    })

    const setInfos = (veiculo) => {
        document.getElementsByClassName("info-marca")[0].lastChild.textContent = veiculo.marca;
        document.getElementsByClassName("info-modelo")[0].lastChild.textContent = veiculo.modelo;
        document.getElementsByClassName("info-peso")[0].lastChild.textContent = veiculo.peso;
        document.getElementsByClassName("info-cor")[0].lastChild.textContent = veiculo.cor;
        document.getElementsByClassName("info-quantidadePortas")[0].lastChild.textContent = veiculo.quantidadePortas;
        document.getElementsByClassName("info-velocidadeMaxima")[0].lastChild.textContent = veiculo.velocidadeMaxima;
        document.getElementsByClassName("info-velocidadeAtual")[0].lastChild.textContent = veiculo.velocidadeAtual;
        document.getElementsByClassName("info-status")[0].lastChild.textContent = veiculo.statusCarro ? "Ligado" : "Desligado";
    }

    const removeEvents = (veiculo) => {
        document.getElementById("ligarDesligar").removeEventListener("click", veiculo.ligarDesligar)
        document.getElementById("acelerar").removeEventListener("click", veiculo.acelerar)
        document.getElementById("freiar").removeEventListener("click", veiculo.freiar)
        document.getElementById("mostrarInformacoes").removeEventListener("click", veiculo.mostrarInformacoes)
    }

    const startEvents = (veiculo) => {
        document.getElementById("ligarDesligar").addEventListener("click", () => {
            let status = veiculo.ligarDesligar()
            document.getElementsByClassName("info-status")[0].lastChild.textContent = status ? "Ligado" : "Desligado";
        })
        document.getElementById("acelerar").addEventListener("click", () => {
            let velocidade = veiculo.acelerar()
            document.getElementsByClassName("info-velocidadeAtual")[0].lastChild.textContent = `${velocidade}km/h`;
        })
        document.getElementById("freiar").addEventListener("click", () => {
            let velocidade = veiculo.freiar()
            document.getElementsByClassName("info-velocidadeAtual")[0].lastChild.textContent = `${velocidade}km/h`;
        })
        document.getElementById("mostrarInformacoes").addEventListener("click", veiculo.mostrarInformacoes)
    }

}
