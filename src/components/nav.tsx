import reactLogo from "../assets/react_logo_dark.svg";

import { Box, Typography } from "@mui/material";
import styles from "./nav.module.css";
export default function Nav() {
  return (
    <>
      <Box className={styles.container}>
        <Box component="nav" className={styles.nav}>
          <a href="/" className={styles.logoLink}>
            <img src={reactLogo} className={styles.logo} alt="React logo" />

            <Typography variant="h6" className={styles.logoText}>
              Pokedex
            </Typography>
          </a>
        </Box>
      </Box>
    </>
  );
}
