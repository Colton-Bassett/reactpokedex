import { Card, Grid2 } from "@mui/material";

export default function PokemonCard() {
  return (
    <>
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
      <Card
        sx={{
          backgroundColor: "var(--background-color)",
          color: "var(--primary-color)",
        }}
      >
        <h2>Hello, I'm Pokemon</h2>
      </Card>
    </>
  );
}

export function PokemonList() {
  return (
    <>
      <Grid2
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      ></Grid2>
    </>
  );
}
