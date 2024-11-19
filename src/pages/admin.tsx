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
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

interface Pokemon {
  id: number;
  name: string;
  type: string;
}

export default function Admin() {
  const pokemonList = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 2, name: "Ivysaur", type: "Grass/Poison" },
    { id: 3, name: "Venusaur", type: "Grass/Poison" },
    { id: 4, name: "Charmander", type: "Fire" },
    { id: 5, name: "Charmeleon", type: "Fire" },
  ];

  //   function fetchPokemonFromAPIWithState() {
  //     // this is for updating state async in client

  //     const pokemonData = use(
  //       Promise.all(
  //         Array.from({ length: 5 }, (_, i) =>
  //           fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
  //             .then((res) => res.json())
  //             .then((data) => {
  //               const pokemon: Pokemon = {
  //                 id: data.id,
  //                 name: data.name,
  //                 type:
  //                   data.types.length > 1
  //                     ? data.types[0].type.name + data.types[1].type.name
  //                     : data.types[0].type.name,
  //               };
  //               console.log(pokemon);
  //               return pokemon;
  //             }),
  //         ),
  //       ),
  //     );
  //     console.log(pokemonData);
  //     return pokemonData;
  //   }

  function saveToDB() {
    storePokemonList(pokemonList)
      .then(() => {
        console.log("All Pokémon have been stored!");
      })
      .catch((error) => {
        console.error("Error storing Pokémon list:", error);
      });
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
                onClick={() => saveToDB()}
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
                onClick={() => alert("Delete")}
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

const storePokemonList = async (pokemonList: Pokemon[]) => {
  // Reference to the Firestore collection where the Pokémon data will be stored
  const pokemonCollection = collection(db, "pokemon"); // 'pokemons' is the collection name

  try {
    // Iterate over each Pokémon in the list and store it in Firestore
    for (const pokemon of pokemonList) {
      await addDoc(pokemonCollection, {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
      });
      console.log(`Stored Pokémon with ID: ${pokemon.id}`);
    }
  } catch (error) {
    console.error("Error storing Pokémon data:", error);
  }
};

const fetchPokemonFromAPI = async () => {
  const pokemonList = [];

  for (let id = 1; id <= 5; id++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();

    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      type:
        data.types.length > 1
          ? data.types[0].type.name + data.types[1].type.name
          : data.types[0].type.name,
    };

    pokemonList.push(pokemon);
    console.log(pokemon); // Log the data for each Pokémon
  }

  console.log("All Pokémon fetched:", pokemonList); // Log the complete list
};
