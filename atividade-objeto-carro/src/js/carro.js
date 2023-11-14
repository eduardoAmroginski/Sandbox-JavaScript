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

        if(!this.statusCarro){
            this.velocidadeAtual = 0;
        }

        console.log(`O carro está ${mensagem}`)
        return this.statusCarro
    }
    
    acelerar = () => {
        if(this.statusCarro == false){
            console.log("O carro está desligado")
        }else if(this.velocidadeAtual < this.velocidadeMaxima){
            console.log(`A velocidade atual é de: ${this.velocidadeAtual += 10}Km/h`);
        }else{
            console.log(`Você atingiu a velocidade Máxima que é de: ${this.velocidadeMaxima}Km/h`);
        }
        let velocidade = this.velocidadeAtual;
        return velocidade;
    }

    freiar = () => {
        if(this.statusCarro == false){
            return console.log("O carro está desligado.")
        }

        if(this.velocidadeAtual != 0){
            console.log(`A velocidade atual é de: ${this.velocidadeAtual -= 10}Km/h`);
        }else{
            console.log("O carro está parado.");
        }
        let velocidade = this.velocidadeAtual;
        return velocidade;
    }

    mostrarInformacoes = () => {
        console.log("\n")
        console.log("----- Informações do Carro -----")
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
        console.log("Peso: " + this.peso)
        console.log("Cor: " + this.cor)
        console.log("Quantidade de Portas: " + this.quantidadePortas)
        console.log(`Velocidade Atual: ${this.velocidadeAtual}Km/h`)
        console.log("Status do Carro: " + (this.statusCarro ? "Ligado" : "Desligado" ))
        console.log("----- ----- -----")
        console.log("\n")
    }

}