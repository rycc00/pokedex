async function filterPokemons() {
    let search = document.getElementById('search').value;
    if (search.length <= 1) {
        resetVariables();
        init(0);
        return;
    }
    pushSearchPokemon(search);
    await loadPokemonSearch(searchPokes);
}


async function loadPokemonSearch(pokemons) {
    searchPokes = [];
    for (let i = 0; i < 10; i++) {
        const pokemon = pokemons[i];
        try {
            let response = await fetch(pokemon.url);
            let respJson = await response.json();
            searchPokes.push(respJson);
            renderSearchPokemon(searchPokes);
        } catch (e) {}
    }
}


function pushSearchPokemon(search) {
    search = search.toLowerCase();
    searchPokes = [];
    isLoading = true;

    for (let i = 0; i < allFetchedPokemons.length; i++) {
        const element = allFetchedPokemons[i];
        if (element.name.includes(search)) {
            searchPokes.push(element);
        } else console.log("Pokemon existiert nicht");
    }
}


function renderSearchPokemon(pokemon) {
    content.innerHTML = "";
    for (let i = 0; i < pokemon.length; i++) {
        content.innerHTML += pokeCardTemp(pokemon[i], i);
        renderSearchTypes(pokemon, i);
    }
}

function renderSearchTypes(pokemon, id) {
    for (let i = 0; i < pokemon[id].types.length; i++) {
        let pokeTypes = document.getElementById(`pokeTypes${id}`);
        pokeTypes.innerHTML += pokeTypeTemp(pokemon[id], i);
        searchBadgeColor(id, i);
    }
    searchCardColor(id, 0);
}


function searchCardColor(id, i) {
    let type = searchPokes[id].types[i].type.name;
    let pokeCard = document.getElementById(`pokeCard${id}`);
    pokeCard.classList.add(`${type}-box`);
}


function searchBadgeColor(id, i) {
    let type = searchPokes[id].types[i].type.name;
    let pokemon = searchPokes[id];
    let badge = document.getElementById(`badge${pokemon.name}${i}`);
    badge.classList.add(`${type}-badge`);
}