import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div>React Pokedex</div>
      </footer>
    </div>
  );
}
