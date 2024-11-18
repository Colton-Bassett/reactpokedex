import styles from "./home.module.css";
import PokemonCard, { PokemonList } from "../components/pokemonCard";
import { Box } from "@mui/material";

export default function Home() {
  const rows = [
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
    <>
      <Box className={styles.home}>
        {/* <Suspense fallback={<Loading />}>
        <Page />
      </Suspense> */}
        <PokemonList>
          {rows.map((p) => (
            <PokemonCard key={p.id} id={p.id} name={p.name} type={p.type} />
          ))}
        </PokemonList>
      </Box>
    </>
  );
}

// function Loading() {
//   return <h2>🌀 Loading...</h2>;
// }
