import reactLogo from "../assets/react.svg";
import { Box, Typography } from "@mui/material";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <footer className={styles.footer}>
        <a href="https://react.dev" target="_blank" className={styles.logoLink}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Typography variant="h6">Pokedex</Typography>
      </footer>
    </Box>
  );
}
