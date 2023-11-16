// Cria Variaveis e captura os elementos
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botaoRemoverEventos = document.getElementById("removerEventos");
let contador = 0;

// Criação de funções
const mostraAlerta = () => {
    alert("Clicou no botão!");
}

const criaElemento = () => {
    const li = document.createElement("li");
    li.textContent = `Item ${contador}`

    const lista = document.getElementById("lista");
    lista.appendChild(li);

    contador++
}

const removerEventos = () => {
    botao1.removeEventListener("click", mostraAlerta);
    botao2.removeEventListener("click", criaElemento);
    alert("Removido os eventos dos botões 1 e 2");
}

// Atribui as funções aos eventos de click dos elementos
botao1.addEventListener("click", mostraAlerta);
botao2.addEventListener("click", criaElemento);
botaoRemoverEventos.addEventListener("click", removerEventos);