import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { PokemonList } from "../components/pokemonList";
import { fetchTwelvePokemonFromDBAsync } from "../api/actions";

import styles from "./home.module.css";
import ErrorBoundary, { ErrorComponent } from "../components/errorboundary";
import Loading from "../components/loading";

export default function Home() {
  const navigate = useNavigate();

  function handleRefreshPage() {
    navigate(0);
  }
  return (
    <>
      <Box className={styles.home}>
        <ErrorBoundary
          fallback={
            <ErrorComponent
              type="Pokemon List"
              description="Error loading Pokemon List"
            />
          }
        >
          <Suspense fallback={<Loading />}>
            <PokemonList pokemonListPromise={fetchTwelvePokemonFromDBAsync()} />
          </Suspense>
        </ErrorBoundary>

        <Button
          variant="contained"
          className={styles.loadMoreButton}
          onClick={() => handleRefreshPage()}
        >
          Load more
        </Button>
      </Box>
    </>
  );
}
