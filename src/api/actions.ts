import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { capitalizeFirstLetter, getRandomNumbers } from "../lib/utils";
import { Pokemon } from "../types";

export async function storePokemonInDB(pokemonList: Pokemon[]) {
  const pokemonCollection = collection(db, "pokemon");

  try {
    for (const pokemon of pokemonList) {
      await addDoc(pokemonCollection, {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
      });
    }
    // const testReject = await Promise.reject(
    //   new Error("Forced error for testing"),
    // );
    // return testReject;
  } catch (error) {
    console.error(error);
    throw new Error(
      "storing Pokemon in database. Possible Firebase issue or insufficient permissions.",
    );
  }
}

export async function fetchPokemonFromAPI() {
  const pokemonList: Pokemon[] = [];
  try {
    for (let id = 1; id <= 5; id++) {
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
    }
    // const pokemonList: Pokemon[] = await Promise.reject(
    //   new Error("Forced error for testing"),
    // );
    return pokemonList;
  } catch (error) {
    console.error(error);
    throw new Error("fetching Pokemon from API. Possible PokeAPI issue.");
  }
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
    // const testReject = await Promise.reject(
    //   new Error("Forced error for testing"),
    // );
    // return testReject;
  } catch (error) {
    console.error(error);
    throw new Error(
      "deleting all Pokemon from database. Possible Firebase issue or insufficient permissions.",
    );
  }
}

// async: for everything else
export async function fetchTwelvePokemonFromDBAsync() {
  const randomIds = getRandomNumbers(12, 1, 151);
  const pokemonCollection = collection(db, "pokemon");

  // create a single query with an 'in' clause to fetch all Pokemon in one go
  const pokemonQuery = query(pokemonCollection, where("id", "in", randomIds));

  try {
    const collectionSnapshot = await getDocs(pokemonQuery);

    let pokemons: Pokemon[] = [];
    for (let i = 0; i < 12; i++) {
      pokemons.push(collectionSnapshot.docs[i].data() as Pokemon);
    }

    // const pokemons: Pokemon[] = await Promise.reject("testing error");
    return pokemons;
  } catch (error) {
    console.error(error);
    throw new Error(
      "fetching twelve random Pokemon from database. Possible Firestore issue or insufficient permissions.",
    );
  }
}

// use: fetch one pokemon, for pokemon page
export async function fetchPokemonFromDBAsync(id: number) {
  const pokemonCollection = collection(db, "pokemon");
  const pokemonQuery = query(pokemonCollection, where("id", "==", id));
  try {
    const collectionSnapshot = await getDocs(pokemonQuery);

    const pokemon = collectionSnapshot.docs[0].data() as Pokemon;

    // const pokemon: Pokemon = await Promise.reject("testing error");
    return pokemon;
  } catch (error) {
    console.error(error);
    throw new Error(
      "fetching Pokemon from database. Possible Firestore issue or insufficient permissions.",
    );
  }
}

// use: for client load
// export function fetchTwelvePokemonFromDB() {
//   const randomIds = getRandomNumbers(12, 1, 151);
//   const pokemonCollection = collection(db, "pokemon");

//   // create a single query with an 'in' clause to fetch all Pokemon in one go
//   const pokemonQuery = query(pokemonCollection, where("id", "in", randomIds));

//   const collectionSnapshot = use(getDocs(pokemonQuery));

//   let pokemons: Pokemon[] = [];
//   for (let i = 0; i < 12; i++) {
//     pokemons.push(collectionSnapshot.docs[i].data() as Pokemon);
//   }

//   console.log("random pokemon from DB: ", pokemons);
//   return pokemons;
// }

// // use: fetch one pokemon, for pokemon page
// export function fetchPokemonFromDB(id: number): Pokemon {
//   const pokemonCollection = collection(db, "pokemon");
//   const pokemonQuery = query(pokemonCollection, where("id", "==", id));
//   const collectionSnapshot = use(getDocs(pokemonQuery));

//   const pokemon = collectionSnapshot.docs[0].data() as Pokemon;
//   console.log(pokemon);
//   return pokemon;
// }
