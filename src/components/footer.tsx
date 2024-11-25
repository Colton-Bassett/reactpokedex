import { Link } from "react-router-dom";
import reactLogo from "../assets/react_logo_dark.svg";
import { scrollToTop } from "../lib/utils";
import { Box, Typography } from "@mui/material";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <footer className={styles.footer}>
        <Box className={styles.footerInner}>
          <Box className={styles.linkContainer}>
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
            <Link
              to="/admin"
              className={styles.link}
              onClick={() => scrollToTop()}
            >
              <Typography className={styles.linkText}>Admin</Typography>
            </Link>
          </Box>
        </Box>
      </footer>
    </Box>
  );
}
