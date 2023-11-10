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

    let marca = prompt("Qual a marca do carro?")
    let modelo = prompt("Qual o modelo do carro?")
    let peso = prompt("Qual o peso do carro?")
    let cor = prompt("Qual a cor do carro?")
    let quantidadePortas = prompt("Quantas portas o carro tem?")
    let velocidadeMaxima = prompt("Qual a velocidade maxima do carro?")

    const veiculo = new Carro(marca, modelo, peso, cor, quantidadePortas, velocidadeMaxima)

    document.getElementById("ligarDesligar").addEventListener("click", veiculo.ligarDesligar)
    document.getElementById("acelerar").addEventListener("click", veiculo.acelerar)
    document.getElementById("freiar").addEventListener("click", veiculo.freiar)
    document.getElementById("mostrarInformacoes").addEventListener("click", veiculo.mostrarInformacoes)
}
