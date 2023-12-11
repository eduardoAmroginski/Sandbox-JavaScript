// Importação de função default/nativa
import mostrarAlerta from "./modules/module1.js";

// Importação de multiplas funções ou variaveis
import { mostrarSaudacaoHora, mostrarSaudacao } from "./modules/module2.js";

// Utilizando o "as" para atribuir outro nome a constante "NOME"
import { NOME as nomeDePessoa, PI } from "./modules/constantes.js";

mostrarAlerta();

mostrarSaudacaoHora(nomeDePessoa);