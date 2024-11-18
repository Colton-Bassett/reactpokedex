import reactLogo from "../assets/react_logo_dark.svg";
import { Box, Typography } from "@mui/material";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <footer className={styles.footer}>
        <Box className={styles.linkContainer}>
          <a href="/" className={styles.logoLink}>
            <img src={reactLogo} className={styles.logo} alt="React logo" />

            <Typography variant="h6" className={styles.logoText}>
              Pokedex
            </Typography>
          </a>
          <a href="/help" className={styles.link}>
            <Typography variant="h6" className={styles.linkText}>
              Help
            </Typography>
          </a>
          <a href="/disclaimer" className={styles.link}>
            <Typography variant="h6" className={styles.linkText}>
              Disclaimer
            </Typography>
          </a>
        </Box>
      </footer>
    </Box>
  );
}
