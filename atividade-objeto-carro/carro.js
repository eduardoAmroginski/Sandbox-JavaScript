export default class Carro{
    constructor(marca, modelo, peso, cor, quantidadePortas, velocidadeMaxima){
        this.marca = marca
        this.modelo = modelo
        this.peso = peso
        this.cor = cor
        this.quantidadePortas = quantidadePortas
        this.velocidadeAtual = 0
        this.velocidadeMaxima = velocidadeMaxima
        this.statusCarro = false
    }

    ligarDesligar = () => {
        this.statusCarro = !this.statusCarro
        let mensagem = this.statusCarro ? "ligado" : "desligado"
        console.log(`O carro está ${mensagem}`)
    }
    
    acelerar = () => {
        if(this.statusCarro == false){
            console.log("O carro está desligado")
        }else if(this.velocidadeAtual < this.velocidadeMaxima){
            console.log("A velocidade atual é de: ", this.velocidadeAtual += 10);
        }else{
            console.log("Você atingiu a velocidade Máxima que é de: ", this.velocidadeMaxima);
        }
    }

    freiar = () => {
        console.log("Freiar");
    }

}