import { Suspense, use } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";

import styles from "./admin.module.css";

export default function Admin() {
  interface Pokemon {
    id: number;
    name: string;
    type: string;
  }

  function fetchPokemonFromAPI() {
    // let pokemonList: Pokemon[] = [];

    const pokemonData = use(
      Promise.all(
        Array.from({ length: 5 }, (_, i) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
            .then((res) => res.json())
            .then((data) => {
              const pokemon: Pokemon = {
                id: data.id,
                name: data.name,
                type:
                  data.types.length > 1
                    ? data.types[0].type.name + data.types[1].type.name
                    : data.types[0].type.name,
              };
              console.log(pokemon);
              return pokemon;
            }),
        ),
      ),
    );
    console.log(pokemonData);
    return pokemonData;
  }

  return (
    <>
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
      <Box className={styles.adminContainer}>
        <Typography className={styles.title}>Admin Page</Typography>
        <Grid2
          container
          gap={3}
          columnSpacing={{ xs: 1, sm: 1, md: 2 }}
          className={styles.adminCardContainer}
        >
          <AdminCard
            title={"Fetch Pokemon"}
            subtitle={"Fetch and log all pokemon in console (debugging)"}
            action={"Fetch"}
            button={
              <Button
                onClick={() => fetchPokemonFromAPI()}
                variant="contained"
                sx={{
                  borderRadius: "9999px",
                  color: "var(--background-paper-color)",
                  backgroundColor: "var(--secondary-color)",
                  textTransform: "none",
                  minWidth: "82px",
                }}
              >
                <Typography>Fetch</Typography>
              </Button>
            }
          />
          <AdminCard
            title={"Save Pokemon"}
            subtitle={"Fetch and save all pokemon to database"}
            action={"Save"}
            button={
              <Button
                onClick={() => alert("Fetch")}
                variant="contained"
                sx={{
                  borderRadius: "9999px",
                  color: "var(--background-paper-color)",
                  backgroundColor: "var(--secondary-color)",
                  textTransform: "none",
                  minWidth: "82px",
                }}
              >
                <Typography>Save</Typography>
              </Button>
            }
          />
          <AdminCard
            title={"Delete Pokemon"}
            subtitle={"Delete all pokemon from database"}
            action={"Delete"}
            button={
              <Button
                onClick={() => alert("Fetch")}
                variant="contained"
                sx={{
                  borderRadius: "9999px",
                  color: "var(--background-paper-color)",
                  backgroundColor: "var(--secondary-color)",
                  textTransform: "none",
                  minWidth: "82px",
                }}
              >
                <Typography>Delete</Typography>
              </Button>
            }
          />
        </Grid2>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <PokemonTest />
        </Suspense> */}
      </Box>
    </>
  );
}

function AdminCard({
  title,
  subtitle,
  action,
  button,
}: {
  title: string;
  subtitle: string;
  action: string;
  button: React.ReactNode;
}) {
  return (
    <Card
      sx={{
        backgroundColor: "var(--background-paper-color)",
        color: "var(--text-color)",
      }}
      className={styles.adminCard}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ marginBottom: "0.5rem", fontWeight: "600" }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: "var(--text-secondary-color)" }}>
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "16px" }}>{button}</CardActions>
    </Card>
  );
}

function PokemonTest() {
  const pokemonPromises = Array.from({ length: 2 }, (_, i) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`).then((res) =>
      res.json(),
    ),
  );

  const pokemonDataRaw = use(Promise.all(pokemonPromises));
  console.log(pokemonDataRaw);
  //   const response = use(
  //     fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) => res.json()),
  //   );
  //   console.log(response);

  return <div>Done</div>;
}
