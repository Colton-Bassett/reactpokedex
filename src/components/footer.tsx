import reactLogo from "../assets/react_logo_dark.svg";
import { Box, Typography } from "@mui/material";

import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../lib/utils";

export default function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.linkInnerContainer}>
          <Box className={styles.linkContainer}>
            <Link
              to="/"
              className={styles.logoLink}
              onClick={() => scrollToTop()}
            >
              <img src={reactLogo} className={styles.logo} alt="React logo" />

              <Typography variant="h6" className={styles.logoText}>
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
          </Box>
        </div>
      </footer>
    </Box>
  );
}
