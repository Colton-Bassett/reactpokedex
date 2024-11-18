import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { separatePokemonTypes } from "../lib/utils";

import styles from "./pokemonCard.module.css";
import { Link } from "react-router-dom";

export default function PokemonCard({
  id,
  name,
  type,
}: {
  id: number;
  name: string;
  type: string;
}) {
  const typeA = separatePokemonTypes(type)[0];
  const typeB = separatePokemonTypes(type)[1];
  return (
    <>
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
      <Link to={`/pokemon/${id}`}>
        <Card
          className={styles.pokemonCard}
          sx={{
            backgroundColor: "var(--background-paper-color)",
            color: "var(--primary-color)",
          }}
        >
          <CardContent>
            <Box className={styles.imageContainer}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={`${name} sprite`}
              ></img>
            </Box>
            <Typography variant="h5" className={styles.name}>
              {name}
            </Typography>
            <Box className={styles.typeContainer}>
              {typeA ? (
                <Typography className={styles.type}>{typeA}</Typography>
              ) : (
                <></>
              )}
              {typeB ? (
                <Typography className={styles.type}>{typeB}</Typography>
              ) : (
                <></>
              )}
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}

export function PokemonList({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Grid2
        container
        gap={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className={styles.pokemonListGrid}
      >
        {children}
      </Grid2>
    </>
  );
}
