import { Suspense, use } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchPokemonFromDBAsync } from "../api/actions.ts";
import PokemonCard from "../components/pokemonCard";
import ErrorBoundary, { ErrorComponent } from "../components/errorboundary.tsx";
import Loading from "../components/loading.tsx";
import { Pokemon as PokemonType } from "../types.ts";

import styles from "./home.module.css";

export default function Pokemon() {
  const pokemonId = Number(useParams<{ id: string }>().id) || NaN;

  return (
    <>
      <Box className={styles.pokemonPage}>
        <Typography className={styles.title}>Pokemon Page</Typography>
        <ErrorBoundary
          fallback={
            <ErrorComponent
              type="Pokemon"
              description="Error loading Pokemon"
            />
          }
        >
          <Suspense fallback={<Loading />}>
            <RenderPokemon
              pokemonPromise={fetchPokemonFromDBAsync(pokemonId)}
            />
          </Suspense>
        </ErrorBoundary>
      </Box>
    </>
  );
}

function RenderPokemon({
  pokemonPromise,
}: {
  pokemonPromise: Promise<PokemonType>;
}) {
  const pokemon = use(pokemonPromise);
  //   const pokemon: PokemonType = use(Promise.reject("testing error"));

  return (
    <PokemonCard id={pokemon.id} name={pokemon.name} type={pokemon.type} />
  );
}

// function RenderPokemonUSE({ pokemonId }: { pokemonId: number }) {
//   const pokemon = fetchPokemonFromDB(pokemonId);
//   //   const pokemon: PokemonType = use(Promise.reject("testing error"));

//   return <PokemonCard id={pokemonId} name={pokemon.name} type={pokemon.type} />;
//   // return <Box>Hello</Box>;
// }
