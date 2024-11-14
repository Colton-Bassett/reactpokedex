import { Box, Container } from "@mui/material";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div>React Pokedex</div>
      </footer>
    </Box>
  );
}
