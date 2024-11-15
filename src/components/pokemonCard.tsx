import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { separatePokemonTypes } from "../lib/utils";

import styles from "./pokemonCard.module.css";

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
      <Card
        className={styles.pokemonCard}
        sx={{
          backgroundColor: "var(--background-color)",
          color: "var(--primary-color)",
        }}
      >
        <CardContent>
          <Typography variant="h5" className={styles.name}>
            {name}
          </Typography>
          <Box className={styles.typeContainer}>
            <Typography>{typeA}</Typography>
            <Typography>{typeB}</Typography>
          </Box>
        </CardContent>
      </Card>
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
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </Grid2>
    </>
  );
}
