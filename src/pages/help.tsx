import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { scrollToTop } from "../lib/utils";

import styles from "./home.module.css";

export default function Help() {
  return (
    <>
      <Box className={styles.disclaimer}>
        <Link
          to={`/`}
          className={styles.homeLink}
          onClick={() => scrollToTop()}
        >
          <Typography className={styles.homeLinkInner}>HOME &#8201;</Typography>
          {
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z"
                fill="currentColor"
              ></path>
            </svg>
          }
        </Link>
        <Typography className={styles.title}>Help Page</Typography>
        <Typography className={styles.subtitle}>November 18, 2024</Typography>
        <hr className={styles.linebreak}></hr>
        <Typography className={styles.paragraph}>
          This website displays 12 randomly selected Gen 1 Pokémon from a list
          of 151. Data is fetched from PokéAPI and stored in a Firebase
          Firestore. Users can refresh the list by clicking the{" "}
          <code className={styles.code}>load more</code> button on the Home
          Page. Clicking a Pokémon leads to a basic detail page with a unique
          URL.
        </Typography>
        <Typography className={styles.paragraph}>
          Built with React 19, this is a CSR single-page app. Pokémon are
          fetched on page load from the Firestore with React's newer{" "}
          <code className={styles.code}>use API</code>;{" "}
          <code className={styles.code}>useEffect</code> or 3rd party libraries
          like <code className={styles.code}>react query</code> are not used.
        </Typography>
        <Typography className={styles.paragraph}>
          An admin page is also available, which requires sufficient
          permissions. This page allows for managing Pokémon data, including
          adding, saving, and deleting entries via Firestore queries.
        </Typography>
      </Box>
    </>
  );
}
