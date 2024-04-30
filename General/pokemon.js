// Afegeix aquí el codi de JS per a la pàgina pokemon.html

llista = document.querySelector("ul");

async function getPokemon(id = 0, name = "") {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  try {
    if (!res.ok) {
      throw new Error("API request failed");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

showPokemon();

async function showPokemon() {
  try {
    const pokemon = await getPokemon(2);

    console.log(pokemon.abilities);

    pokemon.abilities.forEach((ability) => {
      llista.innerHTML += `<li class='mb-2'> <h4 class='font-bol'>${ability.ability.name}</h4> <p>Descripció de l'habilitat</p> </li>`;
    });

    // pokemon.abilities.ability.name;
  } catch (error) {
    console.error(error);
    return [];
  }
}
