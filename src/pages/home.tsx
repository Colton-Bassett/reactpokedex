import { Suspense } from "react";
import Page from "./pokemon";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <h1>Home</h1>
      {/* <Suspense fallback={<Loading />}>
        <Page />
      </Suspense> */}
    </main>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
