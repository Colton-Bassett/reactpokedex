import { use } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config.ts";
import { collection, getDocs } from "firebase/firestore";
import { Box, Typography } from "@mui/material";
import PokemonCard from "../components/pokemonCard";

import styles from "./home.module.css";
import { fetchPokemonFromDB } from "../api/actions.ts";

export default function Pokemon() {
  const pokemonId = Number(useParams<{ id: string }>().id) || NaN;
  const pokemon = fetchPokemonFromDB(pokemonId);
  return (
    <>
      <Box className={styles.pokemonPage}>
        <Typography className={styles.title}>Pokemon Page</Typography>
        <PokemonCard id={pokemonId} name={pokemon.name} type={pokemon.type} />
      </Box>
    </>
  );
}
