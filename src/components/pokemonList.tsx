import { Grid2 } from "@mui/material";
import { Pokemon } from "../types";
import { fetchTwelvePokemonFromDB } from "../api/actions";
import PokemonCard from "../components/pokemonCard";

import styles from "./pokemonCard.module.css";
import { use } from "react";

export function PokemonList() {
  //   const rows: Pokemon[] = fetchTwelveRandomPokemonFromDB();
  const rows: Pokemon[] = [
    { id: 75, name: "Graveler", type: "GroundRock" },
    { id: 149, name: "Dragonite", type: "DragonFlying" },
    { id: 134, name: "Vaporeon", type: "Water" },
    { id: 110, name: "Weezing", type: "Poison" },
    { id: 40, name: "Wigglytuff", type: "NormalFairy" },
    { id: 44, name: "Gloom", type: "GrassPoison" },
    { id: 108, name: "Lickitung", type: "Normal" },
    { id: 86, name: "Seel", type: "Water" },
    { id: 133, name: "Eevee", type: "Normal" },
    { id: 137, name: "Porygon", type: "Normal" },
    { id: 91, name: "Cloyster", type: "WaterIce" },
    { id: 45, name: "Vileplume", type: "GrassPoison" },
  ];

  return (
    <Grid2
      container
      gap={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      className={styles.pokemonListGrid}
    >
      {rows.map((p) => (
        <PokemonCard key={p.id} id={p.id} name={p.name} type={p.type} />
      ))}
    </Grid2>
  );
}
