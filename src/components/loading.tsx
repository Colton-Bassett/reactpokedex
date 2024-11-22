import { CircularProgress } from "@mui/material";

import styles from "../pages/home.module.css";

export default function Loading() {
  return (
    <div className={styles.errorContainer}>
      <CircularProgress size="3rem" color="primary" />
    </div>
  );
}
