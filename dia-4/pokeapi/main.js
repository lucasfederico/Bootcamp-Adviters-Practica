document.addEventListener("DOMContentLoaded", function () {
  cargarPokemons();
});

// const obtenerPokemons = async (url) => {
//   return await fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("el numero de Error es : " + response.status);
//       }
//       return response.json();
//     })
//     .catch();
// };
//--------------------------------------
// setTimeout(async () => {
//   alert("Cargando...");

//   document.addEventListener("DOMContentLoaded", function () {
//     cargarPokemons();
//   });
//   const cargarPokemons = async () => {
//     try {
//       const response = await fetch(
//         "https://pokeapi.co/api/v2/pokemon?limit=20"
//       );
//       const data = await response.json();
//       mostrarPokemons(data.results);
//     } catch (error) {
//       console.error("Error al cargar los Pokémon:", error);
//     }
//   };
// }, 3000);
//--------------------------------------------------------
//LLAMA PRIMEROS 10 POKEMONES

const cargarPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    mostrarPokemons(data.results);
  } catch (error) {
    console.error("Error al cargar los Pokémon:", error);
  }
};
//

async function mostrarPokemons(arrayPokemon) {
  const contenedor = document.getElementById("contenedor");

  arrayPokemon.forEach(async (pokemon) => {
    const pokemonEspecifico = await fetch(pokemon.url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("el error es: " + error.message);
      });
    console.log(pokemonEspecifico.sprites.front_default);

    //creo los elementos a incluir en el DOM
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card");
    const pokemonTitle = document.createElement("h3");
    const pokemonImage = document.createElement("img");
    // const pokemonUrl = document.createElement("p");
    const pokemonHabilidades = document.createElement("p");
    const pokemonTipo = document.createElement("p");
    const pokemonBoton = document.createElement("button");

    //Ingreso dichos datos en los elementos creados
    pokemonTitle.textContent = pokemon.name;
    pokemonImage.src = pokemonEspecifico.sprites.front_default;
    //pokemonUrl.textContent = pokemon.url;
    pokemonHabilidades.textContent =
      pokemonEspecifico.abilities[0].ability.name;
    pokemonTipo.textContent = pokemonEspecifico.types[0].type.name;
    if (pokemonTipo.textContent == "grass") {
      pokemonCard.classList.add("verde");
    } else if (pokemonTipo.textContent == "fire") {
      pokemonCard.classList.add("rojo");
    } else if (pokemonTipo.textContent == "water") {
      pokemonCard.classList.add("azul");
    } else if (pokemonTipo.textContent == "bug") {
      pokemonCard.classList.add("violeta");
    }
    pokemonBoton.textContent = "Saludar";
    pokemonBoton.classList.add("boton");
    let saludar = () => {
      alert(`Hola mi nombre es ${pokemonTitle.textContent}`);
    };
    pokemonBoton.addEventListener("click", saludar);
    //aqui inserto los elementos ya creados con su repectiva informacion dentrto de otro elemento contenedor
    console.log(pokemonEspecifico.abilities[0].ability.name);

    pokemonCard.appendChild(pokemonTitle);
    pokemonCard.appendChild(pokemonImage);
    //pokemonCard.appendChild(pokemonUrl);
    pokemonCard.appendChild(pokemonHabilidades);
    pokemonCard.appendChild(pokemonTipo);
    pokemonCard.appendChild(pokemonBoton);

    //inserto a un elento final toda la informacion contenida en CARD
    contenedor.appendChild(pokemonCard);
  });
}
