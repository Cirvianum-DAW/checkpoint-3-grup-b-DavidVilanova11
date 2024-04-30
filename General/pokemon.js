// Afegeix aquí el codi de JS per a la pàgina pokemon.html
async function listMovies(id, name) {
  try {
    if (id) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    } else if (name) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    } else {
      alert("necessitem id o nom");
    }
    if (!res.ok) {
      throw new Error("API request failed");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    return [];
  }
}
