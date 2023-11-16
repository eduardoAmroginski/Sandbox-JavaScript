// Exemplo 1, utilizando o document.createElement
const novoParagrafo = document.createElement("p");
const novoTexto = document.createTextNode("Conteudo do paragrafo");

novoParagrafo.appendChild(novoTexto);

const container = document.getElementById("meuContainer");
container.appendChild(novoParagrafo);


// Exemplo 2, utilizando o document.createDocumentFragment
const frutas = ["Banana", "Laranja", "Manga"];

const dFrag = document.createDocumentFragment();

for(let fruta in frutas){
    const li = document.createElement("li");
    li.textContent = frutas[fruta];
    dFrag.appendChild(li);
}

const containerLista = document.getElementById("minhaLista")
containerLista.appendChild(dFrag);