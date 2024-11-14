import { use } from "react";
import { Card } from "@mui/material";

export default function Pokemon() {
  //   const response = use(
  //     fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) => res.json()),
  //   );
  //   console.log(response);

  return (
    <>
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
      <h1>Pokemon Page</h1>
      <Card
        sx={{
          backgroundColor: "var(--background-color)",
          color: "var(--primary-color)",
        }}
      >
        <h1>Hello I'm Card</h1>
      </Card>
    </>
  );
}
