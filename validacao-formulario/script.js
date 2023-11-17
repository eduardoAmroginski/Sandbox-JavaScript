// Pegar os elementos DOM
const formulario = document.getElementById("meuFormulario");
const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const passwordStatus = document.getElementById("password-status")
const inputCPF = document.getElementById("cpf");

// Funções de Validação
const validaInputText = (input) => {
    if(input.value === ""){
        input.parentElement.classList.add("erro")
        return false
    }
    return true
}

const validaEmail = () => {
    if(inputEmail.value === ""){
        inputEmail.parentElement.classList.add("erro");
        return false
    }
    return true;
}

const validaSenha = () => {
    const numeros = /([0-9])/;
	const alfabeto = /([a-zA-Z])/;
	const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    if(inputSenha.value.length < 6){
        passwordStatus.textContent = "Fraco, insira no mínimo 6 caracteres"
        passwordStatus.style.color = "red"
    }else{
        if(numeros.test(inputSenha.value) && alfabeto.test(inputSenha.value) && chEspeciais.test(inputSenha.value)){
            passwordStatus.textContent = "Senha Forte!"
            passwordStatus.style.color = "green"
        }else{
            passwordStatus.textContent = "Senha Média, adicione um caracter especial"
            passwordStatus.style.color = "orange"
        }
    }
}

const validarFormulario = () => {
    if(!validaInputText(inputNome) || !validaInputText(inputSobrenome)){
        return false
    }
    return true
}


// Atribuição de eventos aos respectivos inputs e formulário
inputSenha.addEventListener("input", validaSenha);

formulario.addEventListener("submit", (event) => {
    if(!validarFormulario()){
        event.preventDefault();
    }
})
