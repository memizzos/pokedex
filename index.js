const api = 'https://pokeapi.co/api/v2'

function buildPokemon(pokemon) {
	return `
		<div class = "row pokemon">
			<img src="">
			<div class="col">
				<span>${pokemon.name}</span>
				<span>type</span>
				<span>${pokemon.weight}</span>
			</div>
		</div>
	`
}

function loadPokemons() {
	fetch(api + "/pokemon")
		.then(function (resp) {
			return resp.json();
		})
		.then(function (json) {
			let listaPokemonow = json.results;
			let requesty = listaPokemonow.map(
				(pokemon) => {
					return fetch(pokemon.url)
						.then(function (resp) {
							return resp.json();
						})
				})
			Promise.all(requesty).then(function (pokemony) {
				const listaPokemonow = json.results; // [{},{}]
				const listaHtmliPokemonow = pokemony.map((pokemon) => buildPokemon(pokemon))
				const htmlWszystkichPokemonow = listaHtmliPokemonow.join(""); // ""
				document.querySelector("#pokemony").innerHTML = htmlWszystkichPokemonow;

			})
		})
		.catch(function (err) {
			console.error(err)
		})
	}
	document.addEventListener("load", loadPokemons)
	loadPokemons()
	
