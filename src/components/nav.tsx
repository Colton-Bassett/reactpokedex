import reactLogo from "../assets/react.svg";

import { Box, Typography } from "@mui/material";
import styles from "./nav.module.css";
export default function Nav() {
  return (
    <>
      <Box className={styles.container}>
        <Box component="nav" className={styles.nav}>
          <a
            href="https://react.dev"
            target="_blank"
            className={styles.logoLink}
          >
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <Typography variant="h6">Pokedex</Typography>
        </Box>
      </Box>
    </>
  );
}
