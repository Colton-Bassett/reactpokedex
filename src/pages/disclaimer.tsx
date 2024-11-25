import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { scrollToTop } from "../lib/utils";

import styles from "./home.module.css";

export default function Disclaimer() {
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
        <Typography className={styles.title}>Disclaimer Page</Typography>
        <Typography className={styles.subtitle}>November 18, 2024</Typography>
        <hr className={styles.linebreak}></hr>
        <Typography className={styles.paragraph}>
          This website is designed for educational and exploratory purposes,
          focusing on learning and experimenting with React, Firebase products,
          React 19 hooks, and Material UI. It serves as a personal project to
          demonstrate and explore these technologies in practice.
        </Typography>
        <Typography className={styles.paragraph}>
          This website is an unofficial fan-made project and is not affiliated
          with, endorsed by, or otherwise associated with The Pokémon Company,
          Nintendo, or Game Freak. All trademarks and copyrights related to
          Pokémon are the property of their respective owners. All rights
          reserved.
        </Typography>
        <Typography className={styles.paragraph}>
          This site is an independent web app and is not associated with,
          endorsed by, or connected to React, Firebase, MaterialUI, or any of
          their affiliates. All related trademarks and copyrights are owned by
          their respective entities. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
