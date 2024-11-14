import { Box } from "@mui/material";
import styles from "./nav.module.css";
export default function Nav() {
  return (
    <>
      <Box component="nav" className={styles.nav}>
        <div>React Pokedex</div>
      </Box>
    </>
  );
}
