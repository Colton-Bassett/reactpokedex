import styles from "../pages/home.module.css";

export default function Loading() {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>🌀 Loading...</h2>
    </div>
  );
}
