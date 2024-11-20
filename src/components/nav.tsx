import reactLogo from "../assets/react_logo_dark.svg";
import githubLogo from "../assets/github_logo_dark.svg";

import { Box, Typography } from "@mui/material";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../lib/utils";
export default function Nav() {
  return (
    <>
      <Box className={styles.container}>
        <Box component="nav" className={styles.nav}>
          <Link
            to="/"
            className={styles.logoLink}
            onClick={() => scrollToTop()}
          >
            <img src={reactLogo} className={styles.logo} alt="React logo" />

            <Typography variant="h5" className={styles.logoText}>
              Pokedex
            </Typography>
          </Link>
          <Box className={styles.linkContainer}>
            <Link
              to="/help"
              className={styles.link}
              onClick={() => scrollToTop()}
            >
              <Typography className={styles.linkText}>Help</Typography>
            </Link>
            <Link
              to="/disclaimer"
              className={styles.link}
              onClick={() => scrollToTop()}
            >
              <Typography className={styles.linkText}>Disclaimer</Typography>
            </Link>
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
