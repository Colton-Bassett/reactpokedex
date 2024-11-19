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
  //   const response = use(
  //     fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) => res.json()),
  //   );
  //   console.log(response);

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
          />
          <AdminCard
            title={"Save Pokemon"}
            subtitle={"Fetch and save all pokemon to database"}
            action={"Save"}
          />
          <AdminCard
            title={"Delete Pokemon"}
            subtitle={"Delete all pokemon from database"}
            action={"Delete"}
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
      <CardActions sx={{ padding: "16px" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "9999px",
            color: "var(--background-paper-color)",
            backgroundColor: "var(--secondary-color)",
            textTransform: "none",
            minWidth: "82px",
          }}
        >
          <Typography>{action}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
