// Afegeix aquí el codi de JS per a la pàgina pokemon.html

const llista = document.querySelector("ul");
const idInput = document.querySelector("#cerca");

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

async function showPokemon(id) {
  try {
    console.log(id);
    const pokemon = await getPokemon(id); // id

    // console.log(pokemon.abilities);

    pokemon.abilities.forEach((ability) => {
      //no puc fer servir la funció async a dins del foreach
      llista.innerHTML += `<li class='mb-2'> <h4 class='font-bol'>${ability.ability.name}</h4>`;
      //   <p>Descripció de l'habilitat</p> </li>`;
    });

    let abilitiesDesc;

    for (const url in pokemon.abilities.ability[1]) {
      console.log(url);
      let newAbility = await getAbility(url);
      abilitiesDesc.push(newAbility);
    }

    console.log(abilitiesDesc);

    // pokemon.abilities.ability.name;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getAbility(url) {
  const res = await fetch(url);
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

idInput.addEventListener("input", (e) => {
  showPokemon(idInput.value);
});
