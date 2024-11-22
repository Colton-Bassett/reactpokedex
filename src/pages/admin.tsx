import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";

import {
  deleteAllPokemonFromDB,
  fetchPokemonFromAPI,
  fetchTwelvePokemonFromDBAsync,
  storePokemonInDB,
} from "../api/actions";

import styles from "./admin.module.css";
import { useTransition } from "react";
import { Pokemon } from "../types";

export default function Admin() {
  const [isFetchPending, startFetchTransition] = useTransition();
  const [isStorePending, startStoreTransition] = useTransition();
  const [isDeletePending, startDeleteTransition] = useTransition();

  // API handlers
  async function handleStorePokemonInDB() {
    // try catch this
    const pokemonList: Pokemon[] = await fetchPokemonFromAPI();
    try {
      await storePokemonInDB(pokemonList);
      alert("Pokemon stored successfully");
    } catch (error) {
      alert(error);
    }
  }

  async function handleFetchPokemon() {
    try {
      const pokemonList: Pokemon[] = await fetchPokemonFromAPI();
      console.log(pokemonList);
      alert(pokemonList.length + " Pokemon fetched successfully");
    } catch (error) {
      alert(error);
    }
  }

  async function handleDeleteAllPokemonFromDB() {
    try {
      await deleteAllPokemonFromDB();
      alert("All Pokemon deleted successfully");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
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
                onClick={() => {
                  startFetchTransition(async () => {
                    await handleFetchPokemon();
                  });
                }}
                variant="contained"
                disabled={isFetchPending}
                sx={{
                  borderRadius: "9999px",
                  color: "var(--background-paper-color)",
                  backgroundColor: "var(--secondary-color)",
                  textTransform: "none",
                  minWidth: "82px",
                }}
                className={styles.adminCardButton}
              >
                <Typography>
                  {isFetchPending ? "Fetching..." : "Fetch"}
                </Typography>
              </Button>
            }
          />
          <AdminCard
            title={"Save Pokemon"}
            subtitle={"Fetch and save all pokemon to database"}
            action={"Save"}
            button={
              <Button
                onClick={() => {
                  startStoreTransition(async () => {
                    await handleStorePokemonInDB();
                  });
                }}
                variant="contained"
                disabled={isStorePending}
                sx={{
                  borderRadius: "9999px",
                  color: "var(--background-paper-color)",
                  backgroundColor: "var(--secondary-color)",
                  textTransform: "none",
                  minWidth: "82px",
                }}
                className={styles.adminCardButton}
              >
                <Typography>{isStorePending ? "Saving..." : "Save"}</Typography>
              </Button>
            }
          />
          <AdminCard
            title={"Delete Pokemon"}
            subtitle={"Delete all pokemon from database"}
            action={"Delete"}
            button={
              <Button
                onClick={() => {
                  startDeleteTransition(async () => {
                    await handleDeleteAllPokemonFromDB();
                  });
                }}
                variant="contained"
                disabled={isDeletePending}
                sx={{
                  borderRadius: "9999px",
                  color: "var(--background-paper-color)",
                  backgroundColor: "var(--secondary-color)",
                  textTransform: "none",
                  minWidth: "82px",
                }}
                className={styles.adminCardButton}
              >
                <Typography>
                  {isDeletePending ? "Deleting..." : "Delete"}
                </Typography>
              </Button>
            }
          />
        </Grid2>
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
