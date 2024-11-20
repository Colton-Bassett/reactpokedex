import {
  addDoc,
  collection,
  getDocs,
  query,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { capitalizeFirstLetter } from "../lib/utils";

interface Pokemon {
  id: number;
  name: string;
  type: string;
}

export async function storePokemonInDB(pokemonList: Pokemon[]) {
  const pokemonCollection = collection(db, "pokemon");

  try {
    for (const pokemon of pokemonList) {
      await addDoc(pokemonCollection, {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
      });
      console.log(`Stored Pokémon with ID: ${pokemon.id}`);
    }
  } catch (error) {
    console.error("Error storing Pokémon data:", error);
  }
}

export async function fetchPokemonFromAPI() {
  const pokemonList = [];

  for (let id = 1; id <= 15; id++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();

    const pokemon: Pokemon = {
      id: data.id,
      name: capitalizeFirstLetter(data.name),
      type:
        data.types.length > 1
          ? `${capitalizeFirstLetter(data.types[0].type.name) + capitalizeFirstLetter(data.types[1].type.name)}`
          : capitalizeFirstLetter(data.types[0].type.name),
    };

    pokemonList.push(pokemon);
    // console.log(pokemon);
  }

  console.log("All Pokémon fetched:", pokemonList);
  return pokemonList;
}

export async function deleteAllPokemonFromDB() {
  const pokemonCollection = collection(db, "pokemon");
  const q = query(pokemonCollection);

  try {
    const querySnapshot = await getDocs(q);
    const batch = writeBatch(db);

    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    console.log("Collection: pokemon deleted successfully");
  } catch (error) {
    console.error("Error deleting collection: pokemon", error);
  }
}

export async function fetchTwelveRandomPokemonFromDB() {
  const pokemonCollection = collection(db, "pokemon");
  const collectionSnapshot = await getDocs(pokemonCollection);
  const pokemons: Pokemon[] = collectionSnapshot.docs.map((doc) => {
    const data = doc.data() as Pokemon;
    return data;
  });

  console.log("pokemon from DB: ", pokemons);

  const shuffledPokemons = pokemons.sort(() => Math.random() - 0.5);
  const randomPokemons = shuffledPokemons.slice(0, 12);

  console.log("randomized pokemon: ", randomPokemons);
  return randomPokemons;
}

//   function fetchPokemonFromAPIWithState() {
//     // this is for updating state async in client

//     const pokemonData = use(
//       Promise.all(
//         Array.from({ length: 5 }, (_, i) =>
//           fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
//             .then((res) => res.json())
//             .then((data) => {
//               const pokemon: Pokemon = {
//                 id: data.id,
//                 name: data.name,
//                 type:
//                   data.types.length > 1
//                     ? data.types[0].type.name + data.types[1].type.name
//                     : data.types[0].type.name,
//               };
//               console.log(pokemon);
//               return pokemon;
//             }),
//         ),
//       ),
//     );
//     console.log(pokemonData);
//     return pokemonData;
//   }
