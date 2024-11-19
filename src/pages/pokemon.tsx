import { use } from "react";
import { Box, Typography } from "@mui/material";
import PokemonCard from "../components/pokemonCard";
import { useParams } from "react-router-dom";

import { db } from "../firebase-config.ts";
import { collection, getDocs } from "firebase/firestore";

import styles from "./home.module.css";

export default function Pokemon() {
  // const response = use(
  //   fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) => res.json()),
  // );
  // console.log(response);

  const querySnapshot = use(
    Promise.resolve(getDocs(collection(db, "pokemon"))),
  );

  const pokemonData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log("Retrieved Pokemon:", pokemonData);

  const { id } = useParams<{ id: string }>(); // get id from url
  const pokemonId = id ? Number(id) : NaN; // convert to number
  const pokemon = { id: 75, name: "Graveler", type: "GroundRock" }; // TODO: fetch pokemon instead
  return (
    <>
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
      <Box className={styles.pokemonPage}>
        <Typography className={styles.title}>Pokemon Page</Typography>
        <PokemonCard id={pokemonId} name={pokemon.name} type={pokemon.type} />
      </Box>
    </>
  );
}
