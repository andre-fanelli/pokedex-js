function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="pokemon-number">#001</span>
            <span class="pokemon-name">${pokemon.name}</span>

            <div class="pokemon-detail">
                <ol class="types">
                    <li class="pokemon-type">Grass</li>
                    <li class="pokemon-type">Poison</li>
                 </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons() .then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
 })
