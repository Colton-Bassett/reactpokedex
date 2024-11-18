import reactLogo from "../assets/react_logo_dark.svg";
import githubLogo from "../assets/github_logo_dark.svg";

import { Box, Typography } from "@mui/material";
import styles from "./nav.module.css";
export default function Nav() {
  return (
    <>
      <Box className={styles.container}>
        <Box component="nav" className={styles.nav}>
          <a href="/" className={styles.link}>
            <img src={reactLogo} className={styles.logo} alt="React logo" />

            <Typography variant="h6" className={styles.logoText}>
              Pokedex
            </Typography>
          </a>
          <Box className={styles.linkContainer}>
            <a href="help" className={styles.link}>
              <Typography className={styles.linkText}>Help</Typography>
            </a>
            <a href="/disclaimer" className={styles.link}>
              <Typography className={styles.linkText}>Disclaimer</Typography>
            </a>
            <a
              href="https://github.com/colton-bassett/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              <img src={githubLogo} alt="Github website" />
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
