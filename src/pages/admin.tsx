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
  fetchTwelveRandomPokemonFromDB,
  storePokemonInDB,
} from "../api/actions";

import styles from "./admin.module.css";

export default function Admin() {
  async function saveToDB() {
    const pokemonList = await fetchPokemonFromAPI();
    storePokemonInDB(pokemonList)
      .then(() => {
        console.log("All Pokémon have been stored!");
      })
      .catch((error) => {
        console.error("Error storing Pokémon list:", error);
      });
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
                onClick={() => fetchTwelveRandomPokemonFromDB()}
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
                onClick={() => deleteAllPokemonFromDB()}
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
