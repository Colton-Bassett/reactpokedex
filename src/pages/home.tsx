import { Suspense } from "react";
import Page from "./pokemon";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* <Suspense fallback={<Loading />}>
        <Page />
      </Suspense> */}
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
