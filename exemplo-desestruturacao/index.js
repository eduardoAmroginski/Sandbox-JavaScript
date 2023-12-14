// Função assíncrona que utiliza desestruturação para extrair informações específicas sobre um Pokémon
const fetchPokemonWithDesconstruction = async () => {
    // Realiza uma requisição à API PokeAPI para obter informações sobre o Pokémon "Ditto"
    const { name, height, sprites: { back_default } } = await fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response => response.json());

    // Exibe no console algumas informações sobre o Pokémon obtido
    console.log("Pokemon: ", name, height, back_default);
}

// Função assíncrona que obtém informações sobre um Pokémon, chama outra função para exibir as informações e retorna os dados do Pokémon
const fetchPokemon = async () => {
    // Realiza uma requisição à API PokeAPI para obter informações sobre o Pokémon "Ditto"
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response => response.json());

    // Chama a função showPokemonInfos passando o objeto do Pokémon como argumento
    showPokemonInfos(pokemon);

    // Retorna os dados do Pokémon
    return pokemon;
}

// Função que exibe informações específicas sobre um Pokémon usando desestruturação
const showPokemonInfos = ({ name, weight, height: batata }) => {
    // Exibe no console informações formatadas sobre o Pokémon
    console.log(`Pokemon infos: ${name} - ${weight} - ${batata}`);
}

// Chama a função fetchPokemonWithDesconstruction para obter e exibir informações sobre um Pokémon usando desestruturação
fetchPokemonWithDesconstruction();

// Chama a função fetchPokemon para obter informações sobre um Pokémon e exibir suas informações usando outra função
fetchPokemon();