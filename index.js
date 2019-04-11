const api = 'https://pokeapi.co/api/v2'

function buildPokemon(name){
    return `
    <div class="row">
    <div class="col">
    <span>${name}</span>
    <img src="">
    <span>typ</span>
    <span>waga</span>
    </div>
    </div>
    `
}

function loadPokemons(){
    fetch(api + "/pokemon")
    .then(function (resp){
        return resp.json();
    })
    .then(function (json){
        console.log(json)
        const listaPokemonow = json.results;
        const listaHtmliPokemonow = listaPokemonow.map(
        function(pokemon){return buildPokemon(pokemon.name);})
        const htmlWszystkichPokemonow = listaHtmliPokemonow.join();
        document.querySelector("#pokemony").innerHTML=htmlWszystkichPokemonow;

    })
    .catch(function (err){
        console.error(err)
    })
}