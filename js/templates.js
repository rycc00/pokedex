function pokeCardTemp(pokemon, i) {
    return `
    <div id="pokeCard${i}" class="pokeCard" onclick="openPokemonOverlay(${i})">
        <div class="cardHeader">
                <span>${pokemon.name} </span>
                <span style="font-size: 12px">#${i}</span>
        </div>
        <div class="pokeTypes" id="pokeTypes${i}">
        </div>
        <div class="pokeImg">
            <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" />
        </div>
        <div class="typeImg">
            <img src="src/img/types/type_${pokemon.types[0].type.name}.png" />
        </div>
    </div>
  `;
}

function pokeTypeTemp(pokemon, i) {
    return `
      <div id="badge${pokemon.name}${i}" class="pokeType">${pokemon.types[i].type.name}</div>
  `;
}

function currentPokemonTemp(pokemon, i) {
    return `
            <div class="currentBox fighting-box" onclick="dontClose(event)">
                <div class="cardHeader">
                    <span>${pokemon.name} </span>
                    <span style="font-size: 12px">#${i}</span>
                </div>
                <div class="pokeTypes" id="pokeTypes${i}"></div>
                <div class="pokeImg">
                    <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" />
                </div>
                <div class="typeImg">
                    <img src="src/img/types/type_${pokemon.types[0].type.name}.png" />
                </div>
                <div class="infoBox">Infos</div>
            </div>
    `;
}