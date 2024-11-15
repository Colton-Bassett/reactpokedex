import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
} from "@mui/material";

import styles from "./admin.module.css";

export default function Admin() {
  //   const response = use(
  //     fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) => res.json()),
  //   );
  //   console.log(response);

  return (
    <>
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
      <Box className={styles.adminContainer}>
        <h1>Admin Page</h1>
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
          />
          <AdminCard
            title={"Save Pokemon"}
            subtitle={"Fetch and save all pokemon to database"}
            action={"Save"}
          />
          <AdminCard
            title={"Delete Pokemon"}
            subtitle={"Delete all pokemon from database"}
            action={"Fetch"}
          />
        </Grid2>
      </Box>
    </>
  );
}

function AdminCard({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action: string;
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
        <Box>{title}</Box>
        <Box sx={{ color: "var(--text-secondary-color)" }}>{subtitle}</Box>
      </CardContent>
      <CardActions>
        <Button>{action}</Button>
      </CardActions>
    </Card>
  );
}
