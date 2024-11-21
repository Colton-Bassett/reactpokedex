import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { PokemonList } from "../components/pokemonList";

import styles from "./home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box className={styles.home}>
        <Suspense fallback={<Loading />}>
          <PokemonList />
        </Suspense>
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
