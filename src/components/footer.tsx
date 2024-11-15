import reactLogo from "../assets/react_logo_dark.svg";
import { Box, Typography } from "@mui/material";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <footer className={styles.footer}>
        <a href="/" className={styles.logoLink}>
          <img src={reactLogo} className={styles.logo} alt="React logo" />

          <Typography variant="h6" className={styles.logoText}>
            Pokedex
          </Typography>
        </a>
      </footer>
    </Box>
  );
}
