import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { PokemonList } from "../components/pokemonList";
import { fetchTwelvePokemonFromDBAsync } from "../api/actions";

import styles from "./home.module.css";
import ErrorBoundary from "../components/errorboundary";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box className={styles.home}>
        <ErrorBoundary fallback={<div>Error</div>}>
          <Suspense fallback={<Loading />}>
            <PokemonList pokemonListPromise={fetchTwelvePokemonFromDBAsync()} />
          </Suspense>
        </ErrorBoundary>
        <Button
          variant="contained"
          className={styles.loadMoreButton}
          onClick={() => navigate("/")}
        >
          Load more
        </Button>
      </Box>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
