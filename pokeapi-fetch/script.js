// Este código utiliza a PokeAPI para recuperar informações sobre pokémons,
// permitindo a customização da quantidade de resultados através do parâmetro "?limit={valor}".
// Além disso, é possível ajustar a posição inicial dos resultados com o parâmetro "?offset={valor}".
// O código realiza uma requisição usando a função fetch, processa os dados recebidos e imprime
// os nomes dos pokémons no console.

// Exemplo de uso:
// O código abaixo traz os primeiros 50 pokémons a partir do número 20.
// fetch("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=20")
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         data.results.forEach((pokemon) => {
//             console.log(pokemon.name);
//         });
//     })
//     .catch(error => console.error(error));



// Obter uma lista de todos os pokemons
fetch("https://pokeapi.co/api/v2/pokemon/?limit=1080")
    .then(response => response.json())
    .then((data) => {
        // Imprime os dados brutos recebidos da PokeAPI
        console.log(data);

        // Itera sobre a lista de resultados e imprime os nomes dos pokémons
        data.results.forEach((pokemon) => {
            console.log(pokemon.name);
        });
    })
    .catch(error => console.error(error));



// Obter informações de um Pokémon específico (por ID ou nome):
const pokemonIdOrName = 'pikachu';

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`)
    .then(response => response.json())
    .then(data => {
        console.log(`Informações sobre ${pokemonIdOrName}:`, data);
    })
    .catch(error => console.error(error));



// Obter informações sobre um tipo de Pokémon:
const typeName = 'electric';

fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
    .then(response => response.json())
    .then(data => {
        console.log(`Informações sobre o tipo ${typeName}:`, data);
    })
    .catch(error => console.error(error));



// Obter uma lista de pokémons com paginamento:
const limit = 10; // Número de resultados por página
const offset = 0; // Posição inicial dos resultados

fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .then(data => {
        console.log(`Lista de pokémons:`, data.results);
    })
    .catch(error => console.error(error));